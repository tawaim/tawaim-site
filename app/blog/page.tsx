import { getAllPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  const tag: React.CSSProperties = {
    fontSize: "0.7rem",
    background: "#1f0a12",
    color: "#9b3a5a",
    padding: "2px 8px",
    borderRadius: "999px",
    fontFamily: "monospace",
  };

  return (
    <main style={{ minHeight: "100vh", background: "#0d0608", padding: "6rem 2.5rem" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <p style={{ fontSize: "12px", letterSpacing: "0.15em", color: "#9b3a5a", textTransform: "uppercase", fontFamily: "monospace", marginBottom: "1rem" }}>
          Writing
        </p>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 500, color: "#f0e6ea", marginBottom: "3rem" }}>
          Blog
        </h1>

        {posts.length === 0 && (
          <p style={{ color: "#6b4050", fontFamily: "monospace" }}>No posts yet.</p>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{ textDecoration: "none", display: "block", background: "#110508", border: "1px solid #2a1018", borderRadius: "12px", padding: "1.5rem" }}
            >
              <p style={{ fontSize: "11px", color: "#6b4050", fontFamily: "monospace", marginBottom: "0.5rem" }}>
                {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </p>
              <h2 style={{ fontSize: "1.1rem", fontWeight: 500, color: "#f0e6ea", marginBottom: "0.5rem" }}>
                {post.title}
              </h2>
              <p style={{ fontSize: "0.875rem", color: "#a08890", lineHeight: 1.6, marginBottom: "1rem" }}>
                {post.description}
              </p>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {post.tags.map((t) => (
                  <span key={t} style={tag}>{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}