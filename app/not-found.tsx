import Link from "next/link";

const linkBase: React.CSSProperties = {
  padding: "10px 24px",
  borderRadius: "8px",
  fontFamily: "monospace",
  fontSize: "14px",
  letterSpacing: "0.05em",
  textDecoration: "none",
};

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0d0608",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "6rem 2.5rem",
      }}
    >
      <p style={{ fontSize: "12px", letterSpacing: "0.15em", color: "#9b3a5a", textTransform: "uppercase", fontFamily: "monospace", marginBottom: "1rem" }}>
        Error 404
      </p>
      <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 500, color: "#f0e6ea", lineHeight: 1.1, marginBottom: "1rem" }}>
        Page not found<span style={{ color: "#c0385e" }}>.</span>
      </h1>
      <p style={{ color: "#a08890", fontSize: "1.1rem", maxWidth: "420px", lineHeight: 1.7, marginBottom: "2rem" }}>
        This page doesn&apos;t exist — it may have moved, or never existed at all.
      </p>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
        <Link href="/" style={{ ...linkBase, background: "#c0385e", color: "#f5dce4" }}>
          Back home
        </Link>
        <Link href="/blog" style={{ ...linkBase, background: "transparent", color: "#c0385e", border: "1.5px solid #7a2440" }}>
          Read the blog
        </Link>
      </div>
    </main>
  );
}
