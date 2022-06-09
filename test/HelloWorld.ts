import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import {expect} from 'chai' 

describe("HelloWorld", () => {
  it("should say hi", async function(){
    //1. Setup env
    //2. Deploy contract
    //3. Call contract function

    //2.
    const HelloWorld = await ethers.getContractFactory("HelloWorld"); // This is the name of the contract not the file name eg contract HelloWorld {}
    const hello = await HelloWorld.deploy(); // Deploys the contract in the blockchain, can be any network.
    await hello.deployed(); // This is the address of the contract

    expect(await hello.hello()).to.equal("Hello, World!"); // hello.hello() is the function that we have declared in the contract
  });
});

