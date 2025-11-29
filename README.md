# 🌈 SocialVibe Tokenizer - Seedify Bounty Entry

**Turn positive social vibes into tradable NFTs!**

## 🚀 Project Overview

SocialVibe Tokenizer is a Web3 application that transforms positive crypto community engagement into verifiable NFT assets. Built for the @Seedify bounty, the project demonstrates real utility by analyzing sentiment and minting NFTs backed by meaningful social contributions.

**Goal:** Acquire 40+ real users and demonstrate functional bounty requirements to win the $700 Seedify bounty.

## ✨ Features

- **AI Sentiment Analysis**: Uses AWS Comprehend (mockable) to analyze tweet positivity
- **Real NFT Minting**: ERC-721 smart contracts on Ethereum (localhost)
- **Live Progress Dashboard**: Real-time user tracking toward 40+ participant goal
- **Beautiful UI**: Tailwind CSS with gradient effects and smooth animations
- **User Tracking**: localStorage-based user persistence with mint history
- **Community Features**: Twitter/Discord sharing buttons and social amplification

## 📊 Current Status

- ✅ Smart contracts deployed locally
- ✅ Frontend fully functional
- ✅ User tracking system operational
- 🎯 Target: 40+ beta testers

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** with TypeScript
- **React 18** for UI components
- **Tailwind CSS** for styling
- **Wagmi** for wallet integration
- **Viem** for Ethereum interactions

### Smart Contracts
- **Solidity 0.8.19**
- **OpenZeppelin ERC-721** contract standard
- **Hardhat** development environment
- **Local Ethereum node** (Hardhat)

### Backend/Analysis
- **AWS Comprehend** (sentiment analysis)
- **Node.js** runtime
- **TypeScript** for type safety

## 📋 Setup Instructions

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- MetaMask or compatible Web3 wallet

### 1. Install Dependencies

```bash
# Frontend
cd socialvibe-tokenizer
npm install

# Smart Contracts
cd ../contracts
npm install
```

### 2. Start Local Blockchain

```bash
cd contracts
npx hardhat node
```

This starts a local Ethereum node at `http://127.0.0.1:8545` (Chain ID: 31337)

### 3. Deploy Smart Contracts

In a new terminal:

```bash
cd contracts
npx hardhat compile
npx hardhat run scripts/deploy.ts --network localhost
```

Note the deployed contract address (typically `0x5FbDB2315678afecb367f032d93F642f64180aa3`)

### 4. Start Frontend Development Server

In another terminal:

```bash
cd socialvibe-tokenizer
npm run dev
```

Visit `http://localhost:3000` in your browser

### 5. Connect MetaMask

1. Open MetaMask
2. Click Settings → Networks → Add Network
3. **Network details:**
   - Network name: `Localhost`
   - RPC URL: `http://127.0.0.1:8545`
   - Chain ID: `31337`
   - Currency: `ETH`
4. Switch to the new network
5. Import test account from Hardhat node

## 🎮 Usage Guide

### Minting Your First NFT

1. **Connect Wallet**: Click wallet button, select MetaMask
2. **Enter Twitter Handle** (optional): For tracking
3. **Write Positive Vibes**: Share why you're bullish on crypto
4. **Mint NFT**: Button triggers sentiment analysis and NFT creation
5. **Confirm**: Check dashboard for your NFT in the recent activity

### Tracking Progress

- **Live Progress Widget**: Top-right corner shows real-time stats
- **Dashboard**: Detailed breakdown of users, mints, and metrics
- **Recent Users**: Display of last 5 participants

### Sharing & Outreach

**Quick Actions Panel:**
- 📋 Copy test link to clipboard
- 🐦 Tweet pre-written bounty message
- 💬 Share to Discord communities

## 🚀 Deployment Strategy

### Phase 1: Local Testing (This Week)
- [ ] Test minting flow end-to-end
- [ ] Verify all dashboard metrics
- [ ] Connect 3-5 friends for testing

