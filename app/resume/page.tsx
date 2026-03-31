export default function ResumePage() {
  const sectionTitle: React.CSSProperties = {
    fontSize: "11px",
    letterSpacing: "0.15em",
    color: "#9b3a5a",
    textTransform: "uppercase",
    fontFamily: "monospace",
    marginBottom: "1.25rem",
    marginTop: "3rem",
  };

  const card: React.CSSProperties = {
    background: "#110508",
    border: "1px solid #2a1018",
    borderRadius: "12px",
    padding: "1.5rem",
    marginBottom: "1rem",
  };

  const jobTitle: React.CSSProperties = {
    fontSize: "1rem",
    fontWeight: 500,
    color: "#f0e6ea",
    margin: 0,
  };

  const jobMeta: React.CSSProperties = {
    fontSize: "0.8rem",
    color: "#9b3a5a",
    fontFamily: "monospace",
    marginTop: "4px",
    marginBottom: "1rem",
  };

  const bullet: React.CSSProperties = {
    fontSize: "0.875rem",
    color: "#a08890",
    lineHeight: 1.7,
    marginBottom: "0.4rem",
    paddingLeft: "1rem",
    borderLeft: "2px solid #2a1018",
  };

  const tag: React.CSSProperties = {
    fontSize: "0.75rem",
    background: "#1f0a12",
    color: "#c0385e",
    padding: "3px 10px",
    borderRadius: "999px",
    fontFamily: "monospace",
  };

  const linkBtn: React.CSSProperties = {
    display: "inline-block",
    padding: "8px 20px",
    borderRadius: "8px",
    fontFamily: "monospace",
    fontSize: "13px",
    textDecoration: "none",
    cursor: "pointer",
  };

  return (
    <main style={{ minHeight: "100vh", background: "#0d0608", padding: "6rem 2.5rem" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>

        <p style={{ fontSize: "12px", letterSpacing: "0.15em", color: "#9b3a5a", textTransform: "uppercase", fontFamily: "monospace", marginBottom: "1rem" }}>
          Resume
        </p>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 500, color: "#f0e6ea", marginBottom: "0.5rem" }}>
          Thomas Williams
        </h1>
        <p style={{ color: "#a08890", fontFamily: "monospace", fontSize: "0.875rem", marginBottom: "0.25rem" }}>
          (678) 654-4028 · thomas@tawaim.com
        </p>
        <div style={{ display: "flex", gap: "12px", marginTop: "1.5rem" }}>
          <a href="/ThomasWilliamsResume.pdf" download style={{ ...linkBtn, background: "#c0385e", color: "#f5dce4" }}>
            Download PDF
          </a>
          <a href="https://github.com/tawaim" target="_blank" rel="noopener noreferrer" style={{ ...linkBtn, border: "1px solid #7a2440", color: "#c0385e" }}>
            GitHub
          </a>
        </div>

        <p style={sectionTitle}>Experience</p>

        <div style={card}>
          <h3 style={jobTitle}>AI Application Engineer II</h3>
          <p style={jobMeta}>N2N Services Inc. (LightLeap.ai) · Duluth, GA · Dec 2024 – Present</p>
          <p style={bullet}>Architected scalable fraud detection pipelines using AWS Step Functions, Lambda, and EventBridge, reducing processing time by 65%</p>
          <p style={bullet}>Designed intelligent agent systems integrating LLM APIs into production web applications, enhancing fraud detection accuracy</p>
          <p style={bullet}>Built and optimized RESTful APIs with JWT authentication and async processing for secure third-party integrations</p>
          <p style={bullet}>Developed Python backend services and Lambda functions with JSONata/pandas data transformation pipelines across multi-tenant environments</p>
          <p style={bullet}>Built ETL workflows using boto3 for DynamoDB/S3 with PostgreSQL/RDS analysis and multi-step data validation</p>
          <p style={bullet}>Engineered full-stack features across React/Vue.js frontends and Python backends, optimizing SQL queries to reduce database load by 48%</p>
        </div>

        <div style={card}>
          <h3 style={jobTitle}>Software Engineer</h3>
          <p style={jobMeta}>CORL Technologies · Atlanta, GA · Aug 2021 – Nov 2024</p>
          <p style={bullet}>Designed scalable backend systems using Python, C#, and JavaScript with best practices for performance and fault tolerance</p>
          <p style={bullet}>Built an LLM API to automate data reuse, reducing processing overhead and enhancing system efficiency</p>
          <p style={bullet}>Implemented event-driven architecture using AWS Lambda, Step Functions, and S3 for reliable data processing</p>
          <p style={bullet}>Analyzed logs with Datadog and Snowflake to monitor system health and optimize customer-facing applications</p>
          <p style={bullet}>Managed Agile sprint cycles for a 3-person team using Jira; conducted code reviews and maintained technical documentation</p>
        </div>

        <div style={card}>
          <h3 style={jobTitle}>Web Extraction Developer</h3>
          <p style={jobMeta}>VITAL4 · Marietta, GA · Mar 2021 – Aug 2021</p>
          <p style={bullet}>Developed C# programs to transform unstructured website data into a structured relational database</p>
        </div>

        <div style={card}>
          <h3 style={jobTitle}>Web Developer</h3>
          <p style={jobMeta}>Quick Relief Solutions · Norcross, GA · Oct 2020 – Mar 2021</p>
          <p style={bullet}>Developed a customer intake website using Bootstrap, HTML, CSS, and JavaScript</p>
          <p style={bullet}>Implemented Firebase Functions for contact form functionality</p>
        </div>

        <p style={sectionTitle}>Skills</p>
        <div style={{ ...card, display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            { label: "Languages", items: ["Python", "C#", "JavaScript", "TypeScript", "Java", "SQL", "HTML", "CSS"] },
            { label: "Frameworks", items: ["React.js", "Vue.js", "Node.js", "AWS Lambda", "S3", "Step Functions", "EventBridge", "DynamoDB", "Azure", "MongoDB", "PostgreSQL"] },
            { label: "AI / ML", items: ["LLM APIs", "Claude", "GPT-4", "Gemini", "JSONata", "pandas", "boto3"] },
            { label: "Tools", items: ["Git", "Cursor", "Datadog", "Snowflake", "DBeaver", "Jira", "Azure DevOps"] },
          ].map(({ label, items }) => (
            <div key={label}>
              <p style={{ fontSize: "0.75rem", color: "#9b3a5a", fontFamily: "monospace", marginBottom: "0.5rem" }}>{label}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {items.map((item) => (
                  <span key={item} style={tag}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p style={sectionTitle}>Personal Projects</p>
        <div style={card}>
          <p style={bullet}>Scalable Gaming Statistics Tracker — React.js/Tailwind frontend displaying real-time player stats via RESTful APIs</p>
          <p style={bullet}>Medieval Chess AI — C# and Unity game with depth-first-search AI decision-making</p>
          <p style={bullet}>Compiler — implemented a scanner, parser, and interpreter from scratch</p>
        </div>

        <p style={sectionTitle}>Education</p>
        <div style={card}>
          <h3 style={jobTitle}>Bachelor of Science in Computer Science</h3>
          <p style={jobMeta}>Kennesaw State University · Kennesaw, GA · May 2021</p>
        </div>

      </div>
    </main>
  );
}