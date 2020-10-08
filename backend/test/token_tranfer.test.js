/*
const TokenZendR = artifacts.require('./TokenZendR.sol');
const BearToken = artifacts.require('./BearToken.sol');
const CubToken = artifacts.require('./CubToken.sol');

const BigNumber = web3.utils.BN;

const should = require('chai')
    .use(require('chai-as-promised'))
    .use(require('chai-bignumber')(BigNumber))
    .should();

let sender, bear, cub;

contract('token_transfer', async (accounts) => {
    let [accountA, accountB] = accounts;

    beforeEach(async () => {
        sender = await TokenZendR.new();
        bear = await BearToken.new();
        cub = await CubToken.new();

        await sender.addNewToken('BEAR', bear.address);
        await sender.addNewToken('CUB', cub.address);
    });

    it('should be able to transfer sender token to another wallet', async () => {
        // When transfering  token, multiple by
        //figure of decimal to get exact token e.g
        //to send 5 BEAR = 5e18, where 18 is the decimal places

        // let amount = new BigNumber(500000e18);
        let amount = new BigNumber(500).toString();

        // Account A approve contract to spend on behalf
        await bear.approve(sender.address, amount, { from: accountA });

        await sender.transferTokens('BEAR', accountB, amount, { from: accountA });

        let balance = ((await bear.balanceOf(accountB)).toString());

        balance.should.equal(amount.toString());
    });
});
*/