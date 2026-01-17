#!/bin/bash

# 手动部署脚本
# 使用方法: ./deploy.sh

echo "🚀 开始部署到 GitHub Pages..."

# 1. 构建项目
echo "📦 构建项目..."
npm run build

# 2. 切换到 gh-pages 分支
echo "🔄 切换到 gh-pages 分支..."
git checkout gh-pages

# 3. 清理旧的 dist 目录
echo "🧹 清理旧文件..."
rm -rf dist

# 4. 复制新的构建产物
echo "📋 复制构建产物..."
cp -r ../dist/* ./

# 5. 提交并推送
echo "📤 推送到 GitHub..."
git add .
git commit -m "chore: 手动部署构建产物 $(date)"
git push origin gh-pages

# 6. 切换回 main 分支
echo "🔄 切换回 main 分支..."
git checkout main

echo "✅ 部署完成！"
echo "📱 访问: https://elricio.github.io/resume/"
