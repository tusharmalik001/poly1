const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MetaToken.sol/MetaToken.json");
require('dotenv').config()

const tokenAddress = process.env.TOKEN_ADDRESS;
const tokenABI = tokenContractJSON.abi;
const walletAddress = 0xF9bc4a80464E48369303196645e876c8C7D972de;

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    for(let i=0; i<5; i++)
    {
        const desc =await token.promptDescription(i)
        console.log("TokenID- "+ i+  ": " + desc );
    }
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });