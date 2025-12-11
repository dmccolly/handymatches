# Deployment Guide

## Quick Start - Deploying to Netlify

### Method 1: Drag and Drop (Easiest)
1. Zip the entire `handymatches` folder
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag and drop your zip file
4. Done! Your site is live

### Method 2: GitHub Integration (Recommended)
1. **Push to GitHub**
   ```bash
   cd handymatches
   git init
   git add .
   git commit -m "Initial commit - refactored HandyMatches"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/handymatches.git
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Log in to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Choose GitHub
   - Select your `handymatches` repository
   - Build settings:
     - Build command: (leave empty)
     - Publish directory: `.`
   - Click "Deploy site"

3. **Custom Domain** (Optional)
   - Site settings → Domain management
   - Add custom domain
   - Follow DNS configuration instructions

## Testing Locally

### Simple HTTP Server (Python)
```bash
cd handymatches
python3 -m http.server 8000
```
Then visit: http://localhost:8000

### Simple HTTP Server (Node.js)
```bash
cd handymatches
npx http-server -p 8000
```
Then visit: http://localhost:8000

### VS Code Live Server
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

## Environment-Specific Configurations

### Production Checklist
- [ ] All components fully implemented
- [ ] Real images added (not emojis)
- [ ] Meta tags added for SEO
- [ ] Favicon added
- [ ] Analytics added (Google Analytics, etc.)
- [ ] Error pages configured (404.html)
- [ ] HTTPS enabled (automatic with Netlify)
- [ ] Performance optimized

### Adding Analytics
Add to `index.html` before `</head>`:
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

### Adding Favicon
1. Create/add favicon files to root directory
2. Add to `<head>` in index.html:
```html
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
```

### SEO Optimization
Add to `<head>` in index.html:
```html
<!-- Primary Meta Tags -->
<meta name="title" content="HandyMatches - Neighbors Helping Neighbors">
<meta name="description" content="Connecting local volunteers with residents who need help with everyday tasks. Building stronger communities together.">
<meta name="keywords" content="volunteer, community help, neighbor assistance, home repairs, senior help">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://handymatches.netlify.app/">
<meta property="og:title" content="HandyMatches - Neighbors Helping Neighbors">
<meta property="og:description" content="Connecting local volunteers with residents who need help with everyday tasks.">
<meta property="og:image" content="https://handymatches.netlify.app/images/og-image.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://handymatches.netlify.app/">
<meta property="twitter:title" content="HandyMatches - Neighbors Helping Neighbors">
<meta property="twitter:description" content="Connecting local volunteers with residents who need help with everyday tasks.">
<meta property="twitter:image" content="https://handymatches.netlify.app/images/og-image.jpg">
```

## Performance Optimization

### Lazy Loading Images
Update image tags to include lazy loading:
```html
<img src="image.jpg" loading="lazy" alt="Description">
```

### Minification (Optional)
For production, consider minifying CSS/JS:
```bash
npm install -g csso-cli terser
csso css/main.css -o css/main.min.css
csso css/components.css -o css/components.min.css
```

Then update references in index.html.

## Continuous Deployment

With GitHub connected to Netlify:
1. Make changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
3. Netlify automatically deploys!

## Custom Configuration Files

### netlify.toml
Create in root directory for advanced settings:
```toml
[build]
  publish = "."

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

### .gitignore
```
.DS_Store
node_modules/
.env
*.log
```

## Troubleshooting

### Issue: Site not loading
- Check browser console for errors
- Verify all file paths are correct (case-sensitive)
- Ensure all components are exported correctly

### Issue: React errors
- Make sure React/ReactDOM loaded from CDN
- Check component syntax
- Verify Babel is transpiling JSX

### Issue: Styles not applying
- Check CSS file paths in index.html
- Verify Tailwind CDN is loading
- Clear browser cache

### Issue: Images not showing
- Verify image paths are correct
- Check image files are in correct directory
- Ensure proper file extensions

## Monitoring

### Netlify Analytics
Enable in Site settings → Analytics
- Page views
- Unique visitors
- Top pages
- Bandwidth usage

### External Monitoring
Consider adding:
- Google Analytics
- Hotjar for user behavior
- Sentry for error tracking

## Backup and Version Control

### Always use Git
```bash
# Regular backups
git add .
git commit -m "Describe changes"
git push

# Create tagged releases
git tag -a v1.0 -m "Version 1.0"
git push origin v1.0
```

### Download Deploys
- Netlify Dashboard → Deploys → Download deploy

## Security

### Headers (in netlify.toml)
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

### HTTPS
- Automatically enabled by Netlify
- Force HTTPS in Site settings → Domain management

## Support Resources
- [Netlify Documentation](https://docs.netlify.com/)
- [Netlify Community](https://answers.netlify.com/)
- [GitHub Issues](https://github.com/YOUR_USERNAME/handymatches/issues)

## Post-Deployment Checklist
- [ ] Site loads correctly
- [ ] All pages navigable
- [ ] Forms functional (if backend added)
- [ ] Images displaying
- [ ] Mobile responsive
- [ ] Cross-browser tested (Chrome, Firefox, Safari, Edge)
- [ ] Analytics working
- [ ] SEO meta tags present
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active
- [ ] Performance tested (Lighthouse score)

Good luck with your deployment! 🚀
