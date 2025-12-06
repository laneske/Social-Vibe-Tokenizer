@echo off
REM SocialVibe Tokenizer - Quick Start Script for Windows

echo.
echo ===============================================
echo  🌈 SocialVibe Tokenizer - Setup ^& Start
echo ===============================================
echo.

echo Step 1: Installing dependencies...
echo.

REM Frontend setup
echo 📦 Installing frontend dependencies...
cd /d "%~dp0socialvibe-tokenizer"
if exist "node_modules" (
    echo ✅ Frontend dependencies already installed
) else (
    call npm install
    if errorlevel 1 (
        echo ❌ Frontend installation failed. Check the error above.
        pause
        exit /b 1
    )
    echo ✅ Frontend dependencies installed
)

REM Contracts setup
echo.
echo 📦 Installing contract dependencies...
cd /d "%~dp0contracts"
if exist "node_modules" (
    echo ✅ Contract dependencies already installed
) else (
    call npm install
    if errorlevel 1 (
        echo ❌ Contract installation failed. Check the error above.
        pause
        exit /b 1
    )
    echo ✅ Contract dependencies installed
)

echo.
echo ===============================================
echo  ✅ Installation Complete!
echo ===============================================
echo.
echo Starting servers...
echo.

REM Start Hardhat node
echo 🔗 Starting Hardhat node on http://127.0.0.1:8545...
cd /d "%~dp0contracts"
start "Hardhat Node" cmd /k "npx hardhat node"

REM Wait for Hardhat to start
timeout /t 5 /nobreak > nul

REM Start Next.js dev server
echo.
echo 🚀 Starting Next.js dev server on http://localhost:3000...
cd /d "%~dp0socialvibe-tokenizer"
start "Next.js Dev Server" cmd /k "npm run dev"

echo.
echo ===============================================
echo  🎉 SocialVibe Tokenizer is Running!
echo ===============================================
echo.
echo 📍 Frontend:     http://localhost:3000
echo 📍 Hardhat Node: http://127.0.0.1:8545
echo.
echo Two new windows should have opened:
echo   1. Hardhat Node (blockchain)
echo   2. Next.js Dev Server (frontend)
echo.
echo Opening browser in 3 seconds...
timeout /t 3 /nobreak > nul

REM Open browser
start http://localhost:3000

echo.
echo To stop the servers, close the two terminal windows.
echo.
echo Press any key to exit this window...
pause > nul
