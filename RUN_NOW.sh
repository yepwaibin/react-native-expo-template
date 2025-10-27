#!/bin/bash

# 确保使用正确的 Node 版本启动 TodoList 应用

echo "🚀 TodoList 应用启动脚本"
echo "========================"
echo ""

# 加载 nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# 停止所有旧进程
echo "🛑 停止旧进程..."
killall -9 node 2>/dev/null
sleep 2

# 切换到 Node 22
echo "📦 切换到 Node.js 22..."
nvm use 22

# 显示版本
NODE_VERSION=$(node --version)
echo "✅ 当前 Node 版本: $NODE_VERSION"
echo ""

# 检查版本
if [[ ! "$NODE_VERSION" =~ ^v2[0-9] ]]; then
    echo "❌ 错误：Node 版本不是 22+"
    echo "   当前版本：$NODE_VERSION"
    echo "   请运行：nvm install 22 && nvm use 22"
    exit 1
fi

echo "🚀 启动 Expo 开发服务器..."
echo ""
echo "等待服务器启动后："
echo "  • 按 'i' 启动 iPhone 模拟器"
echo "  • 按 'shift+i' 选择 iPad 模拟器"
echo ""
echo "================================================"
echo ""

# 启动 Expo（在前台，这样可以看到所有输出）
npm start

