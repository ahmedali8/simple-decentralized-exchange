// Async Actions
import Web3 from 'web3'
import { setupWeb3, setupContract, setupAccount, setupNetwork, addTokens } from './actions';
import TokenZendR from '../build/contracts/TokenZendR.json';
import Tokens from '../Tokens/all';

// For loading blockchain
export const loadBlockchainData = async (dispatch) => {
    try {
        console.log("Web3 >>> ", Web3);
        console.log("Web3.givenProvider >>> ", Web3.givenProvider);

        if (Web3.givenProvider) {
            // LOADING BLOCKCHAIN
            const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
            await Web3.givenProvider.enable();
            dispatch(setupWeb3(web3));

            // LOADING CONTRACT
            const networkId = await web3.eth.net.getId();
            const { address } = await TokenZendR.networks[networkId];
            const contract = new web3.eth.Contract(TokenZendR.abi, address);
            dispatch(setupContract(contract));

            // LOADING ACCOUNT
            const accounts = await web3.eth.getAccounts();
            dispatch(setupAccount(accounts[0]));

            // LOADING NETWORK
            const networkName = await web3.eth.net.getNetworkType();
            dispatch(setupNetwork(networkName));

            Tokens.forEach(async (token) => {
                let erc20Token = new web3.eth.Contract(token.abi, token.address);
                console.log(erc20Token)
                await erc20Token.methods.balanceOf(accounts[0]).call((err, res) => {
                    if (!err) {
                        let balance = res;

                        if (balance > 0) {
                            let tokens = {
                                name: token.name,
                                decimal: token.decimal,
                                symbol: token.symbol,
                                icon: token.icon,
                                address: token.address,
                                abi: token.abi,
                                balance: res,
                            };
                            dispatch(addTokens(tokens));
                        }
                    }
                });

            });


        }
        else {
            // will display install metamask component
        }

    } catch (error) {
        console.log("Error in loading Web3 >>> ", error);

        if (error.code === 4001) {
            console.log('Error message >>> ', error.message);
        }

    }
}