# Your GitHub Integration Instructions

## 🎯 Final Steps to Activate GitHub Integration

Your portfolio is now configured to fetch your projects directly from GitHub! Here's exactly what you need to do:

---

## **STEP 1: Find Your GitHub Username**

1. Go to https://github.com/
2. Look at the top-right corner and click your profile
3. Copy your username from the URL: `github.com/YOUR-USERNAME`
4. Note it down: `_______________________`

---

## **STEP 2: Update the Portfolio**

### Option A: Using VS Code (Recommended)

1. Open VS Code in your portfolio folder
2. Press `Ctrl+H` to open Find & Replace
3. In the "Find" field, type: `YOUR_GITHUB_USERNAME`
4. In the "Replace" field, paste: `your-actual-username`
5. Click "Replace All"

This will update:
- `app/utils/github.ts`
- `app/Components/GitHubProjects.tsx`

### Option B: Manual Edit

#### File 1: `app/utils/github.ts`
Line 5, change:
```typescript
const GITHUB_USERNAME = "YOUR_GITHUB_USERNAME";
```
To:
```typescript
const GITHUB_USERNAME = "your-actual-username";
```

#### File 2: `app/Components/GitHubProjects.tsx`
Line 22, change:
```typescript
const GITHUB_USERNAME = "YOUR_GITHUB_USERNAME";
```
To:
```typescript
const GITHUB_USERNAME = "your-actual-username";
```

---

## **STEP 3: Update Social Links**

Edit `app/JsonData/social.json`:

```json
{
  "github": "https://github.com/your-actual-username",
  "linkedin": "https://linkedin.com/in/your-linkedin-username",
  "email": "your.email@example.com",
  "phone": "+1 (555) 123-4567"
}
```

---

## **STEP 4: Test Locally**

Run this command in terminal:
```bash
npm run dev
```

Then:
1. Open http://localhost:3000 in your browser
2. Scroll down past the Hero section
3. You should see your GitHub projects with:
   - Repository names
   - Descriptions
   - Stars and forks count
   - Links to your repos

**If you don't see projects:**
- Make sure you have public repositories on GitHub
- Check the browser console for errors (Press F12)
- Verify the username spelling

---

## **STEP 5: Deploy Online (Optional)**

### Deploy to Vercel (Easiest)

1. Push your code to GitHub:
```bash
git add .
git commit -m "Update portfolio with GitHub integration"
git push
```

2. Go to https://vercel.com
3. Click "New Project"
4. Select your portfolio repository
5. Click "Deploy"
6. Done! Your site is live! 🎉

### Deploy to Netlify

1. Go to https://netlify.com
2. Click "Add new site"
3. Select "Import an existing project"
4. Connect your GitHub repo
5. Click Deploy

---

## **What Your Portfolio Will Display**

Once you complete these steps, your homepage will show:

### 📌 GitHub Projects Section
- **6 of your most-starred repositories**
- For each repo:
  - Repository name and description
  - Programming language used
  - Number of stars ⭐
  - Number of forks 🍴
  - Tags/topics
  - Direct link to the repo
  - Link to live demo (if available)

---

## **Making Your Repos Look Great**

To make your projects stand out:

### Add a README
Each repo should have a `README.md` with:
- Project description
- How to install/use
- Technologies used
- Links to demo/website

### Add Topics
On GitHub, go to your repo → Settings → Topics
Add relevant tags like: `react`, `nextjs`, `python`, `iot`, etc.

### Add a Homepage
If your project has a live demo:
- Go to repo Settings
- Add "Website" URL
- This will show as a link in your portfolio

---

## **Common Questions**

### Q: My GitHub projects aren't showing!
A: Check that:
1. Your username is spelled correctly (case matters!)
2. You have public repositories
3. You're looking at the right page (scroll down on homepage)
4. Wait 1 hour for cache to update if you just created repos

### Q: Can I show private repositories?
A: Not recommended for security. Only public repos can be shown without authentication tokens.

### Q: Can I customize which projects show?
A: Yes! Edit `app/Components/GitHubProjects.tsx` to filter by language, topic, or change the number of repos shown.

### Q: How often do the projects update?
A: Every hour (cached). To see updates immediately, refresh your browser.

### Q: Do I need a GitHub token?
A: No! Public repositories can be fetched without authentication. Adding a token increases rate limits if you plan to fetch projects frequently.

---

## **Verify Your Setup**

Checklist before deploying:

- [ ] GitHub username updated in both TypeScript files
- [ ] `social.json` updated with your GitHub URL
- [ ] `npm run dev` runs without errors
- [ ] Homepage shows "GitHub Projects" section
- [ ] Your repositories are visible on the page
- [ ] All links work correctly
- [ ] Mobile view looks good
- [ ] Ready to deploy!

---

## **Need Help?**

Check these files for more information:
- `QUICK_REFERENCE.md` - Quick overview
- `GITHUB_INTEGRATION.md` - Detailed guide
- `SETUP_GUIDE.md` - General setup
- `README.md` - Project overview

---

## **You're All Set!** 🚀

Once you complete these steps, your portfolio will:
✅ Display your real GitHub projects automatically
✅ Show your unique career path (Hardware → Frontend → Data Science)
✅ Be fully customizable and deployable
✅ Impress visitors with your actual work

**Update the username, test locally, and deploy. That's it!**

Good luck! 🎉
