@echo off
echo Starting Blog Development Server...
echo.

REM Refresh PATH
set PATH=%PATH%;C:\Program Files\nodejs

cd /d "%~dp0"

REM Run npm with execution policy bypass
powershell -ExecutionPolicy Bypass -Command "npm run dev"

pause
