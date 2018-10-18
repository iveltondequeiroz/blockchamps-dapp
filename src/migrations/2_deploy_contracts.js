var SoccerChamps = artifacts.require("SoccerChamps");
var Boleiro = artifacts.require("Boleiro");

module.exports = function(deployer) {
	deployer.deploy(SoccerChamps, {gas: 5720000}).then(function(i){
		console.log("SoccerChamps contract adddress", i.address)
	});

  let cap = 45000000
  deployer.deploy(Boleiro , cap).then(function(i){
    console.log("Boleiro contract adddress", i.address)
  });
};
