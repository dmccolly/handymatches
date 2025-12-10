# HandyMatches Deployment Guide

## Quick Deploy to Netlify (Easiest Method)

### Option 1: Drag & Drop (No GitHub needed)

1. Go to [Netlify](https://app.netlify.com)
2. Sign up or log in
3. Click "Add new site" → "Deploy manually"
4. Drag the entire `/mnt/user-data/outputs` folder into the drop zone
5. Your site will be live at a random URL like `random-name-123.netlify.app`
6. You can change the site name in Site Settings

**Files to include in deployment:**
- `index.html` (your main file)
- `netlify.toml` (configuration)
- `README.md` (documentation)

---

## Option 2: Deploy via GitHub + Netlify (Recommended)

### Step 1: Push to GitHub

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Name it: `handymatches`
   - Make it Public
   - Don't initialize with README (we already have one)
   - Click "Create repository"

2. **Initialize and push from your local machine:**

```bash
cd /mnt/user-data/outputs

# Initialize git repository
git init

# Add all files
git add index.html README.md netlify.toml .gitignore

# Commit
git commit -m "Initial commit: HandyMatches platform"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/handymatches.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Connect to Netlify

1. Go to [Netlify](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub" as your Git provider
4. Authorize Netlify to access your GitHub account
5. Select your `handymatches` repository
6. Configure build settings:
   - **Build command:** (leave empty)
   - **Publish directory:** `.`
7. Click "Deploy site"

Your site will be live in seconds at `random-name.netlify.app`

### Step 3: Custom Domain (Optional)

1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Enter your domain (e.g., `handymatches.com`)
4. Follow instructions to update your DNS settings

---

## Option 3: Deploy to GitHub Pages

1. Push your code to GitHub (follow Step 1 above)
2. Go to your repository settings
3. Navigate to "Pages" in the left sidebar
4. Under "Source", select "main" branch
5. Click "Save"
6. Your site will be live at: `https://YOUR_USERNAME.github.io/handymatches`

**Note:** Rename `index.html` if needed, GitHub Pages expects an `index.html` in the root.

---

## Environment Variables (If needed later)

If you add a backend or API integration:

**In Netlify:**
1. Go to Site Settings → Environment Variables
2. Add variables like:
   - `API_KEY`
   - `DATABASE_URL`

---

## Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch automatically deploys
- Pull requests create deploy previews
- Rollback to any previous deploy with one click

---

## Custom Domain Setup

### For Netlify:
1. Add custom domain in Netlify dashboard
2. Update your DNS records at your domain registrar:
   ```
   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   
   Type: A
   Name: @
   Value: 75.2.60.5 (Netlify's load balancer)
   ```

### SSL Certificate
- Netlify automatically provisions free SSL certificates via Let's Encrypt
- HTTPS will be enabled within minutes

---

## Monitoring & Analytics

**Built-in Netlify Analytics:**
- Go to your site → Analytics
- Enable for $9/month (optional)

**Free Alternative - Google Analytics:**
Add this to your `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## Troubleshooting

**Site not loading?**
- Check browser console for errors
- Verify `index.html` is in the root directory
- Check Netlify deploy logs

**Changes not showing?**
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Clear browser cache
- Check if deploy succeeded in Netlify

**Need help?**
- Netlify Support: https://answers.netlify.com
- GitHub Issues: Create an issue in your repo

---

## Next Steps After Deployment

1. **Set up admin authentication** (currently open to anyone)
2. **Add a backend API** for data persistence
3. **Integrate email notifications**
4. **Set up background check API integration**
5. **Add payment processing** for donations
6. **Configure analytics**

---

## Cost

- **GitHub:** Free for public repositories
- **Netlify:** Free tier includes:
  - 100GB bandwidth/month
  - Continuous deployment
  - Free SSL
  - Custom domain
  - Deploy previews

**Paid plans start at $19/month if you need:**
- More bandwidth
- Team collaboration
- Role-based access
- Priority support
