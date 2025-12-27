# Dolores Research Website

A sleek, dark-themed React website built with Vite and Tailwind CSS.

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Deploy to Vercel (Recommended)

### Option 1: Via GitHub (Easiest)

1. Push this code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project" → Import your repository
4. Vercel auto-detects Vite — just click "Deploy"
5. Done! You'll get a URL like `yourproject.vercel.app`

### Option 2: Via Vercel CLI

```bash
npm install -g vercel
vercel
```

## Connect Your Namecheap Domain

### Step 1: Add domain in Vercel
1. Go to your project dashboard on Vercel
2. Click "Settings" → "Domains"
3. Enter your domain (e.g., `doloresresearch.com`) and click "Add"

### Step 2: Configure DNS in Namecheap
1. Log into [namecheap.com](https://namecheap.com)
2. Go to Domain List → click "Manage" on your domain
3. Go to "Advanced DNS" tab
4. Delete any existing A records or CNAME records for `@` and `www`
5. Add these records:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A | @ | 76.76.21.21 | Automatic |
| CNAME | www | cname.vercel-dns.com | Automatic |

6. Wait 5-30 minutes for DNS propagation
7. Vercel will automatically provision an SSL certificate

## Alternative: Deploy to Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) → "Add new site" → "Import an existing project"
3. Connect your GitHub repo
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click "Deploy"

For Namecheap with Netlify, use Netlify's DNS settings instead (they'll provide the specific records).

## Project Structure

```
dolores-website/
├── index.html          # Entry HTML
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind + marquee animation
├── postcss.config.js   # PostCSS for Tailwind
├── public/
│   └── favicon.svg     # Site favicon
└── src/
    ├── main.jsx        # React entry point
    ├── index.css       # Global styles + Tailwind
    └── DoloresWebsite.jsx  # Main component
```

## Tech Stack

- **React 18** — UI framework
- **Vite** — Build tool
- **Tailwind CSS** — Styling
- **Lucide React** — Icons
