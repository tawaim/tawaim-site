import type { Metadata } from "next";
import { getGitHubProjects } from "@/lib/github";
import ProjectCard from "@/components/ProjectCard";
import PageHeader from "@/components/PageHeader";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of my public work on GitHub.",
};

export default async function ProjectsPage() {
  const projects = await getGitHubProjects();

  return (
    <PageLayout>
      <PageHeader label="My Work" title="Projects" subtitle="A collection of my public work on GitHub." />
      {projects.length === 0 ? (
        <p style={{ color: "#6b4050", fontFamily: "monospace" }}>
          Projects couldn&apos;t be loaded right now. Find them on{" "}
          <a href="https://github.com/tawaim" target="_blank" rel="noopener noreferrer" style={{ color: "#c0385e" }}>
            GitHub
          </a>.
        </p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {projects.map((repo) => (
            <ProjectCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </PageLayout>
  );
}