### Phase 2: Community Outreach (Days 3-5)
- [ ] DM 10 small crypto projects
- [ ] Post in crypto Discord servers
- [ ] Tweet engagement campaign
- [ ] Reach 15-20 beta testers

### Phase 3: Acceleration (Days 6-7)
- [ ] Leverage early user testimonials
- [ ] Increase Twitter visibility
- [ ] Partner with micro-influencers
- [ ] Target 40+ users milestone

## 📜 Smart Contract Functions

### `mintVibeNFT()`
Mint a vibe NFT with sentiment analysis data.

**Parameters:**
- `to`: Recipient address
- `tokenURI`: Metadata URI
- `tweetText`: Original positive message
- `sentiment`: Analysis result (POSITIVE/NEUTRAL/NEGATIVE)
- `positiveScore`: Sentiment score (0-100)
- `twitterHandle`: Creator's Twitter handle
- `vibeType`: Category (POSITIVE_VIBE, BOUNTY_FOUNDER, etc.)

**Cost:** 0.001 ETH (free on localhost for testing)

### `freeMint()` (Admin Only)
Free mint for verified bounty participants.

### `getUserTokens(address)`
Retrieve all NFTs owned by a user.

### `getVibeData(uint256)`
Get sentiment and metadata for a specific NFT.

## 💾 Data Structure

### User Record
```typescript
interface User {
  id: string;
  walletAddress: string;
  twitterHandle?: string;
  joinedDate: Date;
  nftsMinted: number;
}
```

### Vibe NFT Metadata
```solidity
struct VibeData {
  string tweetText;
  string sentiment;
  uint256 positiveScore;
  uint256 timestamp;
  string twitterHandle;
  string vibeType;
}
```

## 🐛 Troubleshooting

### MetaMask Connection Issues
1. Verify localhost network is added correctly
2. Check Hardhat node is running (`npx hardhat node`)
3. Confirm chain ID matches (31337)
4. Try refreshing the page

### Minting Fails
1. Ensure account has sufficient ETH (unlimited on localhost)
2. Contract must be deployed before minting
3. Check browser console for detailed error messages
4. Verify contract address in `useVibeMinter.ts`

### Dashboard Shows No Users
1. Check localStorage is enabled
2. Open DevTools → Application → Local Storage
3. Verify `socialvibe_users` key exists
4. Try minting from different wallet addresses

## 📁 Project Structure

```
socialvibe-tokenizer/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── VibeMinter.tsx      # NFT minting component
│   │   ├── AdminDashboard.tsx  # Progress dashboard
│   │   └── LiveProgress.tsx    # Real-time stats widget
│   ├── hooks/
│   │   └── useVibeMinter.ts    # Web3 contract hook
│   └── lib/
│       ├── userTracker.ts      # User management
│       └── vibeAnalyzer.ts     # Sentiment analysis
├── package.json
├── tsconfig.json
├── next.config.js
└── tailwind.config.ts

contracts/
├── contracts/
│   └── SocialVibeNFT.sol       # Main ERC-721 contract
├── scripts/
│   └── deploy.ts               # Deployment script
├── hardhat.config.ts
├── package.json
└── README.md
```

## 🎯 Success Metrics

- **40+ Unique Users**: Required for bounty
- **10+ Minted NFTs**: Proof of utility
- **<2 hour onboarding**: User experience metric
- **>80% retention**: Community engagement

## 📞 Support & Contact

For questions or issues:
1. Check the troubleshooting section
2. Review browser console errors
3. Verify all prerequisites are installed
4. Try restarting the local blockchain

## 🏆 Bounty Submission Checklist

- [ ] 40+ real users acquired
- [ ] Smart contract deployed and verified
- [ ] Frontend fully functional
- [ ] User onboarding documented
- [ ] Community testimonials collected
- [ ] Demo video created (optional)
- [ ] Project submitted to Seedify

## 📄 License

MIT License - See LICENSE file for details

---

**Built with ❤️ for the Seedify bounty program**

*Turn positive vibes into lasting impact!* 🌈✨
