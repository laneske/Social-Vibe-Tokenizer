import { ethers } from "hardhat";

async function main() {
  console.log("🎯 Starting test mint on SocialVibeNFT...");
  
  const [deployer] = await ethers.getSigners();
  const contractAddress = "0x9fE46736679d2D9a65F0992F272dE9f3c7fa6e0";

  console.log(`📍 Using account: ${deployer.address}`);
  const SocialVibe = await ethers.getContractAt("SocialVibeNFT", contractAddress, deployer);

  const tokenURI = "ipfs://QmSocialVibeTest/1";
  const tweetText = "Amazing vibes! 🌈 #SocialVibe";
  const sentiment = "POSITIVE";
  const positiveScore = 95;
  const twitterHandle = "@testminter";
  const vibeType = "BOUNTY_TEST";
  const mintFee = ethers.utils.parseEther("0.001");

  console.log("\n📝 Mint Parameters:");
  console.log(`   - Token URI: ${tokenURI}`);
  console.log(`   - Tweet: ${tweetText}`);
  console.log(`   - Sentiment: ${sentiment}`);
  console.log(`   - Score: ${positiveScore}`);
  console.log(`   - Handle: ${twitterHandle}`);
  console.log(`   - Fee: ${ethers.utils.formatEther(mintFee)} ETH`);

  try {
    console.log("\n⏳ Submitting mint transaction...");
    const tx = await SocialVibe.mintVibeNFT(
      deployer.address,
      tokenURI,
      tweetText,
      sentiment,
      positiveScore,
      twitterHandle,
      vibeType,
      { value: mintFee }
    );

    console.log(`✅ Transaction sent: ${tx.hash}`);

    console.log("\n⏳ Waiting for confirmation...");
    const receipt = await tx.wait();
    console.log(`✅ Mined in block: ${receipt?.blockNumber}`);

    // Attempt to read token ID from events
    const vibeMintedEvent = receipt?.events?.find((e) => e.event === "VibeMinted");
    if (vibeMintedEvent && vibeMintedEvent.args) {
      const tokenId = vibeMintedEvent.args.tokenId;
      console.log(`\n🎁 Token ID: ${tokenId.toString()}`);

      // Fetch vibe data
      const vibeData = await SocialVibe.getVibeData(tokenId);
      console.log("\n📊 Vibe Data:");
      console.log(`   - Tweet: ${vibeData.tweetText}`);
      console.log(`   - Sentiment: ${vibeData.sentiment}`);
      console.log(`   - Score: ${vibeData.positiveScore}`);
      console.log(`   - Handle: ${vibeData.twitterHandle}`);
      console.log(`   - Type: ${vibeData.vibeType}`);

      // Fetch URI
      const uri = await SocialVibe.tokenURI(tokenId);
      console.log(`   - URI: ${uri}`);

      // Check owner
      const owner = await SocialVibe.ownerOf(tokenId);
      console.log(`   - Owner: ${owner}`);

      console.log(`\n✨ Mint successful! Token #${tokenId} created.`);
    } else {
      console.log("\n⚠️ Could not find VibeMinted event in logs");
    }
  } catch (error) {
    console.error("❌ Mint failed:", error);
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error("❌ Script error:", error);
  process.exitCode = 1;
});
