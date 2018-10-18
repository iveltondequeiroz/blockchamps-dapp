module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      host: "127.0.0.1",
      port: 8545,
      network_id: 4,
      gas: 4700000
    },
    mainnet: {
      host: "127.0.0.1",
      port: 8545,
      network_id: 1,
      gasPrice: 3000000000,
      gas: 4700000
    }
  }
};
