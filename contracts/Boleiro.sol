pragma solidity ^0.4.23;

import 'zeppelin-solidity/contracts/token/ERC20/MintableToken.sol';

/**
 * @title Boleiro Coin
 * @dev Soccer Block Champs Mintable token.
 */
contract Boleiro is MintableToken {
  string public name = "Boleiro Token";
  string public symbol = "BLR";
  uint8 public decimals = 18;
  uint256 public cap;

  event LogFallback (
    address _sender
  );

  constructor(uint256 _cap) public {
    require(_cap > 0);
    cap = _cap * 10 ** uint256(decimals);
  }

  /**
   * @dev Function to mint tokens
   * @param _to The address that will receive the minted tokens.
   * @param _amount The amount of tokens to mint.
   * @return A boolean that indicates if the operation was successful.
   */
  function mint( address _to, uint256 _amount) onlyOwner canMint 
    public returns (bool) {
    require(totalSupply_.add(_amount) <= cap);

    return super.mint(_to, _amount);
  }

  function() public payable { 
    emit LogFallback(msg.sender);
  }
}