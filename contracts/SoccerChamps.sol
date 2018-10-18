pragma solidity 0.4.24;
/// @title Crypto-World Football Championship
/// @author Ivelton Queiroz

import "./SafeMathZepp.sol";

contract SoccerChamps {
  using SafeMathZepp for uint256;

  string public name = "block champs";
  address public owner;
  mapping(string => uint) teamGoals;
  uint public goalPrice = 2200000000000000 wei;

  modifier isOwner(){
    require(msg.sender == owner);
    _;
  }

  event LogScoreGoals ( 
    string _id, 
    uint _goals
  );

  event LogResetTeam ( 
    string _id
  );

  event LogTransferTo ( 
    address _receiver, 
    uint _value
  );

  event LogSetGoalPrice ( 
    uint _newPrice
  );

  event LogWithdraw (
    uint _goals
  );

  event LogDeposit (
    uint _goals
  );

  event LogFallback (
    address _sender
  );


  function setGoalPrice(uint _newPrice) public isOwner {
    require(_newPrice > 0);
    goalPrice = _newPrice;
    emit LogSetGoalPrice(goalPrice);
  } 

  function getGoalPrice() public view returns(uint) {
    return goalPrice;
  } 

  function scoreGoals(string _teamId, uint _goals) public payable {
    require(_goals > 0);
    require(_goals * goalPrice == msg.value);
    teamGoals[_teamId] = teamGoals[_teamId].add(_goals);
    emit LogScoreGoals(_teamId, _goals);
  }  

  function getTeamGoals(string _team) public view returns (uint) {
    return teamGoals[_team];
  }

  function resetTeam(string _teamId) public isOwner {
    teamGoals[_teamId] = 0;
    emit LogResetTeam(_teamId);
  }

  function withdraw(uint _amount) public isOwner returns(bool){
    require(_amount>0);
    require(address(this).balance >= _amount);
    owner.transfer(_amount);
    emit LogWithdraw(_amount);
    return true;
  }  

  function deposit(uint _amount) public payable returns(bool success) {
    require(_amount>0);
    emit LogDeposit(_amount);
    return true;
  }

  function balanceOf() public view returns(uint256) {
    return address(this).balance;
  }

  function kill() public isOwner{
    selfdestruct(owner);
  }

  function() public payable { 
    emit LogFallback(msg.sender);
  }

  constructor() public {
    owner = msg.sender;    
// add top teams
// EUROPE
    teamGoals['realma'] = 3; // spain
    teamGoals['manche'] = 2; // gb    
    teamGoals['bayern'] = 2; //germany - de
    teamGoals['juvent'] = 2; // italy
    teamGoals['pstger'] = 2; // france    
    teamGoals['rbsalz'] = 1; // austria
    teamGoals['benfic'] = 1; // portugal
    teamGoals['brugge'] = 2; // belgium
    teamGoals['baself'] = 1; // Switzerland - ch
    teamGoals['aikfot'] = 1; // sweden
    teamGoals['dinaza'] = 2;  // croatia - hr
    teamGoals['olympi'] = 1; // greece
    teamGoals['besikt'] = 2; // turkey
    teamGoals['sliema'] = 1; // malta
    teamGoals['zenith'] = 2; // russia
    teamGoals['partiz'] = 1; // serbia
    teamGoals['legiaw'] = 1; // poland
    teamGoals['zalgir'] = 1; // lithuania
    teamGoals['rosenb'] = 1; // norway
    teamGoals['psvein'] = 2; // netherlands
    teamGoals['dynamo'] = 1;// ukraine
    teamGoals['stjarn'] = 1; // iceland
    teamGoals['hjkhel'] = 1; // finland   
    teamGoals['steaua'] = 1; // romania
    teamGoals['saraje'] = 1; // bosnia
    teamGoals['ludogo'] = 1; // Bulgaria
    teamGoals['celtic'] = 1; // gb scotland
    teamGoals['sparta'] = 1; // czech republic
    teamGoals['ferenc'] = 1; // Hungary
    teamGoals['dundal'] = 1; // ireland
    teamGoals['maribo'] = 1; // slovenia -si
    teamGoals['differ'] = 1; // Luxembourg
    teamGoals['zalgir'] = 1; // lithuania
    teamGoals['sydney'] = 2; // australia
    teamGoals['auccty'] = 1; // new zealand
    teamGoals['kashima'] = 2; // japan
    teamGoals['jeonbu'] = 2; // south korea
    teamGoals['guangz'] = 2; // china
    teamGoals['hapber'] = 2; // israel
    teamGoals['persep'] = 2; // iran
    teamGoals['alainf'] = 2; // united emirates
    teamGoals['duhail'] = 1; // qatar
    teamGoals['ahlifc'] = 1; // saudi arabia
    teamGoals['burira'] = 1; // thailand
    teamGoals['eastbe'] = 1; // india
    teamGoals['persip'] = 1; // indonesia
    teamGoals['qadsia'] = 1; // kuwait
    teamGoals['wehdat'] = 1; // jordan
    teamGoals['flamen'] = 2; // brazil 
    teamGoals['bocajr'] = 2; // argentina
    teamGoals['univer'] = 1; // peru
    teamGoals['boliva'] = 1; // bolivia
    teamGoals['atlnac'] = 1; // colombia
    teamGoals['olimpa'] = 1; // paraguay
    teamGoals['caraca'] = 1; // venezuela
    teamGoals['colofc'] = 1; // chile
    teamGoals['penaro'] = 1; // uruguay
    teamGoals['depara'] = 1; // panama
    teamGoals['tigres'] = 2; // mexico
    teamGoals['toront'] = 2; // canada
    teamGoals['galaxy'] = 2; // USA
    teamGoals['alahly'] = 2; // egypt
    teamGoals['hilals'] = 1; // sudan
    teamGoals['esptun'] = 1; // tunisia
    teamGoals['wydadc'] = 1; // morocco    
    teamGoals['mazemb'] = 1; // congo DR
    teamGoals['priago'] = 1; // angola
    teamGoals['mamelo'] = 1; // south africa
  }
}
