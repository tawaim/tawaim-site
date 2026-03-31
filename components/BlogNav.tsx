"use client";
import { useEffect, useState } from "react";

interface Post {
  slug: string;
  title: string;
  date: string;
}

interface BlogNavProps {
  posts: Post[];
  activeSlug?: string;
}

export default function BlogNav({ posts, activeSlug }: BlogNavProps) {
  const [active, setActive] = useState(activeSlug ?? posts[0]?.slug ?? "");

  useEffect(() => {
    if (activeSlug) return; // on post page, don't use IntersectionObserver

    const observers: IntersectionObserver[] = [];

    posts.forEach(({ slug }) => {
      const el = document.getElementById(slug);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(slug);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [posts, activeSlug]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, slug: string) => {
    if (activeSlug) return; // on post page, let links navigate normally
    e.preventDefault();
    const el = document.getElementById(slug);
    if (!el) return;

    setActive(slug);

    const navHeight = 56;
    const offset = 32;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  if (posts.length === 0) return null;

  return (
    <nav style={{
      position: "sticky",
      top: "80px",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      paddingTop: "0.25rem",
      width: "160px",
    }}>
      {posts.map(({ slug, title, date }) => (
        <a
          key={slug}
          href={activeSlug ? `/blog/${slug}` : `#${slug}`}
          onClick={(e) => handleClick(e, slug)}
          style={{
            textDecoration: "none",
            padding: "6px 10px",
            borderRadius: "6px",
            borderLeft: `2px solid ${active === slug ? "#c0385e" : "#2a1018"}`,
            transition: "all 0.2s",
          }}
        >
          <p style={{
            fontFamily: "monospace",
            fontSize: "10px",
            color: active === slug ? "#9b3a5a" : "#3a1828",
            marginBottom: "2px",
            transition: "color 0.2s",
          }}>
            {new Date(date + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
          </p>
          <p style={{
            fontFamily: "monospace",
            fontSize: "11px",
            color: active === slug ? "#c0385e" : "#6b4050",
            lineHeight: 1.3,
            transition: "color 0.2s",
          }}>
            {title}
          </p>
        </a>
      ))}
    </nav>
  );
}