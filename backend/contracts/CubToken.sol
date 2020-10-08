// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.6.0 <0.7.0;

import '../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol';
import '../node_modules/openzeppelin-solidity/contracts/access/Ownable.sol';

/**  
* @title CubToken is a basic ERC20 Token  
*/ 
contract CubToken is ERC20, Ownable {

    constructor() public ERC20("CubToken", "CUB") {
        
        _mint(msg.sender, 100000000000);
      
    }
 
}