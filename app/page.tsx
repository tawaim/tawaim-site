"use client";
import { useEffect, useRef } from "react";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&";
    const fontSize = 14;
    const colors = ["#c0385e", "#8b2040", "#6b1530", "#e05070", "#ff6090"];

    interface Col {
      y: number;
      speed: number;
      color: string;
      char: string;
    }

    let cols: Col[] = [];
    let animId: number;

    function resize() {
      canvas!.width = canvas!.offsetWidth;
      canvas!.height = canvas!.offsetHeight;
      const numCols = Math.floor(canvas!.width / fontSize);
      cols = Array.from({ length: numCols }, () => ({
        y: Math.random() * -canvas!.height,
        speed: 1 + Math.random() * 2.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        char: chars[Math.floor(Math.random() * chars.length)],
      }));
    }

    function draw() {
      ctx!.fillStyle = "rgba(13,6,8,0.15)";
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);
      ctx!.font = `${fontSize}px monospace`;
      cols.forEach((col, i) => {
        if (Math.random() > 0.95)
          col.char = chars[Math.floor(Math.random() * chars.length)];
        ctx!.fillStyle = col.color;
        ctx!.globalAlpha = 0.75;
        ctx!.fillText(col.char, i * fontSize, col.y);
        ctx!.globalAlpha = 1;
        col.y += col.speed;
        if (col.y > canvas!.height) {
          col.y = Math.random() * -200;
          col.speed = 1 + Math.random() * 2.5;
          col.color = colors[Math.floor(Math.random() * colors.length)];
        }
      });
      animId = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const linkBase: React.CSSProperties = {
    padding: "10px 24px",
    borderRadius: "8px",
    fontFamily: "monospace",
    fontSize: "14px",
    letterSpacing: "0.05em",
    textDecoration: "none",
  };

  return (
    <main style={{ position: "relative", minHeight: "100vh", background: "#0d0608", overflow: "hidden" }}>
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "100vh",
          padding: "6rem 2.5rem",
        }}
      >
        <p style={{ fontSize: "12px", letterSpacing: "0.15em", color: "#9b3a5a", textTransform: "uppercase", fontFamily: "monospace", marginBottom: "1rem" }}>
          Software Developer
        </p>
        <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 500, color: "#f0e6ea", lineHeight: 1.1, marginBottom: "1rem" }}>
          Hi, I&apos;m Thomas<span style={{ color: "#c0385e" }}>.</span>
        </h1>
        <p style={{ color: "#a08890", fontSize: "1.1rem", maxWidth: "480px", lineHeight: 1.7, marginBottom: "2rem" }}>
          I am trying to become a better developer. Come along for the ride!
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a href="/projects" style={{ ...linkBase, background: "#c0385e", color: "#f5dce4" }}>
            View Projects
          </a>
          <a href="/blog" style={{ ...linkBase, background: "transparent", color: "#c0385e", border: "1.5px solid #7a2440" }}>
            Read Blog
          </a>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "96px",
          background: "linear-gradient(transparent, #0d0608)",
          zIndex: 10,
          pointerEvents: "none",
        }}
      />
    </main>
  );
}