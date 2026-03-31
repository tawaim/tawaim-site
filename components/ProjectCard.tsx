import { GitHubRepo } from "@/lib/github";
import { Star, GitFork, ExternalLink } from "lucide-react";

export default function ProjectCard({ repo }: { repo: GitHubRepo }) {
  const cardStyle: React.CSSProperties = {
    display: "block",
    padding: "1.5rem",
    borderRadius: "12px",
    border: "1px solid #2a1018",
    background: "#110508",
    textDecoration: "none",
    transition: "border-color 0.2s",
  };

  return (
    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" style={cardStyle}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
        <h3 style={{ fontSize: "1rem", fontWeight: 500, color: "#f0e6ea", margin: 0 }}>
          {repo.name}
        </h3>
        <ExternalLink size={14} color="#9b3a5a" style={{ flexShrink: 0, marginTop: "2px" }} />
      </div>

      {repo.description && (
        <p style={{ fontSize: "0.875rem", color: "#a08890", marginTop: "0.5rem", lineHeight: 1.6 }}>
          {repo.description}
        </p>
      )}

      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "1rem", fontSize: "0.8rem", color: "#6b4050" }}>
        {repo.language && (
          <span style={{ background: "#1f0a12", color: "#c0385e", padding: "2px 10px", borderRadius: "999px", fontSize: "0.75rem" }}>
            {repo.language}
          </span>
        )}
        <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <Star size={12} /> {repo.stargazers_count}
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <GitFork size={12} /> {repo.forks_count}
        </span>
      </div>

      {repo.topics.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "0.75rem" }}>
          {repo.topics.slice(0, 4).map((topic) => (
            <span key={topic} style={{ fontSize: "0.7rem", background: "#1f0a12", color: "#9b3a5a", padding: "2px 8px", borderRadius: "999px" }}>
              {topic}
            </span>
          ))}
        </div>
      )}
    </a>
  );
}