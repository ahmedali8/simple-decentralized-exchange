const CubToken = artifacts.require("CubToken");

module.exports = function (deployer) {
  deployer.deploy(CubToken);
};
