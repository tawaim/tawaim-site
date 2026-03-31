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
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=20&type=public`,
    {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch GitHub repos");

  const repos: GitHubRepo[] = await res.json();
  return repos
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
}