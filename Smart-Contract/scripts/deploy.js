async function main() {
    const transaction = await ethers.deployContract("Transaction");
    console.log("Transaction Address:", await transaction.getAddress())
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// Transaction Address: 0xEdb49f5567daEB4A3bEfFD1F8A39092180C8E5df
// Transaction Address: 0xCdcCeceb69ce1d5590CC1a08c8B4a0B74223baae
// Transaction Address: 0xaE1979849a40ED78C63F0D03E037Cd26522Ab7cf