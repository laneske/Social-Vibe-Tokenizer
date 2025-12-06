# 🚀 Getting Started with SocialVibe Tokenizer

This guide will help you set up and run the SocialVibe Tokenizer application on your local machine.

## Prerequisites

- **Node.js** version 18 or higher ([Download here](https://nodejs.org/))
- **npm** (comes with Node.js)
- A terminal/command prompt

## Quick Start (Recommended)

### For Windows:
```bash
setup.bat
```

### For Mac/Linux:
```bash
chmod +x setup.sh
./setup.sh
```

These scripts will automatically:
1. Install all dependencies
2. Start the Hardhat node (blockchain)
3. Start the Next.js dev server (frontend)

## Manual Setup

If you prefer to run each step manually:

### Step 1: Install Dependencies

Open two terminal windows/tabs - one for contracts, one for frontend.

**Terminal 1 - Install contract dependencies:**
```bash
cd contracts
npm install
```

**Terminal 2 - Install frontend dependencies:**
```bash
cd socialvibe-tokenizer
npm install
```

### Step 2: Start the Hardhat Node

In **Terminal 1** (contracts directory):
```bash
npm run node
```

You should see:
```
Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/
```

Keep this terminal running.

### Step 3: Start the Frontend

In **Terminal 2** (socialvibe-tokenizer directory):
```bash
npm run dev
```

You should see:
```
▲ Next.js 14.2.33
- Local:        http://localhost:3000
✓ Ready in 1260ms
```

### Step 4: Open in Browser

Navigate to: **http://localhost:3000**

You should see the SocialVibe Tokenizer home page! 🎉

## Troubleshooting

### "useConfig must be used within WagmiConfig" Error

**Problem:** You're seeing old cached code even after pulling the latest changes.

**Solution - Quick Fix:**

**Windows:**
```bash
fix-cache.bat
```

**Mac/Linux:**
```bash
chmod +x fix-cache.sh
./fix-cache.sh
```

Or manually:
```bash
cd socialvibe-tokenizer
rm -rf .next node_modules
rm -f package-lock.json
npm install
npm run dev
```

This clears all caches and reinstalls dependencies with the latest code.

### "localhost refused to connect"

**Problem:** The dev server isn't running.

**Solution:**
1. Make sure you ran `npm install` in the `socialvibe-tokenizer` directory
2. Check that `npm run dev` is running without errors
3. Look for the message "Local: http://localhost:3000"

### "command not found: next" or "command not found: hardhat"

**Problem:** Dependencies not installed.

**Solution:**
```bash
# In socialvibe-tokenizer directory:
npm install

# In contracts directory:
npm install
```

### "Port 3000 already in use"

**Problem:** Another application is using port 3000.

**Solution:** Either:
- Stop the other application
- Or run on a different port:
  ```bash
  npm run dev -- -p 3001
  ```
  Then visit http://localhost:3001

### "EADDRINUSE: address already in use :::8545"

**Problem:** Hardhat node is already running or another app is using port 8545.

**Solution:**
- Find and stop the other Hardhat node
- Or restart your computer if unsure

## Usage

Once running, you can:

1. **Mint NFTs**: 
   - Enter a Twitter handle (optional)
   - Write positive crypto vibes
   - Click "Mint My Vibe NFT"

2. **View Dashboard**:
   - Click "Dashboard" button
   - See user statistics and progress toward 40 users

3. **Track Progress**:
   - Live progress widget in top-right corner
   - Shows real-time stats

## What's Running?

When properly set up, you should have:

- ✅ **Hardhat Node**: http://127.0.0.1:8545 (blockchain simulator)
- ✅ **Next.js Frontend**: http://localhost:3000 (web application)

Both need to be running for the full experience.

## Development Tips

- **Hot Reload**: The frontend automatically reloads when you edit files
- **Console**: Check browser console (F12) for any errors
- **Logs**: Check both terminal windows for server logs

## Need Help?

If you're still having issues:

1. Check that Node.js is version 18+: `node --version`
2. Try deleting `node_modules` and `package-lock.json`, then run `npm install` again
3. Make sure no other applications are using ports 3000 or 8545
4. Check the GitHub Issues page for similar problems

## Next Steps

- Read the [README.md](README.md) for project details
- Check [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) for technical overview
- Review the smart contracts in `contracts/contracts/`

Happy minting! 🌈✨
