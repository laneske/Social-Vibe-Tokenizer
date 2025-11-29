#!/bin/bash
# SocialVibe Tokenizer - Quick Start Script for macOS/Linux

echo ""
echo "==============================================="
echo "  🌈 SocialVibe Tokenizer - Setup Guide"
echo "==============================================="
echo ""

echo "Step 1: Installing dependencies..."
echo ""

# Frontend setup
cd "$(dirname "$0")/socialvibe-tokenizer"
if [ -d "node_modules" ]; then
    echo "✅ Frontend dependencies already installed"
else
    echo "Installing frontend dependencies..."
    npm install
fi

# Contracts setup
cd "$(dirname "$0")/contracts"
if [ -d "node_modules" ]; then
    echo "✅ Contract dependencies already installed"
else
    echo "Installing contract dependencies..."
    npm install
fi

echo ""
echo "==============================================="
echo "  📋 Setup Complete! Next Steps:"
echo "==============================================="
echo ""
echo "1. START HARDHAT NODE:"
echo "   cd contracts"
echo "   npx hardhat node"
echo ""
echo "2. IN NEW TERMINAL - DEPLOY CONTRACTS:"
echo "   cd contracts"
echo "   npx hardhat compile"
echo "   npx hardhat run scripts/deploy.ts --network localhost"
echo ""
echo "3. IN NEW TERMINAL - START FRONTEND:"
echo "   cd socialvibe-tokenizer"
echo "   npm run dev"
echo ""
echo "4. OPEN BROWSER:"
echo "   http://localhost:3000"
echo ""
echo "5. CONNECT METAMASK:"
echo "   - Add localhost network (http://127.0.0.1:8545)"
echo "   - Chain ID: 31337"
echo "   - Import test account from Hardhat node"
echo ""
echo "Happy testing! 🚀"
echo ""
