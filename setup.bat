@echo off
setlocal enabledelayedexpansion
REM SocialVibe Tokenizer - Automated Setup & Startup

echo.
echo ===============================================
echo  🌈 SocialVibe Tokenizer - Auto Start
echo ===============================================
echo.

REM Kill any existing node processes
echo [1/4] Cleaning up old processes...
taskkill /F /IM node.exe >nul 2>&1
timeout /t 2 /nobreak >nul

REM Start Hardhat node in a new window
echo [2/4] Starting Hardhat blockchain node...
cd /d "%~dp0contracts"
start "Hardhat Node" cmd /k "npx hardhat node"
timeout /t 6 /nobreak >nul

REM Start Next.js dev server in a new window
echo [3/4] Starting Next.js frontend...
cd /d "%~dp0socialvibe-tokenizer"
start "Next.js Dev Server" cmd /k "npm run dev"
timeout /t 6 /nobreak >nul

REM Display access info
echo.
echo ===============================================
echo  ✅ Services Started Successfully!
echo ===============================================
echo.
echo 📍 Hardhat Node:
echo    http://127.0.0.1:8545
echo.
echo 🌐 Frontend:
echo    http://localhost:3000
echo    (or http://localhost:3001 if 3000 is in use)
echo.
echo 📝 Contract Address:
echo    0x5FbDB2315678afecb367f032d93F642f64180aa3
echo.
echo ========================================
echo Close the new windows to stop services
echo ========================================
echo.
echo    - Add localhost network (http://127.0.0.1:8545)
echo    - Chain ID: 31337
echo    - Import test account from Hardhat node
echo.
echo Happy testing! 🚀
echo.
pause
