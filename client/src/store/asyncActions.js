// Async Actions
import Web3 from 'web3'
import { setupWeb3, setupContract, setupAccount, setupNetwork, setupGasPrice, addTokens } from './actions';
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
            dispatch(setupContract(contract, address));

            // LOADING ACCOUNT
            const accounts = await web3.eth.getAccounts();
            dispatch(setupAccount(accounts[0]));

            // LOADING NETWORK
            const networkName = await web3.eth.net.getNetworkType();
            dispatch(setupNetwork(networkName));

            // LOADING GASPRICE
            let gasPrice = await web3.eth.getGasPrice();
            gasPrice = web3.utils.fromWei(gasPrice, 'gwei');
            dispatch(setupGasPrice(+gasPrice));

            Tokens.forEach(async (token) => {

                let erc20Token = new web3.eth.Contract(token.abi, token.address);

                await erc20Token.methods.balanceOf(accounts[0]).call((err, res) => {
                    if (!err) {
                        let precision = '1e' + token.decimal;
                        let balance = +(res / precision);

                        if (balance > 0) {
                            let tokens = {
                                name: token.name,
                                decimal: token.decimal,
                                symbol: token.symbol,
                                icon: token.icon,
                                address: token.address,
                                abi: token.abi,
                                balance: balance,
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


// For Transferring token
export const TransferAsync = async (state, dispatch) => {
    console.log(state)
    console.log(state.transferDetails)

    if (state.web3) {

        let tokenContract = await new state.web3.eth.Contract(state.transferDetails.abi, state.transferDetails.address);
        console.log(tokenContract)

        let transObj = {
            from: state.account,
            gas: state.defaultGasLimit,
            gasPrice: state.defaultGasPrice
        };
        console.log(transObj)

        // let amount = +(state.fields.amount + 'e' + state.transferDetails.decimal);
        let amount = +(state.fields.amount);
        console.log(amount)

        let symbol = state.transferDetails.symbol;
        console.log(symbol)

        let receiver = state.fields.receiver;
        console.log(receiver)

        await tokenContract.methods.approve(receiver, amount).send({ from: state.account }, (err, res) => {
            if (!err) {




                // console.log(state.contract)

                // state.contract.methods.transferTokens(symbol, receiver, amount).send({ from: state.account })
                //     .on('receipt', (err, res) => {
                //     console.log(res)
                // })

                // console.log(receipt)
                // if (receipt) {

                // }

            } else {
                console.log('Error >>>', err);
            }
        });
        await tokenContract.methods.allowance(state.account, state.tzAddress).call((err, res) => console.log(res))
        await tokenContract.methods.allowance(state.account, receiver).call((err, res) => console.log(res))
        // await state.contract.methods.transferTokens(symbol, receiver, amount).send({ from: state.account }, (err, res) => console.log(res))
        await tokenContract.methods.transferFrom(state.account, '0x92D9c8d4a885861E2C5d4FD869f4C031de5f65eE', amount).send({ from: receiver }, (err, res) => console.log(res))
        await tokenContract.methods.balanceOf(state.tzAddress).call((err, res) => console.log(res))
        await tokenContract.methods.balanceOf(receiver).call((err, res) => console.log(res))

    }
}