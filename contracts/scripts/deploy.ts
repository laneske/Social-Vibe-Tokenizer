import { ethers } from "hardhat";

async function main() {
  console.log("🚀 Deploying SocialVibeNFT contract...");
  
  const SocialVibeNFT = await ethers.getContractFactory("SocialVibeNFT");
  const socialVibeNFT = await SocialVibeNFT.deploy();
  
  await socialVibeNFT.waitForDeployment();
  const address = await socialVibeNFT.getAddress();
  
  console.log("✅ SocialVibeNFT deployed to:", address);
  console.log("📝 Contract details:");
  console.log("   - Name: SocialVibe");
  console.log("   - Symbol: SVIBE");
  console.log("   - Network: localhost");
  
  return address;
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
