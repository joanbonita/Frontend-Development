// GitHub API utility functions
const GITHUB_API_BASE = "https://api.github.com";

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  url: string;
  homepage: string;
  language: string;
  stars: number;
  forks: number;
  topics: string[];
}

export interface GitHubUser {
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  blog: string;
  twitter_username: string;
}

/**
 * Fetch GitHub user profile data
 */
export async function fetchGitHubUser(username: string): Promise<GitHubUser | null> {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${username}`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      console.error(`Failed to fetch user ${username}:`, response.status);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    return null;
  }
}

/**
 * Fetch user's public repositories
 */
interface GitHubApiRepo {
  id: number;
  name: string;
  description?: string | null;
  html_url: string;
  homepage?: string | null;
  language?: string | null;
  stargazers_count: number;
  forks_count: number;
  topics?: string[];
}

export async function fetchGitHubRepos(username: string, limit: number = 6): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${username}/repos?sort=stars&order=desc&per_page=${limit}`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      console.error(`Failed to fetch repos for ${username}:`, response.status);
      return [];
    }

    const repos: GitHubApiRepo[] = await response.json();
    return repos.map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description || "No description provided",
      url: repo.html_url,
      homepage: repo.homepage || "",
      language: repo.language || "Not specified",
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      topics: repo.topics || [],
    }));
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}

/**
 * Fetch GitHub user stats
 */
export async function fetchGitHubStats(username: string) {
  try {
    const user = await fetchGitHubUser(username);
    if (!user) return null;

    return {
      publicRepos: user.public_repos,
      followers: user.followers,
      following: user.following,
    };
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    return null;
  }
}
