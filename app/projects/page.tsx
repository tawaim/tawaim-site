import { getGitHubProjects } from "@/lib/github";
import ProjectCard from "@/components/ProjectCard";
import PageHeader from "@/components/PageHeader";
import PageLayout from "@/components/PageLayout";

export default async function ProjectsPage() {
  const projects = await getGitHubProjects();

  return (
    <PageLayout>
      <PageHeader label="My Work" title="Projects" subtitle="A collection of my public work on GitHub." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
        {projects.map((repo) => (
          <ProjectCard key={repo.id} repo={repo} />
        ))}
      </div>
    </PageLayout>
  );
}