# Visual Setup Guide - GitHub Integration

## 🎯 Visual Workflow

```
START HERE
    ↓
[1] Find Your GitHub Username
    ↓
[2] Update 2 Files with Username
    ↓
[3] Update social.json
    ↓
[4] Test: npm run dev
    ↓
[5] Deploy to Vercel/Netlify
    ↓
DONE! 🎉
```

---

## Step-by-Step Visual Guide

### STEP 1️⃣: Find Your GitHub Username

```
Go to GitHub.com
    ↓
Click Profile (top right)
    ↓
Look at URL: github.com/YOUR-USERNAME
    ↓
Copy this username ← THIS IS WHAT YOU NEED
```

**Example:**
- If your GitHub is: `https://github.com/salma-engineer`
- Your username is: `salma-engineer`

---

### STEP 2️⃣: Update TypeScript Files

#### File 1: `app/utils/github.ts`

**BEFORE:**
```typescript
const GITHUB_USERNAME = "YOUR_GITHUB_USERNAME";
                        ↑
                    Change this
```

**AFTER:**
```typescript
const GITHUB_USERNAME = "salma-engineer";
                        ↑
                    Your actual username
```

#### File 2: `app/Components/GitHubProjects.tsx`

**BEFORE:**
```typescript
const GITHUB_USERNAME = "YOUR_GITHUB_USERNAME";
                        ↑
                    Change this
```

**AFTER:**
```typescript
const GITHUB_USERNAME = "salma-engineer";
                        ↑
                    Your actual username
```

---

### STEP 3️⃣: Update Social Links

**File:** `app/JsonData/social.json`

**BEFORE:**
```json
{
  "github": "https://github.com/yourusername",
  "linkedin": "https://linkedin.com/in/yourusername",
  "email": "your.email@example.com",
  "phone": "+1 (555) 123-4567"
}
```

**AFTER:**
```json
{
  "github": "https://github.com/salma-engineer",
  "linkedin": "https://linkedin.com/in/salma-pelesi",
  "email": "salma@example.com",
  "phone": "+1 (555) 123-4567"
}
```

---

### STEP 4️⃣: Test Locally

**Open Terminal:**

```bash
npm run dev
```

**You'll see:**
```
> Engineer Salma Portfolio
> ▲ Next.js 16.0.7
> Local: http://localhost:3000
```

**Open Browser:**
- Go to `http://localhost:3000`
- Scroll down
- Look for "Latest GitHub Projects" section
- You should see your repositories! 🎉

---

### STEP 5️⃣: Deploy to Vercel (Easiest)

#### Option A: Via GitHub

```
1. Push to GitHub
   └─ git add .
   └─ git commit -m "Add GitHub integration"
   └─ git push

2. Go to vercel.com

3. Click "New Project"

4. Select your repository

5. Click "Deploy"

6. Wait 2-3 minutes

7. Your site is LIVE! 🚀
```

#### Option B: Via Vercel CLI

```bash
npm i -g vercel      # Install Vercel CLI
vercel               # Deploy!
```

---

## 📊 What Changes to Expect

### Before
```
Homepage
├── Navbar
├── Hero
│   └─ Generic greeting
├── Projects Section
│   └─ Sample projects
└── Footer
```

### After
```
Homepage
├── Navbar
├── Hero
│   └─ YOUR roles: Hardware Eng | Frontend Dev | Data Scientist
├── GitHub Projects ← NEW!
│   └─ YOUR real projects fetched automatically
├── Featured Projects
│   └─ Sample projects
└── Footer
    └─ YOUR contact info
```

---

## 🔍 Check Your Work

### Homepage Should Show:
- ✅ Your name: "Engineer Salma Pelesi"
- ✅ Your roles: "Hardware Engineer | Aspiring Frontend Developer | Data Scientist"
- ✅ GitHub Projects section with your repos
- ✅ Each repo showing:
  - Repository name
  - Description
  - Language
  - Stars ⭐
  - Forks 🍴
  - "View Repository" button

### About Page Should Show:
- ✅ Updated bio about hardware→frontend→data science
- ✅ Your skills in Hardware, Frontend, Backend, Data Science
- ✅ Your three roles in experience section

---

## 🎨 Quick Customizations

### Change Portal Color
File: `app/globals.css`

**BEFORE:**
```css
:root {
  --prim-color: #1E40AF;  /* Blue */
}
```

**AFTER:**
```css
:root {
  --prim-color: #FF6B6B;  /* Red */
}
```

