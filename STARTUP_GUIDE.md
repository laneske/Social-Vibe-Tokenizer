# SocialVibe Tokenizer - Quick Start Guide

## 🚀 Fast Setup (Recommended)

### One-Click Start
Simply run the automated setup script:

```bash
setup.bat
```

This will automatically:
1. Kill any existing processes
2. Start Hardhat blockchain node (port 8545)
3. Start Next.js dev server (port 3000)
4. Display all service URLs

**Wait 10-15 seconds for services to fully initialize.**

## 📍 Access Points

Once setup.bat completes, open your browser:

- **Frontend**: http://localhost:3000
- **Hardhat RPC**: http://127.0.0.1:8545
- **Contract Address**: 0x5FbDB2315678afecb367f032d93F642f64180aa3

## 🔧 Manual Setup (If needed)

### Terminal 1 - Start Hardhat Node
```bash
cd contracts
npx hardhat node
```
Output should show "Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/"

### Terminal 2 - Start Frontend
```bash
cd socialvibe-tokenizer
npm run dev
```
Output should show "Ready in X.Xs" and "Local: http://localhost:3000"

### Terminal 3 - Deploy Contract (optional, already deployed)
```bash
cd contracts
npx hardhat run scripts/deploy.ts --network localhost
```

## 💰 Test Accounts (From Hardhat)

Use these accounts to test (they have 10,000 test ETH each):

- **Account #0**: `0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266`
- **Private Key**: `0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80`

## 🎯 Testing the App

1. Open http://localhost:3000
2. Enter a positive tweet/message in the text field
3. Click "Mint NFT" 
4. Watch the transaction happen on the local blockchain
5. View your minted token in the dashboard

## 📝 What's Running

| Service | Port | PID | Status |
|---------|------|-----|--------|
| Hardhat Node | 8545 | 7084 | ✅ Running |
| Next.js Frontend | 3000 | 8128 | ✅ Running |

## 🛑 Stop Services

Close the Hardhat Node and Next.js Dev Server windows that opened from setup.bat.

Or kill processes manually:
```powershell
Get-Process node | Stop-Process -Force
```

## 📦 Key Files

- `setup.bat` - Automated startup script
- `contracts/` - Smart contract code (Solidity)
- `socialvibe-tokenizer/` - Frontend (Next.js + React)
- `contracts/scripts/deploy.ts` - Deployment script
- `contracts/scripts/mint.ts` - Test minting script

## 🐛 Troubleshooting

**Port 3000 already in use?**
- App will use port 3001 instead
- Access at http://localhost:3001

**Can't connect to localhost?**
- Wait 15-20 seconds for services to initialize
- Check that Hardhat and Next.js windows are open
- Refresh the browser (Ctrl+R)

**Hardhat node not starting?**
- Make sure port 8545 is not in use: `netstat -ano | findstr "8545"`
- Kill any existing node processes: `Get-Process node | Stop-Process -Force`

## 📚 Next Steps

- Test the minting functionality
- Check the dashboard to see minted tokens
- Integrate with MetaMask for wallet connection
- Deploy to testnet (Sepolia, Mumbai, etc.)

---

**Created**: December 6, 2025  
**Status**: ✅ Development environment ready
