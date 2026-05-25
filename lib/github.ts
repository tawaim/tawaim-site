const GITHUB_USERNAME = "tawaim";

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  language: string | null;
  topics: string[];
  updated_at: string;
  created_at: string;
}

export async function getGitHubProjects(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=20&type=public`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      console.error(`GitHub API responded ${res.status} for ${GITHUB_USERNAME}`);
      return [];
    }

    const repos: GitHubRepo[] = await res.json();
    return repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  } catch (err) {
    console.error("Failed to fetch GitHub repos", err);
    return [];
  }
}