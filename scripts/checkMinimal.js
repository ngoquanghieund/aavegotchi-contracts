/* global ethers */
const { LedgerSigner } = require("@ethersproject/hardware-wallets");
//const { ethers } = require("ethers");
const {
  addGotchiMinimal,
} = require("../scripts/upgrades/upgrade-addAavegotchiMinimal.js");

async function main() {
  this.timeout = 20000000;
  console.log("adding new function");
  await addGotchiMinimal();
  const diamondAddress = "0x86935F11C86623deC8a25696E1C19a8659CbF95d";
  const gameFacet = await ethers.getContractAt(
    "AavegotchiGameFacet",
    diamondAddress
  );
  const minimalDetails = await gameFacet.aaveGotchiMinimal(
    "0x4e7bf3694962fc482a16d60fd78f99db9c4c52b0"
  );
  console.log(minimalDetails);
}

main()
  .then(() => console.log("completed"))
  .catch((error) => {
    console.error(error);
  });
