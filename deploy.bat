@echo off
chcp 65001 >nul
echo ========================================
echo    Seeking 官网 - 一键部署脚本
echo ========================================
echo.
echo 此脚本将帮你：
echo 1. 检查必要文件
echo 2. 初始化 Git 仓库
echo 3. 提交所有文件
echo 4. 推送到 GitHub
echo.
echo 注意：运行前请确保已安装 Git 并配置好账号
echo.
pause

echo.
echo [步骤 1/4] 检查必要文件...
if not exist "index.html" (
    echo ❌ 缺少 index.html
    pause
    exit /b 1
)
if not exist "css\style.css" (
    echo ❌ 缺少 css\style.css
    pause
    exit /b 1
)
if not exist "js\main.js" (
    echo ❌ 缺少 js\main.js
    pause
    exit /b 1
)
if not exist "js\lang.js" (
    echo ❌ 缺少 js\lang.js
    pause
    exit /b 1
)
echo ✅ 所有文件检查通过

echo.
echo [步骤 2/4] 初始化 Git 仓库...
if exist ".git" (
    echo ℹ️  Git 仓库已存在，跳过初始化
) else (
    git init
    echo ✅ Git 仓库初始化完成
)

echo.
echo [步骤 3/4] 添加并提交文件...
git add .
git commit -m "Update: Seeking官网更新"
echo ✅ 文件已提交

echo.
echo [步骤 4/4] 推送到 GitHub...
echo.
echo 请输入你的 GitHub 仓库地址：
echo 格式示例：https://github.com/Seeking-1/seeking-website.git
echo.
set /p REPO_URL="仓库地址: "

if "%REPO_URL%"=="" (
    echo ❌ 未输入仓库地址
    pause
    exit /b 1
)

git branch -M main
git remote add origin %REPO_URL% 2>nul
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo ✅ 部署成功！
    echo ========================================
    echo.
    echo 你的网站将在 1-2 分钟后上线：
    echo https://seeking-1.github.io/seeking-website/
    echo.
    echo 别忘了：
    echo 1. 在 GitHub 仓库 Settings ^> Pages 启用网站
    echo 2. 配置 Formspree 和 Server酱
    echo.
) else (
    echo.
    echo ❌ 推送失败，请检查：
    echo 1. Git 是否已安装并配置
    echo 2. GitHub 账号是否正确
    echo 3. 仓库地址是否正确
    echo.
)

pause
