@echo off
echo Starting Blog Development Server...
echo.

REM Refresh PATH
set PATH=%PATH%;C:\Program Files\nodejs

cd /d "%~dp0"

REM Build static site
npm run build
next export

REM Deploy to gh-pages branch
echo Deploying to GitHub Pages...
git init
git add out -f
git commit -m "Deploy to GitHub Pages"
git branch -M gh-pages
git remote add origin https://github.com/thienne1602/Blog_CaNhan.git
git push -f origin gh-pages

echo Done! Now configure GitHub Pages to use the gh-pages branch.
pause

pause
