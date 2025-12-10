#!/bin/bash

echo "🚀 HandyMatches Deployment Helper"
echo "=================================="
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing Git repository..."
    git init
    echo "✅ Git initialized"
    echo ""
fi

# Check if remote exists
if git remote get-url origin &> /dev/null; then
    echo "✅ Git remote already configured"
else
    echo "⚠️  No Git remote found."
    echo ""
    echo "Please create a repository on GitHub first, then run:"
    echo ""
    echo "git remote add origin https://github.com/YOUR_USERNAME/handymatches.git"
    echo ""
    exit 1
fi

echo "📝 Adding files to Git..."
git add index.html README.md netlify.toml .gitignore DEPLOYMENT.md

echo "💾 Committing changes..."
git commit -m "Update: $(date '+%Y-%m-%d %H:%M:%S')"

echo "⬆️  Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Successfully pushed to GitHub!"
echo ""
echo "🌐 Next steps:"
echo "1. Go to https://app.netlify.com"
echo "2. Click 'Add new site' → 'Import an existing project'"
echo "3. Select your GitHub repository"
echo "4. Click 'Deploy site'"
echo ""
echo "Your site will be live in seconds! 🎉"
