import { ethers } from "hardhat";

async function main() {
  console.log("🔁 Deploying SocialVibeNFT...");

  const SocialVibeNFT = await ethers.getContractFactory("SocialVibeNFT");
  const socialVibeNFT = await SocialVibeNFT.deploy();
  await socialVibeNFT.deployed();
  const address = socialVibeNFT.address;
  console.log("✅ Deployed to:", address);

  const [deployer] = await ethers.getSigners();
  console.log("👤 Minting Vibe NFT from:", deployer.address);

  const mintTx = await socialVibeNFT.mintVibeNFT(
    deployer.address,
    "ipfs://test-metadata-uri",
    "This is a test vibe",
    "POSITIVE",
    100,
    "@tester",
    "TEST",
    { value: ethers.utils.parseEther("0.001") }
  );

  const mintReceipt = await mintTx.wait();
  console.log("🔁 Mint transaction hash:", mintReceipt.transactionHash);

  const supply = await socialVibeNFT.totalSupply();
  const tokenId = supply.toString();
  console.log("🔢 Minted tokenId:", tokenId);

  const uri = await socialVibeNFT.tokenURI(supply);
  console.log("📎 tokenURI:", uri);

  // Write the deployed address to stdout in a fixed marker so we can parse it if needed
  console.log("__DEPLOYED_ADDRESS__=", address);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
