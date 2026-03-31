"use client";
import { useEffect, useState } from "react";

const sections = [
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
];

export default function ResumeNav() {
  const [active, setActive] = useState("experience");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    setActive(id);

    const navHeight = 56;
    const offset = 32;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight - offset;

    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <nav style={{
      position: "sticky",
      top: "80px",
      display: "flex",
      flexDirection: "column",
      gap: "4px",
      paddingTop: "0.25rem",
    }}>
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={(e) => handleClick(e, id)}
          style={{
            fontFamily: "monospace",
            fontSize: "12px",
            letterSpacing: "0.08em",
            textDecoration: "none",
            padding: "5px 10px",
            borderRadius: "6px",
            borderLeft: `2px solid ${active === id ? "#c0385e" : "#2a1018"}`,
            color: active === id ? "#c0385e" : "#6b4050",
            transition: "all 0.2s",
          }}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}