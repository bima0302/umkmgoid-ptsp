#!/bin/bash

echo "📥 Pulling latest changes..."
git pull origin main

echo "📦 Installing dependencies..."
npm install

echo "🔨 Building Next.js app..."
npm run build

echo "🚀 Restarting PM2 process..."
pm2 restart prod

echo "✅ Deploy complete!"
