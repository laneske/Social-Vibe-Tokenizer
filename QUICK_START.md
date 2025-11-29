# 🚀 SOCIALVIBE TOKENIZER - QUICK START GUIDE

## ⏱️ Time to Live: ~10 minutes

This guide will get you from zero to fully operational SocialVibe Tokenizer with minting capabilities.

---

## 📋 Prerequisites Check

Before starting, verify you have:

```
✅ Node.js 18+ installed
✅ npm or yarn package manager  
✅ MetaMask or compatible Web3 wallet
✅ ~500MB free disk space
```

**Check Node.js version:**
```bash
node --version  # Should be 18.0.0 or higher
npm --version   # Should be 8.0.0 or higher
```

---

## 🎬 5-Step Startup Sequence

### STEP 1: Navigate to Project (30 seconds)
```bash
cd "c:\Users\Bima\Documents\Social Vibe Tokenizer"
```

### STEP 2: Install Dependencies (2-3 minutes)

**Option A: Automatic (Windows)**
```bash
setup.bat
```

**Option B: Manual**
```bash
# Frontend dependencies
cd socialvibe-tokenizer
npm install

# Contract dependencies  
cd ../contracts
npm install
```

### STEP 3: Start Local Blockchain (1 minute)

Open a terminal and run:
```bash
cd contracts
npx hardhat node
```

**Expected Output:**
```
Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/

Accounts (press Enter to reveal private keys):
0x1234567890... (Account #0)
0x9876543210... (Account #1)
...
```

**📌 NOTE:** Keep this terminal open!

### STEP 4: Deploy Smart Contracts (2 minutes)

Open **NEW TERMINAL** and run:
```bash
cd contracts
npx hardhat compile     # Compiles contracts
npx hardhat run scripts/deploy.ts --network localhost
```

**Expected Output:**
```
🚀 Deploying SocialVibeNFT contract...
✅ SocialVibeNFT deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3
📝 Contract details:
   - Name: SocialVibe
   - Symbol: SVIBE
   - Network: localhost
```

**📌 NOTE:** Copy the contract address for later!

### STEP 5: Start Frontend (1 minute)

Open **THIRD TERMINAL** and run:
```bash
cd socialvibe-tokenizer
npm run dev
```

**Expected Output:**
```
> next dev

  ▲ Next.js 14.0.0

  Local:        http://localhost:3000
```

✅ **Frontend is now running!**

---

## 🌐 Access the Application

1. Open your browser
2. Visit: **http://localhost:3000**
3. You should see the SocialVibe Tokenizer home page

---

## 🔌 Connect MetaMask

### Step-by-Step MetaMask Setup

1. **Open MetaMask Extension** (install if needed)

2. **Click Settings** → **Networks** → **Add Network**

3. **Fill in Network Details:**
   - Network name: `Localhost`
   - RPC URL: `http://127.0.0.1:8545`
   - Chain ID: `31337`
   - Currency symbol: `ETH`
   - Block explorer URL: (leave blank)

4. **Click Save**

5. **Switch to Localhost Network** (top dropdown)

6. **Import Test Account:**
   - In Hardhat terminal, press Enter to reveal private keys
   - Copy the first account's private key
   - In MetaMask: Click profile → Import Account
   - Paste private key → Import

✅ **MetaMask is now connected to localhost!**

---

## 🎨 Minting Your First NFT

### Test the Minting Flow

1. **Connect Wallet**
   - Click the wallet button on the page
   - Select MetaMask
   - Approve connection

2. **Fill Out Form**
   - Twitter Handle (optional): `@yourhandle`
   - Positive Vibes: Write something positive about crypto/web3

3. **Mint NFT**
   - Click "✨ Mint My Vibe NFT ✨"
   - MetaMask will prompt you to approve transaction
   - Click "Confirm"
   - Wait 2-3 seconds for minting animation

4. **Success!**
   - You'll see a success message with:
     - Transaction hash
     - Sentiment analysis result
     - Positivity score
     - User ID

### Check Your NFT

- **In MetaMask:** Go to NFTs tab → You'll see your new Vibe NFT
- **On Dashboard:** Click the "🎯 Dashboard" button to see your NFT in the recent activity
- **Live Progress:** Top-right widget shows 1/40 users

---

## 📊 Dashboard Overview

The **Admin Dashboard** shows:

- **Progress Bar:** Visual representation of user acquisition (0-40)
- **User Stats:** Total users, NFTs minted, mint rate
- **Recent Activity:** Last 5 users who minted NFTs
- **Quick Actions:** 
  - Copy test link to clipboard
  - Share on Twitter
  - Share on Discord
- **Checklist:** Bounty submission requirements

---

## 🐛 Troubleshooting

### Issue: Can't Connect MetaMask

**Solution:**
1. Ensure Hardhat node is running (`npx hardhat node`)
2. Verify localhost network is added in MetaMask
3. Check chain ID is exactly `31337`
4. Try refreshing the page (Cmd+R or Ctrl+R)

### Issue: Minting Transaction Fails

**Solution:**
1. Ensure you have sufficient ETH (unlimited on localhost)
2. Verify contract address matches in `src/config/index.ts`
3. Check browser console (F12) for detailed error
4. Restart Hardhat node and redeploy

### Issue: Dashboard Shows No Users

