import PageHeader from "@/components/PageHeader";
import PageLayout from "@/components/PageLayout";
import ResumeNav from "@/components/ResumeNav";

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
      <div style={{ display: "flex", gap: "3rem", maxWidth: "1100px", margin: "0 auto" }}>

        {/* Main content */}
        <div style={{ flex: 1, maxWidth: "800px" }}>
          <PageHeader label="Resume" title="Thomas Williams" subtitle="thomas@tawaim.com" />

          <div style={{ display: "flex", gap: "12px", marginTop: "-1.5rem", marginBottom: "3rem" }}>
            <a href="/ThomasWilliamsResume.pdf" download style={{ ...linkBtn, background: "#c0385e", color: "#f5dce4" }}>
              Download PDF
            </a>
            <a href="https://github.com/tawaim" target="_blank" rel="noopener noreferrer" style={{ ...linkBtn, border: "1px solid #7a2440", color: "#c0385e" }}>
              GitHub
            </a>
          </div>

          <div id="experience">
            <p style={sectionTitle}>Experience</p>
            <div style={card}>
              <h3 style={jobTitle}>AI Application Engineer II</h3>
              <p style={jobMeta}>N2N Services Inc. (LightLeap.ai) · Duluth, GA · Dec 2024 – Present</p>
              <p style={bullet}>Architected LightLeap Agents, an AI agent runtime exposing structured, discoverable LLM tool catalogs over REST; designed capability manifests with typed parameters, schemas, and routing hints powering full OpenAPI generation and automatic SDK emission for LLM tool-calling workflows</p>
              <p style={bullet}>Built agent invocation layer (invoke/stream) across isolated multi-tenant ECS agent spaces with shared auth, LLM routing, rate limiting, caching, and error handling across all tool calls</p>
              <p style={bullet}>Developed async Python backend services and Lambda functions with JSONata/pandas pipelines; built ETL workflows using boto3 for DynamoDB/S3 with PostgreSQL/RDS and multi-step data validation</p>
              <p style={bullet}>Built and optimized RESTful APIs with JWT/OAuth authentication integrating LLM APIs (Claude, GPT-4) via structured tool calling into production fraud detection workflows; reduced pipeline processing time by 65% and database load by 48%</p>
              <p style={bullet}>Collaborated with product managers and data scientists to translate fraud detection requirements into configurable risk scoring algorithms and automated data cleaning utilities</p>
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
          </div>

          <div id="skills">
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
          </div>

          <div id="projects">
            <p style={sectionTitle}>Personal Projects</p>
            <div style={card}>
              <p style={bullet}>Scalable Gaming Statistics Tracker — React.js/Tailwind frontend displaying real-time player stats via RESTful APIs</p>
              <p style={bullet}>Medieval Chess AI — C# and Unity game with depth-first-search AI decision-making</p>
              <p style={bullet}>Compiler — implemented a scanner, parser, and interpreter from scratch</p>
            </div>
          </div>

          <div id="education">
            <p style={sectionTitle}>Education</p>
            <div style={card}>
              <h3 style={jobTitle}>Bachelor of Science in Computer Science</h3>
              <p style={jobMeta}>Kennesaw State University · Kennesaw, GA · May 2021</p>
            </div>
          </div>
        </div>

        <div className="resume-sidenav" style={{ width: "120px", flexShrink: 0 }}>
          <ResumeNav />
        </div>

      </div>
    </main>
  );
}