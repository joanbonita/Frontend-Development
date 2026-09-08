# GitHub Integration Setup

## Quick Start - Link Your GitHub Profile

Your portfolio now automatically fetches your latest projects from GitHub! Follow these steps to set it up.

## Step 1: Update Your GitHub Username

Open `app/utils/github.ts` and replace `YOUR_GITHUB_USERNAME` with your actual GitHub username:

```typescript
const GITHUB_USERNAME = "your-actual-github-username";
```

Then in `app/Components/GitHubProjects.tsx`, do the same:

```typescript
const GITHUB_USERNAME = "your-actual-github-username";
```

## Step 2: Update Social Links

Edit `app/JsonData/social.json`:
```json
{
  "github": "https://github.com/your-actual-github-username",
  "linkedin": "https://linkedin.com/in/your-profile",
  "email": "your.actual.email@example.com",
  "phone": "+1 (555) 123-4567"
}
```

## What Gets Fetched

The portfolio automatically fetches:
- ✅ Your 6 most-starred public repositories
- ✅ Repository descriptions
- ✅ Programming languages used
- ✅ Star count and fork count
- ✅ Topics/tags for each repo
- ✅ Links to live demos (if set in GitHub)

### Example: GitHub API Response
```javascript
{
  "name": "awesome-project",
  "description": "An amazing web application",
  "url": "https://github.com/yourusername/awesome-project",
  "language": "JavaScript",
  "stars": 45,
  "forks": 12,
  "topics": ["react", "nextjs", "tailwindcss"]
}
```

## GitHub API Limits

- **Unauthenticated**: 60 requests per hour
- **Authenticated**: 5,000 requests per hour (optional, requires token)

### Add GitHub Token (Optional - for more requests)

If you want unlimited requests, add a Personal Access Token:

1. Go to GitHub Settings → Developer Settings → Personal Access Tokens
2. Create a new token (no scopes needed for public repos)
3. Add to `app/utils/github.ts`:

```typescript
const GITHUB_TOKEN = "ghp_your_token_here"; // Optional

export async function fetchGitHubRepos(username: string) {
  const response = await fetch(`${GITHUB_API_BASE}/users/${username}/repos`, {
    headers: {
      Accept: "application/vnd.github.v3+json",
      Authorization: GITHUB_TOKEN ? `token ${GITHUB_TOKEN}` : "",
    },
  });
  // ...
}
```

## Current Profile Info

Your portfolio now displays:

### Hero Section
- **Title**: Engineer Salma Pelesi
- **Subtitle**: Hardware Engineer | Aspiring Frontend Developer | Data Scientist
- **Description**: Updated to reflect your unique background

### About Page
- Your hardware engineering background
- Transition to frontend development
- Data science interests
- Quick facts about your skills

### Skills (Updated Categories)
- **Frontend**: React, Next.js, TypeScript, Tailwind CSS, JavaScript
- **Backend**: Node.js, Python, MongoDB, Firebase, REST APIs
- **Hardware**: Embedded Systems, IoT, Arduino, PCB Design, Firmware
- **Data Science**: Python, Pandas, Data Visualization, Statistics, ML
- **Tools**: Git, VS Code, Docker, GitHub

### Experience
- Hardware Engineer (2020-Present)
- Aspiring Frontend Developer (2023-Present)
- Data Science Enthusiast (2024-Present)

## Customization

### Fetch More/Fewer Projects

Edit `app/Components/GitHubProjects.tsx`:
```typescript
const data = await fetchGitHubRepos(GITHUB_USERNAME, 10); // Change 6 to desired number
```

### Filter Specific Projects

In `app/utils/github.ts`, add filtering logic:
```typescript
export async function fetchGitHubRepos(username: string, limit: number = 6) {
  let repos = await fetchGitHubRepos(username);
  
  // Filter by language
  repos = repos.filter(r => r.language === "JavaScript" || r.language === "Python");
  
  return repos.slice(0, limit);
}
```

### Display on Different Pages

You can add the GitHub projects component to any page:
```tsx
import GitHubProjects from "@/app/Components/GitHubProjects";

export default function YourPage() {
  return (
    <>
      <GitHubProjects />
    </>
  );
}
```

## Troubleshooting

### Projects Not Showing?

1. Check that `GITHUB_USERNAME` is correctly set (no typos)
2. Verify you have public repositories on GitHub
3. Check browser console for errors (F12 → Console)
4. Repositories must be public to be fetched

### 404 Error?

- GitHub username doesn't exist or is private
- Rate limited (wait 1 hour or add authentication token)

### Slow Loading?

- GitHub API responses are cached for 1 hour
- Clear browser cache (Ctrl+Shift+Delete) and refresh
- Using too large a `limit` value slows down fetching

## Testing Locally

```bash
npm run dev
```

Visit http://localhost:3000 and scroll down to see your GitHub projects!

## Deployment Notes

- GitHub API calls work from both client and server components
- Results are cached for 1 hour via Next.js ISR
- No backend server needed - purely client-side API calls
- Safe to expose (public GitHub repos only)

## Next Steps

1. ✅ Update `GITHUB_USERNAME` in both files
2. ✅ Update `social.json` with your GitHub profile
3. ✅ Verify your GitHub has public repositories
4. ✅ Run `npm run dev` and check the homepage
5. ✅ Deploy to Vercel/Netlify

Your GitHub projects will now automatically appear on your portfolio! 🚀
