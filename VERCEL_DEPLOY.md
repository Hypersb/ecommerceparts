# Quick Deployment Steps

## Your Git is Ready! ✅

Now connect to your Vercel project "ecommerceparts":

### Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: **ecommerceparts** (or demobuy)
3. Keep it Public
4. Don't initialize with README (we already have files)
5. Click "Create repository"

### Step 2: Push to GitHub
Replace YOUR_USERNAME with your GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/ecommerceparts.git
git branch -M main
git push -u origin main
```

### Step 3: Connect to Vercel
1. Go to https://vercel.com/subhanjan/ecommerceparts/settings/git
2. Click "Connect Git Repository"
3. Select your GitHub repository
4. Vercel will auto-deploy!

---

## 🚀 **Option 2: Deploy via CLI (Faster)**

```bash
# Install Vercel CLI (if not installed)
npm install -g vercel

# Login to Vercel
vercel login

# Link to existing project
vercel link

# Deploy to production
vercel --prod
```

When prompted:
- Link to existing project? **Yes**
- What's your project name? **ecommerceparts**
- Link to ecommerceparts? **Yes**

---

## ✅ After Deployment

Your site will be live at:
**https://ecommerceparts.vercel.app**

Auto-deploy on every push to main branch! 🎉
