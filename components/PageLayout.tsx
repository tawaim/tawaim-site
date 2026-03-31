interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <main style={{ minHeight: "100vh", background: "#0d0608", padding: "6rem 2.5rem" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {children}
      </div>
    </main>
  );
}