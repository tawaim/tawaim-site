"use client";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLink: React.CSSProperties = {
    fontFamily: "monospace",
    fontSize: "13px",
    textDecoration: "none",
    letterSpacing: "0.05em",
    padding: "6px 12px",
    borderRadius: "6px",
  };

  const active: React.CSSProperties = {
    color: "#c0385e",
    background: "#1f0a12",
  };

  const inactive: React.CSSProperties = {
    color: "#6b4050",
  };

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/resume", label: "Resume" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(13,6,8,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #2a1018",
        padding: "0 2.5rem",
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <a href="/" style={{ ...navLink, textDecoration: "none", fontSize: "18px", fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.05em" }}>
        <span style={{ color: "#f0e6ea" }}>taw</span><span style={{ color: "#c0385e" }}>aim</span>
      </a>
      <div style={{ display: "flex", gap: "4px" }}>
        {links.slice(1).map(({ href, label }) => (
          <a
            key={href}
            href={href}
            style={{ ...navLink, ...(pathname === href ? active : inactive) }}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}