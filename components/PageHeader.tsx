interface PageHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function PageHeader({ label, title, subtitle }: PageHeaderProps) {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <p style={{ fontSize: "12px", letterSpacing: "0.15em", color: "#9b3a5a", textTransform: "uppercase", fontFamily: "monospace", marginBottom: "1rem" }}>
        {label}
      </p>
      <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 500, color: "#f0e6ea", marginBottom: subtitle ? "0.5rem" : "0" }}>
        {title}
      </h1>
      {subtitle && (
        <p style={{ color: "#a08890", fontSize: "1rem", margin: 0 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}