require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/-9c7tqVe5LSkye3evyjwMTOWox1JFbtj",
      accounts: [
        "fd3a070c967a93a4d3d6e49b9c7543c3825c81f339c2dbe34d7c342e99f352e9"
      ],
      gas: 2100,
      gasPrice: 8000,
    },
  },
};
