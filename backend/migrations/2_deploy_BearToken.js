const BearToken = artifacts.require("BearToken");

module.exports = function (deployer) {
  deployer.deploy(BearToken);
};
