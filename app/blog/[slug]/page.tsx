import { getAllPosts, getPost } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);

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
        <a href="/blog" style={{ fontFamily: "monospace", fontSize: "13px", color: "#6b4050", textDecoration: "none", display: "inline-block", marginBottom: "2rem" }}>
          ← Back to blog
        </a>
        <p style={{ fontSize: "11px", color: "#6b4050", fontFamily: "monospace", marginBottom: "0.75rem" }}>
          {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>
        <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", fontWeight: 500, color: "#f0e6ea", marginBottom: "1rem" }}>
          {post.title}
        </h1>
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "3rem" }}>
          {post.tags.map((t) => (
            <span key={t} style={tag}>{t}</span>
          ))}
        </div>
        <div style={{ color: "#a08890", lineHeight: 1.8, fontSize: "1rem" }}>
          <MDXRemote source={post.content} />
        </div>
      </div>
    </main>
  );
}