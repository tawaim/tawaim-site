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
          {new Date(post.date + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>
        <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", fontWeight: 500, color: "#f0e6ea", marginBottom: "1rem" }}>
          {post.title}
        </h1>
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "3rem" }}>
          {post.tags.map((t) => (
            <span key={t} style={tag}>{t}</span>
          ))}
        </div>
        <style>{`
          .prose p { margin-bottom: 1.25rem; color: #a08890; line-height: 1.8; font-size: 1rem; }
          .prose h2 { color: #f0e6ea; font-size: 1.4rem; font-weight: 500; margin: 2rem 0 1rem; }
          .prose h3 { color: #f0e6ea; font-size: 1.1rem; font-weight: 500; margin: 1.5rem 0 0.75rem; }
          .prose ul { padding-left: 2rem; margin-bottom: 1.25rem; list-style-type: disc; }
          .prose ol { padding-left: 2rem; margin-bottom: 1.25rem; }
          .prose li { margin-bottom: 0.4rem; color: #a08890; line-height: 1.8; }
          .prose strong { color: #f0e6ea; }
          .prose em { color: #c0385e; font-style: italic; }
          .prose code { background: #1f0a12; color: #c0385e; padding: 2px 6px; border-radius: 4px; font-size: 0.875rem; }
          .prose pre { background: #110508; border: 1px solid #2a1018; padding: 1rem; border-radius: 8px; overflow-x: auto; margin-bottom: 1.25rem; }
        `}</style>
        <div className="prose">
          <MDXRemote source={post.content} />
        </div>
      </div>
    </main>
  );
}