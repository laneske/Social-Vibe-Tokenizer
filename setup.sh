#!/bin/bash
# SocialVibe Tokenizer - Quick Start Script for macOS/Linux

echo ""
echo "==============================================="
echo "  🌈 SocialVibe Tokenizer - Setup & Start"
echo "==============================================="
echo ""

echo "Step 1: Installing dependencies..."
echo ""

# Get the script directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Frontend setup
echo "📦 Installing frontend dependencies..."
cd "$SCRIPT_DIR/socialvibe-tokenizer"
if [ -d "node_modules" ]; then
    echo "✅ Frontend dependencies already installed"
else
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Frontend installation failed. Check the error above."
        exit 1
    fi
    echo "✅ Frontend dependencies installed"
fi

# Contracts setup
echo ""
echo "📦 Installing contract dependencies..."
cd "$SCRIPT_DIR/contracts"
if [ -d "node_modules" ]; then
    echo "✅ Contract dependencies already installed"
else
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Contract installation failed. Check the error above."
        exit 1
    fi
    echo "✅ Contract dependencies installed"
fi

echo ""
echo "==============================================="
echo "  ✅ Installation Complete!"
echo "==============================================="
echo ""
echo "Starting servers..."
echo ""

# Start Hardhat node in background
echo "🔗 Starting Hardhat node on http://127.0.0.1:8545..."
cd "$SCRIPT_DIR/contracts"
npx hardhat node > /tmp/hardhat.log 2>&1 &
HARDHAT_PID=$!

# Wait for Hardhat to start
sleep 3

# Check if Hardhat started successfully
if ! ps -p $HARDHAT_PID > /dev/null; then
    echo "❌ Failed to start Hardhat node. Check /tmp/hardhat.log for details."
    exit 1
fi
echo "✅ Hardhat node started (PID: $HARDHAT_PID)"

# Start Next.js dev server
echo ""
echo "🚀 Starting Next.js dev server on http://localhost:3000..."
cd "$SCRIPT_DIR/socialvibe-tokenizer"
npm run dev &
NEXTJS_PID=$!

echo ""
echo "==============================================="
echo "  🎉 SocialVibe Tokenizer is Running!"
echo "==============================================="
echo ""
echo "📍 Frontend:     http://localhost:3000"
echo "📍 Hardhat Node: http://127.0.0.1:8545"
echo ""
echo "Process IDs:"
echo "  - Hardhat: $HARDHAT_PID"
echo "  - Next.js: $NEXTJS_PID"
echo ""
echo "To stop the servers:"
echo "  kill $HARDHAT_PID $NEXTJS_PID"
echo ""
echo "Or press Ctrl+C and run:"
echo "  pkill -f hardhat && pkill -f next"
echo ""
echo "Opening browser in 3 seconds..."
sleep 3

# Try to open browser (works on most systems)
if command -v xdg-open > /dev/null; then
    xdg-open http://localhost:3000
elif command -v open > /dev/null; then
    open http://localhost:3000
else
    echo "Please manually open: http://localhost:3000"
fi

echo ""
echo "Press Ctrl+C to stop all servers"
echo ""

# Wait for user interrupt
wait