Popular colors:
- `#1E40AF` - Blue (current)
- `#FF6B6B` - Red
- `#4C9AFF` - Sky Blue
- `#7C3AED` - Purple
- `#06B6D4` - Cyan

### Show More/Fewer GitHub Projects
File: `app/Components/GitHubProjects.tsx` (Line 28)

**BEFORE:**
```typescript
const data = await fetchGitHubRepos(GITHUB_USERNAME, 6);
                                                      ↑
                                    Show 6 repositories
```

**AFTER:**
```typescript
const data = await fetchGitHubRepos(GITHUB_USERNAME, 12);
                                                      ↑
                                    Show 12 repositories
```

---

## 🆘 Troubleshooting Visual Guide

### Problem: Nothing Changed
```
❌ Did you:
   ├─ Update BOTH files?
   ├─ Refresh browser?
   ├─ Restart dev server?
   └─ Check console for errors?

✅ Try:
   └─ Ctrl+Shift+R (hard refresh)
   └─ Close and reopen terminal
   └─ npm run dev again
```

### Problem: GitHub Projects Not Showing
```
❌ Check:
   ├─ Is username spelled correctly?
   ├─ Does username have public repos?
   ├─ Are repos really public?
   └─ Check browser console (F12)

✅ Fix:
   ├─ Go to GitHub.com/YOUR-USERNAME
   ├─ Verify public repos exist
   ├─ Wait 1 hour for cache
   └─ Try different username
```

### Problem: Build Errors
```
❌ You might have:
   ├─ A typo in the code
   ├─ Missing closing bracket
   └─ Wrong file path

✅ Fix:
   ├─ npm install
   ├─ npm run dev
   ├─ Check error message
   └─ Read the red text carefully!
```

---

## 📱 Testing Responsiveness

After deploying, test on:
- 📱 Phone (mobile view)
- 📱 Tablet (responsive view)
- 💻 Desktop (full view)

**How to test on phone:**
1. Deploy to Vercel/Netlify
2. Get the URL (e.g., `my-portfolio.vercel.app`)
3. Open on phone browser
4. Should look good on all screen sizes

---

## 🎯 Final Checklist

Before calling it done:

- [ ] **GitHub username** updated in both TypeScript files
- [ ] **social.json** updated with your real info
- [ ] **npm run dev** works without errors
- [ ] **Homepage** shows "Latest GitHub Projects"
- [ ] **Your repos** appear on the page
- [ ] **About page** shows updated bio
- [ ] **All links** work (click them!)
- [ ] **Mobile view** looks good
- [ ] **Deployed** to Vercel/Netlify
- [ ] **URL works** and you can share it

---

## 🎉 Success Indicators

Your portfolio is ready when you see:

✅ GitHub projects displayed automatically
✅ Your repos show with stars and forks
✅ All pages load without errors
✅ Mobile view is responsive
✅ You can share a live URL
✅ Links work and go to correct places
✅ Your unique roles are displayed

---

## 📚 Quick Reference

| What | Where | What to Change |
|------|-------|-----------------|
| GitHub Username | 2 files | `YOUR_GITHUB_USERNAME` |
| Social Links | `social.json` | All URLs and email |
| Colors | `globals.css` | CSS variables |
| Hero Text | `Hero.tsx` | Already updated! |
| About Bio | `About/page.tsx` | Already updated! |
| Skills | `skills.json` | Already updated! |
| Experience | `experience.json` | Already updated! |

---

## 🚀 Deploy Commands Quick Reference

```bash
# Test locally
npm run dev

# Build for production
npm run build
npm start

# Deploy via Vercel
vercel

# Or push to GitHub and deploy via Vercel.com
git push
```

---

## 💡 Pro Tips

1. **Keep repos updated** - Regularly push code to GitHub
2. **Add READMEs** - Make your repos look professional
3. **Add topics** - GitHub repo settings → Topics (helps discoverability)
4. **Add live demos** - GitHub repo settings → Website URL
5. **Make it unique** - Your hardware background is your superpower!

---

## You're All Set! 🎊

The hardest part is done. Now it's just:

1. Update 2 lines in `github.ts` ← Takes 30 seconds
2. Update 2 lines in `GitHubProjects.tsx` ← Takes 30 seconds
3. Update `social.json` ← Takes 2 minutes
4. Deploy ← Takes 3 minutes

**Total time: ~6 minutes**

Then you have a professional portfolio showing your real work! 

---

**Good luck! You've got this! 🚀**
