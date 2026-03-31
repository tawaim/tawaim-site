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
}

export async function getGitHubProjects(): Promise<GitHubRepo[]> {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=20&type=public`,
    {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch GitHub repos");

  const repos: GitHubRepo[] = await res.json();
  return repos.filter((repo) => !repo.fork && repo.name !== "tawaim-site");
}