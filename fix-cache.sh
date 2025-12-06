#!/bin/bash
# Quick Fix Script - Clears caches and reinstalls dependencies
# Use this if you're seeing old errors after pulling new changes

echo "🔧 SocialVibe Tokenizer - Quick Fix Script"
echo ""
echo "This will:"
echo "  1. Clear Next.js cache"
echo "  2. Reinstall dependencies"
echo "  3. Verify the fix"
echo ""

# Get the script directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd "$SCRIPT_DIR/socialvibe-tokenizer"

echo "📦 Removing old build artifacts and cache..."
rm -rf .next
rm -rf node_modules
rm -f package-lock.json

echo ""
echo "📦 Reinstalling dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Installation failed. Please check the error above."
    exit 1
fi

echo ""
echo "✅ Fix complete!"
echo ""
echo "Now run:"
echo "  cd socialvibe-tokenizer"
echo "  npm run dev"
echo ""
echo "Then visit http://localhost:3000"
