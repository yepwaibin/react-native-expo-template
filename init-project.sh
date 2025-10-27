#!/bin/bash

# React Native Expo 项目初始化脚本
# 用于基于模版创建新项目

set -e

echo "🎨 React Native Expo 项目初始化"
echo "================================="
echo ""

# 颜色定义
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 检查是否在项目根目录
if [ ! -f "package.json" ]; then
    echo "❌ 错误：请在项目根目录运行此脚本"
    exit 1
fi

echo "${BLUE}📋 收集项目信息${NC}"
echo ""

# 读取项目名称
read -p "项目名称 (英文，小写，连字符分隔，如 my-app): " PROJECT_NAME
if [ -z "$PROJECT_NAME" ]; then
    PROJECT_NAME="my-app"
fi

# 读取显示名称
read -p "显示名称 (用户看到的名称，如 My App): " DISPLAY_NAME
if [ -z "$DISPLAY_NAME" ]; then
    DISPLAY_NAME="My App"
fi

# 读取 Bundle ID
read -p "Bundle ID (如 com.yourname.myapp): " BUNDLE_ID
if [ -z "$BUNDLE_ID" ]; then
    BUNDLE_ID="com.example.$PROJECT_NAME"
fi

# 读取项目描述
read -p "项目描述: " DESCRIPTION
if [ -z "$DESCRIPTION" ]; then
    DESCRIPTION="A React Native application"
fi

# 读取作者
read -p "作者名称: " AUTHOR
if [ -z "$AUTHOR" ]; then
    AUTHOR="Your Name"
fi

# 读取 Git 仓库
read -p "Git 仓库 URL (可选): " GIT_REPO

echo ""
echo "${YELLOW}📝 确认项目信息:${NC}"
echo "  项目名称: $PROJECT_NAME"
echo "  显示名称: $DISPLAY_NAME"
echo "  Bundle ID: $BUNDLE_ID"
echo "  描述: $DESCRIPTION"
echo "  作者: $AUTHOR"
if [ ! -z "$GIT_REPO" ]; then
    echo "  Git 仓库: $GIT_REPO"
fi
echo ""

read -p "确认无误? (y/N): " CONFIRM
if [ "$CONFIRM" != "y" ] && [ "$CONFIRM" != "Y" ]; then
    echo "❌ 已取消"
    exit 1
fi

echo ""
echo "${BLUE}🚀 开始初始化项目...${NC}"
echo ""

# 1. 更新 package.json
echo "📦 更新 package.json..."
if command -v jq &> /dev/null; then
    # 使用 jq（如果已安装）
    jq ".name = \"$PROJECT_NAME\" | .version = \"1.0.0\" | .description = \"$DESCRIPTION\" | .author = \"$AUTHOR\"" package.json > package.json.tmp && mv package.json.tmp package.json
else
    # 使用 sed（备用方案）
    sed -i.bak "s/\"name\": \".*\"/\"name\": \"$PROJECT_NAME\"/" package.json
    sed -i.bak "s/\"version\": \".*\"/\"version\": \"1.0.0\"/" package.json
    rm package.json.bak
fi

# 2. 更新 app.json
echo "📱 更新 app.json..."
if [ -f "app.json" ]; then
    if command -v jq &> /dev/null; then
        jq ".expo.name = \"$PROJECT_NAME\" | .expo.slug = \"$PROJECT_NAME\" | .expo.ios.bundleIdentifier = \"$BUNDLE_ID\" | .expo.android.package = \"${BUNDLE_ID}\"" app.json > app.json.tmp && mv app.json.tmp app.json
    else
        sed -i.bak "s/\"name\": \".*\"/\"name\": \"$PROJECT_NAME\"/" app.json
        sed -i.bak "s/\"slug\": \".*\"/\"slug\": \"$PROJECT_NAME\"/" app.json
        rm app.json.bak
    fi
fi

# 3. 清理 Git 历史
echo "🗑️  清理 Git 历史..."
if [ -d ".git" ]; then
    rm -rf .git
    echo "   ✅ 已清理旧的 Git 历史"
fi

# 4. 初始化新的 Git 仓库
echo "📚 初始化 Git 仓库..."
git init
git add .
git commit -m "chore: 初始化项目 $PROJECT_NAME"

if [ ! -z "$GIT_REPO" ]; then
    git remote add origin "$GIT_REPO"
    echo "   ✅ 已添加远程仓库: $GIT_REPO"
fi

# 5. 安装依赖
echo "📥 安装依赖..."
npm install

# 6. 配置 Husky
echo "🐶 配置 Git hooks..."
npx husky install

# 7. 创建 .env.example
echo "⚙️  创建环境变量模版..."
cat > .env.example << EOF
# 环境变量示例
# 复制此文件为 .env 并填入实际值

# API 配置
API_URL=https://api.example.com
API_KEY=your-api-key

# 其他配置
# ...
EOF

# 8. 更新 README.md 开头
echo "📝 更新 README..."
cat > README.tmp << EOF
# $DISPLAY_NAME

$DESCRIPTION

> 基于 [React Native Expo Template](https://github.com/your-template-repo) 创建

## 功能特性

- 待补充...

## 快速开始

\`\`\`bash
npm install
./RUN_NOW.sh
\`\`\`

---

EOF

# 将原 README 内容追加
tail -n +3 README.md >> README.tmp
mv README.tmp README.md

echo ""
echo "${GREEN}✅ 项目初始化完成！${NC}"
echo ""
echo "📋 项目信息:"
echo "  名称: $PROJECT_NAME"
echo "  显示名称: $DISPLAY_NAME"
echo "  Bundle ID: $BUNDLE_ID"
echo ""
echo "🎯 下一步:"
echo "  1. 查看 TEMPLATE_GUIDE.md 了解如何使用模版"
echo "  2. 修改 README.md 编写你的项目说明"
echo "  3. 替换 assets/ 目录下的应用图标"
echo "  4. 运行 ./RUN_NOW.sh 启动应用"
echo "  5. 开始开发你的应用！"
echo ""

if [ ! -z "$GIT_REPO" ]; then
    echo "💡 推送到远程仓库:"
    echo "  git push -u origin main"
    echo ""
fi

echo "${GREEN}Happy Coding! 🚀${NC}"

