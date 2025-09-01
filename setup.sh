#!/bin/bash

# Cross-platform setup script
# This script sets up the development environment for both macOS and Windows (Git Bash/WSL)

echo "🚀 Setting up development environment..."

# Check Node.js version
NODE_VERSION=$(node --version 2>/dev/null)
if [[ $? -eq 0 ]]; then
    echo "✅ Node.js found: $NODE_VERSION"
    # Check if version is 18.x or 20.x
    if [[ $NODE_VERSION =~ ^v(18|20)\. ]]; then
        echo "✅ Node.js version is compatible"
    else
        echo "⚠️  Recommended Node.js version: 18.x or 20.x (current: $NODE_VERSION)"
    fi
else
    echo "❌ Node.js not found. Please install Node.js 18.x or 20.x"
    exit 1
fi

# Check npm
NPM_VERSION=$(npm --version 2>/dev/null)
if [[ $? -eq 0 ]]; then
    echo "✅ npm found: $NPM_VERSION"
else
    echo "❌ npm not found"
    exit 1
fi

# Configure Git for cross-platform development
echo "⚙️  Configuring Git for cross-platform development..."
git config core.autocrlf false
git config core.eol lf
echo "✅ Git configured for consistent line endings"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [[ $? -eq 0 ]]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "🎉 Setup complete! You can now run:"
echo "   npm start    - Start development server"
echo "   npm test     - Run tests"
echo "   npm run build - Build for production"
