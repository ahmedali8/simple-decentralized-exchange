const TokenZendR = artifacts.require('./TokenZendR.sol');

const should = require('chai')
    .use(require('chai-as-promised'))
    .should();

let sender;

contract('token_management', async (accounts) => {
    beforeEach(async () => {
        sender = await TokenZendR.new();
        await sender.addNewToken('OPEN', '0x69c4BB240cF05D51eeab6985Bab35527d04a8C64');
    });

    it('should add new supported token', async () => {
        let address = await sender.tokens.call('OPEN');

        address.should.equal('0x69c4BB240cF05D51eeab6985Bab35527d04a8C64');
    });
});