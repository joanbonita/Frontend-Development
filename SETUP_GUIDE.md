# Setup Guide for Your Portfolio

## Quick Start

Your portfolio is now fully functional! Follow these steps to customize it with your information:

## 1. Update Your Information

### Social Links & Contact
Edit `app/JsonData/social.json`:
```json
{
  "github": "https://github.com/YOUR-USERNAME",
  "linkedin": "https://linkedin.com/in/YOUR-USERNAME",
  "twitter": "https://twitter.com/YOUR-USERNAME",
  "email": "your.actual.email@example.com",
  "phone": "+1 (555) 123-4567"
}
```

### Add Your Projects
Edit `app/JsonData/projects.json` and update each project with:
- Your actual project titles
- Real project descriptions
- Your GitHub repository links
- Live demo URLs
- Technologies you used

Example:
```json
{
  "id": 1,
  "title": "Your Project Name",
  "description": "What this project does",
  "github": "https://github.com/yourusername/project-repo",
  "demo": "https://your-project-demo.com",
  "technologies": ["React", "Node.js", "MongoDB"]
}
```

### Update Your Experience
Edit `app/JsonData/experience.json` with your real work experience

### Update Your Skills
Edit `app/JsonData/skills.json` with your actual technical skills

## 2. Customize Branding

### Update Hero Section
Edit `app/Components/Hero.tsx`:
- Change the main headline and subtitle
- Update GitHub and project links
- Customize the description text

### Update Navbar
Edit `app/Components/Navbar.tsx`:
- Change "Engineer Salma Pelesi" to your name
- Update social links

### Update Footer
Edit `app/Components/Footer.tsx`:
- Add your actual contact information
- Update social media links

## 3. Change Colors (Optional)

Edit `app/globals.css` to customize the color scheme:
```css
:root {
  --prim-color: #1E40AF;      /* Change primary color */
  --body-color: #140132;      /* Change background */
  --bg-color: #1a1a2e;        /* Change component background */
  --text-light: rgb(170, 170, 170);  /* Change text color */
}
```

## 4. Run Your Portfolio

```bash
npm run dev
```

Visit `http://localhost:3000` to see your portfolio!

## 5. Deploy to GitHub

1. Create a new repository on GitHub
2. Push your code:
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

## 6. Deploy Online (Free Options)

### Deploy on Vercel (Recommended - 1 Click Deploy)
1. Go to [Vercel.com](https://vercel.com)
2. Click "New Project"
3. Select your GitHub repository
4. Click "Deploy"
5. Your site is live! 🚀

### Deploy on Netlify
1. Go to [Netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Deploy!

## Pages Overview

Your portfolio has these pages:

- **Home** (`/`) - Hero + Featured Projects
- **About** (`/UI-Components/About`) - Your background & experience
- **Projects** (`/UI-Components/Projects/Project`) - All your projects
- **Contact** (`/UI-Components/Contact`) - Contact form + social links

## Important Links to Update

Replace all instances of these with your actual information:
- `https://github.com/yourusername` → Your GitHub profile
- `https://linkedin.com/in/yourusername` → Your LinkedIn profile
- `your.email@example.com` → Your actual email
- `+1 (555) 123-4567` → Your phone number

## Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Dependencies issues?**
```bash
npm install
npm run dev
```

**Need to rebuild?**
```bash
npm run build
npm start
```

## Next Steps

1. ✅ Customize all JSON data files with your information
2. ✅ Update component text and links
3. ✅ Test all pages locally
4. ✅ Push to GitHub
5. ✅ Deploy to Vercel/Netlify
6. ✅ Share your portfolio URL!

## Features You Now Have

- ✨ Beautiful responsive design
- 📱 Mobile-friendly
- 🔗 GitHub integration ready
- 📧 Contact form (you can integrate with email service)
- 🎨 Customizable colors and styling
- ⚡ Fast performance with Next.js
- 🌙 Dark mode ready

Enjoy your new portfolio! 🎉