**Solution:**
1. Enable localStorage in browser (usually enabled by default)
2. Check browser console for errors (F12)
3. Try opening in incognito/private window
4. Clear browser cache and reload

### Issue: Frontend Won't Start

**Solution:**
```bash
# Kill any existing process on port 3000
# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Then try again
npm run dev
```

---

## 🎯 What to Do Next

### Test Local Flow
- [ ] Mint NFT from account #0
- [ ] Switch to account #1 in MetaMask
- [ ] Mint another NFT
- [ ] Check dashboard shows 2 users
- [ ] Verify minting works multiple times

### Invite Friends (For Real Testing)
- [ ] Copy localhost link: `http://localhost:3000`
- [ ] Share with 3-5 crypto friends
- [ ] Have them connect their wallets
- [ ] Have them mint NFTs
- [ ] Watch dashboard update in real-time

### Explore Code
- Check `socialvibe-tokenizer/src/components/VibeMinter.tsx`
- Review `contracts/contracts/SocialVibeNFT.sol`
- Study `socialvibe-tokenizer/src/lib/userTracker.ts`

### Prepare for Deployment
- Read `OUTREACH_GUIDE.md` for growth strategy
- Plan Twitter/Discord outreach
- Prepare your messaging templates
- Create demo video if desired

---

## 📁 Project Structure at a Glance

```
Social Vibe Tokenizer/
├── socialvibe-tokenizer/          ← Frontend (Next.js)
│   ├── src/
│   │   ├── app/                   ← Pages
│   │   ├── components/            ← React components
│   │   ├── hooks/                 ← Web3 hooks
│   │   └── lib/                   ← Utilities
│   └── package.json
│
├── contracts/                      ← Smart Contracts
│   ├── contracts/
│   │   └── SocialVibeNFT.sol
│   ├── scripts/
│   │   └── deploy.ts
│   └── hardhat.config.ts
│
├── README.md                       ← Full documentation
├── OUTREACH_GUIDE.md              ← Growth strategy
└── QUICK_START.md                 ← This file!
```

---

## 💡 Key Concepts

### SocialVibe NFT
- ERC-721 standard NFT
- Stores tweet text, sentiment, score
- Minted when user shares positive vibes
- Tracked on blockchain

### Sentiment Analysis
- Analyzes text for positive/negative words
- Returns sentiment (POSITIVE/NEUTRAL/NEGATIVE)
- Calculates positivity score (0-100%)
- Currently uses mock analysis (can integrate AWS)

### User Tracking
- Stores users in browser localStorage
- Tracks each user's wallet address
- Records number of NFTs minted
- Shows progress toward 40+ goal

### Bounty Goal
- Seedify is offering $700 bounty
- Requires 40+ real users
- Must demonstrate functional app
- SocialVibe meets all criteria

---

## 🚀 Performance Tips

**For Faster Minting:**
- Keep Hardhat node running in dedicated terminal
- Don't close browser tabs unnecessarily
- Use private browsing to avoid cache issues
- Clear MetaMask pending transactions if stuck

**For Better Testing:**
- Use multiple accounts (MetaMask supports this)
- Mint from different accounts to see user tracking
- Check browser console for detailed logs
- Monitor Hardhat node output for transaction details

---

## 📞 Getting Help

If something doesn't work:

1. **Check Console:** Press F12 → Console tab → Look for errors
2. **Check Logs:** Look at terminal where `npm run dev` is running
3. **Restart Everything:** 
   - Kill all terminals
   - Start fresh from STEP 3
4. **Read README.md:** More detailed documentation available
5. **Check OUTREACH_GUIDE.md:** For growth strategy questions

---

## ✅ Final Checklist

Before declaring success:

- [ ] Hardhat node running (terminal 1)
- [ ] Frontend running at localhost:3000 (terminal 3)
- [ ] MetaMask connected to localhost:31337
- [ ] Successfully minted 1+ NFTs
- [ ] Dashboard shows user count > 0
- [ ] Live progress widget updates in real-time
- [ ] Can switch between Minter and Dashboard views
- [ ] No console errors

---

## 🎉 You're Ready!

Congratulations! Your SocialVibe Tokenizer is now live and ready for testing.

**Next Steps:**
1. Test the minting flow thoroughly
2. Invite friends to test
3. Read OUTREACH_GUIDE.md for growth strategy
4. Start your Twitter/Discord outreach campaign
5. Build toward the 40+ user goal!

**Questions?** Check the full README.md for comprehensive documentation.

---

**Built with ❤️ for the Seedify bounty program**

*Turn positive vibes into lasting impact!* 🌈✨

---

### Quick Command Reference

| Action | Command |
|--------|---------|
| Start blockchain | `cd contracts && npx hardhat node` |
| Deploy contracts | `cd contracts && npx hardhat run scripts/deploy.ts --network localhost` |
| Start frontend | `cd socialvibe-tokenizer && npm run dev` |
| Visit app | http://localhost:3000 |
| View contracts | `contracts/contracts/SocialVibeNFT.sol` |
| View components | `socialvibe-tokenizer/src/components/` |
| Check configuration | `socialvibe-tokenizer/src/config/index.ts` |

---

**Last Updated:** November 29, 2025
**Version:** 0.1.0
**Status:** ✅ Ready for Testing
