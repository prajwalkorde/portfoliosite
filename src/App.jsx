import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Mail, Phone, Github, Linkedin, ArrowRight, ExternalLink } from 'lucide-react';
import './App.css';

// --- Data remains the same ---
const professionalSummary = "Dynamic and detail-oriented Software Developer with a strong foundation in machine learning and full-stack web development. Proven ability to lead projects from concept to deployment, delivering robust and efficient applications. Passionate about leveraging data to build impactful solutions and continuously expanding technical skill sets.";

const projects = [
  {
    title: "Share-King",
    year: "2025",
    description: "Developed an interactive stock price prediction app with machine learning and real-time graphing. Managed the full stack, from backend data pipelines to frontend model integration and a user-friendly web interface.",
    tech: ["Python", "Streamlit", "Scikit-learn", "yfinance", "Pandas", "Plotly"],
    codeLink: "https://github.com/prajwalkorde?tab=repositories"
  },
  {
    title: "MASK-VISION",
    year: "2024",
    description: "Developed an AI-based facemask detection system with real-time compliance monitoring and alerts to enhance safety. Managed the end-to-end project, including data preprocessing, model training, and deployment.",
    tech: ["Python", "Tensorflow", "Keras", "OpenCV", "Tkinter", "Matplotlib"],
    codeLink: "https://github.com/prajwalkorde?tab=repositories"
  },
  {
    title: "E-Sell",
    year: "2024",
    description: "Designed and developed a comprehensive e-commerce platform using pure HTML, CSS, and JavaScript, enabling a local business to successfully migrate from an offline to an online platform.",
    tech: ["HTML", "CSS", "JavaScript", "E-commerce"],
    codeLink: "https://github.com/prajwalkorde?tab=repositories"
  }
];

const skills = {
  programmingLanguages: ["Python", "JavaScript", "C", "C++"],
  frameworksAndLibraries: ["TensorFlow", "Scikit-learn", "Keras", "NumPy", "Pandas", "Matplotlib"],
  databasesAndTools: ["MongoDB", "Git", "GitHub", "AWS Cloud", "Linux"]
};

const education = [
  { degree: "Master of Computer Applications (MCA)", school: "Zeal institute, Pune", detail: "CGPA: 8.5/10", year: "2024" },
  { degree: "B.Sc. (CPS, PHY, MATH)", school: "Jijamata Mahavidyalaya, Buldhana", detail: "CGPA: 8.3/10", year: "2019–2022" },
  { degree: "HSC (Class XII)", school: "Dyanganga Junior College, Jafrabad", detail: "Percentage: 66.2%", year: "2019" },
  { degree: "SSC (Class X)", school: "Bharat Vidyalaya, Buldhana", detail: "Percentage: 71.6%", year: "2017" }
];

const achievements = {
  technical: [
    { event: "Byte Battle Competition", result: "1st Runner-up", org: "Zeal Institutes" },
    { event: "Code Battle Competition", result: "1st Runner-up", org: "Suryadutta College" },
    { event: "Technocrat Competition", result: "1st Runner-up", org: "Suryadutta College" },
    { event: "JavaScript Certification", result: "HackerRank", org: "" },
    { event: "Problem Solving Certification", result: "HackerRank", org: "" },
    { event: "C Programming Certification", result: "MKCL", org: "120 Hours | 5 Projects" },
  ],
  softSkills: [
    { event: "Tech-Quiz Competition", result: "1st Place", org: "Zeal Institutes" },
    { event: "Intro to Psychology", result: "Coursera, Yale", org: "6-Week Course | 90%" }
  ]
};

// --- New Maintenance Page Component ---
function Maintenance() {
  return (
    <div className="maintenance-container">
      <h1>Under Maintenance</h1>
      <p>This project is currently undergoing updates. We apologize for the inconvenience.</p>
      <Link to="/" className="cta-button">
        Go Back Home
      </Link>
    </div>
  );
}

