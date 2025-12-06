@echo off
REM Quick Fix Script - Clears caches and reinstalls dependencies
REM Use this if you're seeing old errors after pulling new changes

echo 🔧 SocialVibe Tokenizer - Quick Fix Script
echo.
echo This will:
echo   1. Clear Next.js cache
echo   2. Reinstall dependencies
echo   3. Verify the fix
echo.

cd /d "%~dp0socialvibe-tokenizer"

echo 📦 Removing old build artifacts and cache...
if exist ".next" rd /s /q ".next"
if exist "node_modules" rd /s /q "node_modules"
if exist "package-lock.json" del /q "package-lock.json"

echo.
echo 📦 Reinstalling dependencies...
call npm install

if errorlevel 1 (
    echo ❌ Installation failed. Please check the error above.
    pause
    exit /b 1
)

echo.
echo ✅ Fix complete!
echo.
echo Now run:
echo   cd socialvibe-tokenizer
echo   npm run dev
echo.
echo Then visit http://localhost:3000
echo.
pause
