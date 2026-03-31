import { getGitHubProjects } from "@/lib/github";
import ProjectCard from "@/components/ProjectCard";

export default async function ProjectsPage() {
  const projects = await getGitHubProjects();

  return (
    <main style={{ minHeight: "100vh", background: "#0d0608", padding: "6rem 2.5rem" }}>
      <p style={{ fontSize: "12px", letterSpacing: "0.15em", color: "#9b3a5a", textTransform: "uppercase", fontFamily: "monospace", marginBottom: "1rem" }}>
        My Work
      </p>
      <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 500, color: "#f0e6ea", marginBottom: "0.75rem" }}>
        Projects
      </h1>
      <p style={{ color: "#a08890", fontSize: "1rem", marginBottom: "3rem" }}>
        A collection of my public work on GitHub.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem", maxWidth: "1100px" }}>
        {projects.map((repo) => (
          <ProjectCard key={repo.id} repo={repo} />
        ))}
      </div>
    </main>
  );
}