// --- Your main portfolio page component ---
function Portfolio() {
  return (
    <div className="portfolio-container">
      <header className="main-header">
        <nav>
          <div className="logo">PK</div>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* All your sections (Hero, About, etc.) go here */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>Prajwal Rajiv Korde</h1>
            <p className="subtitle">Software Developer with a passion for Machine Learning and creating impactful, data-driven web applications.</p>
            <a href="#projects" className="cta-button">
              View My Work <ArrowRight size={20} />
            </a>
          </div>
        </section>

        <section id="about" className="content-section">
          <h2>About Me</h2>
          <p className="professional-summary">{professionalSummary}</p>
        </section>

        <section id="projects" className="content-section">
          <h2>My Projects</h2>
          <div className="project-grid">
            {projects.map((proj, idx) => (
              <div className="project-card" key={idx}>
                <div className="project-header">
                  <h3>{proj.title}</h3>
                  <span className="project-year">{proj.year}</span>
                </div>
                <p>{proj.description}</p>
                <div className="tech-tags">
                  {proj.tech.map((t, i) => <span key={i}>{t}</span>)}
                </div>
                <div className="project-links">
                  <a href={proj.codeLink} target="_blank" rel="noopener noreferrer">
                    <Github size={18} /> Code
                  </a>
                  {/* Updated link to the maintenance page */}
                  <a href="/maintenance" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="content-section">
            <h2>Skills & Expertise</h2>
            <div className="skills-grid">
                <div className="skill-category">
                    <h3>Programming Languages</h3>
                    <div className="skills-container">
                        {skills.programmingLanguages.map((skill, i) => (
                            <div className="skill-pill" key={i}>{skill}</div>
                        ))}
                    </div>
                </div>
                <div className="skill-category">
                    <h3>Frameworks & Libraries</h3>
                    <div className="skills-container">
                        {skills.frameworksAndLibraries.map((skill, i) => (
                            <div className="skill-pill" key={i}>{skill}</div>
                        ))}
                    </div>
                </div>
                <div className="skill-category">
                    <h3>Databases & Tools</h3>
                     <div className="skills-container">
                        {skills.databasesAndTools.map((skill, i) => (
                            <div className="skill-pill" key={i}>{skill}</div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        <section id="credentials" className="content-section">
          <div className="credentials-grid">
            <div className="credentials-column">
              <h3>Education</h3>
              {education.map((edu, i) => (
                <div className="credential-item" key={i}>
                  <strong>{edu.degree}</strong>
                  <p>{edu.school}</p>
                  <span>{edu.detail} | {edu.year}</span>
                </div>
              ))}
            </div>
            <div className="credentials-column">
              <h3>Achievements & Certifications</h3>
              <h4>Technical</h4>
              {achievements.technical.map((ach, i) => (
                 <div className="credential-item" key={i}>
                  <strong>{ach.event}</strong>
                  <p>{ach.result}{ach.org && ` — ${ach.org}`}</p>
                </div>
              ))}
              <h4 className="sub-heading">Soft Skills</h4>
               {achievements.softSkills.map((ach, i) => (
                 <div className="credential-item" key={i}>
                  <strong>{ach.event}</strong>
                  <p>{ach.result}{ach.org && ` — ${ach.org}`}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="content-section">
          <h2>Get In Touch</h2>
          <p>I'm open to new opportunities and collaborations. Feel free to reach out!</p>
          <div className="contact-links">
            <a href="mailto:prajwalrk3071@gmail.com" className="contact-link">
              <Mail size={20} /> prajwalrk3071@gmail.com
            </a>
            <a href="tel:+918999773492" className="contact-link">
              <Phone size={20} /> +91 8999773492
            </a>
             <a href="https://github.com/prajwalkorde" target="_blank" rel="noopener noreferrer" className="contact-link">
              <Github size={20} /> prajwalkorde
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="contact-link">
              <Linkedin size={20} /> Prajwalkorde
            </a>
          </div>
        </section>
      </main>

      <footer className="main-footer">
        <p>&copy; {new Date().getFullYear()} Prajwal Korde. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

// --- Main App component to handle routing ---
function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/maintenance" element={<Maintenance />} />
    </Routes>
  );
}

export default App;