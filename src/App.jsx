import React from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import { Mail, Github, Linkedin, ArrowRight, ExternalLink } from 'lucide-react';
import './App.css';

// --- Data has been updated with featured images and slugs ---
const professionalSummary = "Enthusiastic and detail-oriented systems programmer with a strong foundation in operating systems, C programming, and Linux internals. Strong problem-solving skills and a commitment to writing performant and maintainable low-level code.";

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
  programmingLanguages: ["C", "C++", "Python", "JavaScript"],
  frameworksAndLibraries: ["TensorFlow", "Scikit-learn", "Keras", "NumPy", "Pandas", "Matplotlib"],
  databasesAndTools: ["Git", "Linux", "GitHub", "RHEL", "Embedded Systems", "IoT", "Arduino", "MongoDB", "AWS Cloud"]
};

const education = [
  { degree: "Master of Computer Applications (MCA)", school: "Zeal institute, Pune", detail: "CGPA: 8.5/10 (FY)", year: "2024-present" },
  { degree: "B.Sc. (CPS, PHY, MATH)", school: "Jijamata Mahavidyalaya, Buldhana", detail: "79.6%", year: "2019–2022" },
  { degree: "HSC (Class XII)", school: "Dyanganga Junior College, Jafrabad", detail: "Percentage: 66.2%", year: "2019" },
  { degree: "SSC (Class X)", school: "Bharat Vidyalaya, Buldhana", detail: "Percentage: 71.6%", year: "2017" }
];

const achievements = {
  technical: [
    { event: "C Programming Certification", result: "120 Hours | 5 Projects", org: "MKCL" },
    { event: "Problem Solving Certification", result: "", org: "HackerRank" },
    { event: "JavaScript Certification", result: "", org: "HackerRank" },
    { event: "Fundamentals of RHEL", result: "85%", org: "Coursera, RED HAT" },
    { event: "Hands-on Intro to Linux Commands and Sell Scripting", result: "95.66%", org: "Coursera, IBM" },
    { event: "Interfacing With Arduino", result: "100%", org: "Coursera, University of California, Irvine" },
    { event: "Intro to Iot and Embedded Systems", result: "87.12%", org: "Coursera, University of California, Irvine" },
    { event: "Programming for the IOTs Project", result: "100%", org: "Coursera, University of California, Irvine" },
    { event: "Arduino Platform and C Programming", result: "99.37%", org: "Coursera, University of California, Irvine" },
    { event: "Raspberry Pi Platform and Python Programming for the Raspberry Pi", result: "95.37%", org: "Coursera, University of California, Irvine" },
    { event: "Interfacing with Raspberry Pi", result: "95.37%", org: "Coursera, University of California, Irvine" },
    { event: "Interfacing With Arduino", result: "100%", org: "Coursera, University of California, Irvine" },
    { event: "Byte Battle Competition", result: "1st Runner-up", org: "Zeal Institutes" },
    { event: "Code Battle Competition", result: "1st Runner-up", org: "Suryadutta College" },
    { event: "Technocrat Competition", result: "1st Runner-up", org: "Suryadutta College" },
  ],
  softSkills: [
    { event: "Intro to Psychology", result: "Coursera, Yale University", org: "90%" },
    { event: "Classical Sociological Theory", result: "Coursera, University of Amsterdam", org: "82.43%" },
    { event: "Tech-Quiz Competition", result: "1st Place", org: "Zeal Institutes" },
  ]
};

const publications = [
  {
    title: "Biasness of Artificial Intelligence and Its Effect on Decision Making",
    authors: "Prajwal Rajiv Korde, Rupali S. Kalekar",
    journal: "ABDC Journal",
    year: "2025",
    link: "https://zenodo.org/records/17064178",
    description: "This paper examines the mechanisms of AI bias and its impact on human choices. Through a qualitative analysis of prominent case studies and existing literature, this research demonstrates how biases originating in Data, Algorithms, and User Interaction create a reinforcing feedback loop."
  }
];

const blogs = [
  {
    id: 1,
    slug: "the-power-of-linux",
    title: "The Power of Linux",
    date: "03 July 2025",
    featuredImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    snippet: "Linux isn't just an operating system; it's the quiet engine powering a huge chunk of our digital world.",
    content: "From the servers that host your favourite websites to the Android phone in your pocket, Linux is everywhere. What makes it so special? It's open-source, which means anyone can look at the code, modify it, and share it. This has led to a super stable, secure, and flexible system that tech giants and hobbyists alike swear by. Getting comfortable with the command line in Linux is like unlocking a superpower for any developer."
  },
  {
    id: 2,
    slug: "getting-started-with-c",
    title: "Getting Started with C Programming",
    date: "07 July 2025",
    featuredImage: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    snippet: "C is like the granddaddy of programming languages, and for good reason. It's fast, powerful, and teaches you what's really happening inside your computer.",
    content: "If you want to understand how memory works and how to write super-efficient code, learning C is a must. It's the language that built operating systems like Linux and Windows. It might seem a bit tricky at first because you have to manage memory yourself, but mastering C gives you a rock-solid foundation that makes learning other languages a breeze."
  },
  {
    id: 3,
    slug: "exploring-cpp",
    title: "Exploring C++: The Next Step",
    date: "03 August 2025",
    featuredImage: "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    snippet: "Think of C++ as C's smarter, more sophisticated younger sibling. It takes all the power of C and adds modern features like object-oriented programming.",
    content: "With C++, you can build complex applications like game engines, high-frequency trading systems, and powerful desktop software. It introduces concepts like classes and objects, which help you organise your code in a much cleaner way. Plus, the Standard Template Library (STL) is a treasure trove of ready-to-use tools that can save you heaps of time."
  },
  {
    id: 4,
    slug: "linux-kernel-peek",
    title: "A Peek into the Linux Kernel",
    date: "12 August 2025",
    featuredImage: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    snippet: "The Linux kernel is the heart of the operating system, the ultimate manager of your computer's resources.",
    content: "Ever wonder how your computer can run so many programs at once? That's the kernel's job. It handles everything from managing memory and scheduling tasks to talking to your hardware. Diving into the kernel code can be a bit daunting, but it's an amazing way to understand the inner workings of a computer. Contributing to the kernel is a huge achievement for any systems programmer."
  },
  {
    id: 5,
    slug: "c-memory-magic",
    title: "C's Memory Magic: A Deep Dive",
    date: "29 August 2025",
    featuredImage: "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    snippet: "In C, you're the boss of memory. This means you have the power to make your programs incredibly fast, but it also comes with great responsibility.",
    content: "Understanding pointers, malloc, and free is key to becoming a C wizard. When you manage memory yourself, you can avoid a lot of the overhead that comes with other languages. But be warned, one small mistake can lead to memory leaks or segmentation faults. It's a thrilling challenge that really sharpens your programming skills."
  },
  {
    id: 6,
    slug: "modern-cpp",
    title: "Modern C++: Beyond the Basics",
    date: "09 September 2025",
    featuredImage: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    snippet: "C++ has come a long way. The latest versions have introduced some amazing features that make the language safer, faster, and more fun to use.",
    content: "Features like smart pointers, lambda expressions, and the range-based for loop have made modern C++ a joy to work with. You can write code that is both highly performant and easy to read. If you've only ever used older versions of C++, you're in for a treat. It's a great time to rediscover this powerful language."
  }
];

// --- Maintenance Page Component ---
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

// --- Blog List Page Component ---
function BlogListPage() {
  return (
    <div className="portfolio-container">
      <header className="main-header">
        <nav>
          <div className="logo">PK</div>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="blog-list" className="content-section">
          <h2>My Thoughts on Tech</h2>
          <p className="blog-intro">Here, I share some of my learnings and musings on the tech that excites me. From the intricate dance of kernel operations to the elegant logic of modern C++, this is my space to explore and explain.</p>
          <div className="blog-list-grid">
            {blogs.map((post) => (
              <Link to={`/blog/${post.slug}`} className="blog-list-card" key={post.id}>
                <img src={post.featuredImage} alt={post.title} className="blog-list-image" />
                <div className="blog-list-content">
                  <h3>{post.title}</h3>
                  <p className="blog-date">{post.date}</p>
                  <p>{post.snippet}</p>
                  <span className="read-more">
                    Read More <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <footer className="main-footer">
        <p>&copy; {new Date().getFullYear()} Prajwal Korde. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

// --- Single Blog Post Page Component ---
function BlogPostPage() {
  const { slug } = useParams();
  const post = blogs.find((p) => p.slug === slug);

  if (!post) {
    return <div>Post not found!</div>;
  }

  return (
    <div className="portfolio-container">
      <header className="main-header">
        <nav>
          <div className="logo">PK</div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <article className="blog-post">
          <h1>{post.title}</h1>
          <p className="blog-date">{post.date}</p>
          <img src={post.featuredImage} alt={post.title} className="blog-post-image" />
          <div className="blog-post-content">
            <p>{post.content}</p>
          </div>
        </article>
      </main>
      <footer className="main-footer">
        <p>&copy; {new Date().getFullYear()} Prajwal Korde. All Rights Reserved.</p>
      </footer>
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
            <li><a href="#publications">Publications</a></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* All your sections (Hero, About, etc.) go here */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>Prajwal_Rajiv_Korde();</h1>
            <p className="subtitle">Aspiring Linux kernel developer with a strong foundation in C and OS concepts, eager to grow by contributing to real-world kernel projects.</p>
            <a href="#projects" className="cta-button">
              View My Work <ArrowRight size={20} />
            </a>
          </div>
        </section>

        <section id="about" className="content-section">
          <h2>printf("About Me");</h2>
          <p className="professional-summary">{professionalSummary}</p>
        </section>

        <section id="projects" className="content-section">
          <h2>My Projects \n</h2>
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
            <h2>Skills & Expertise &#123;</h2>
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
                    <h3>Tools & Other</h3>
                     <div className="skills-container">
                        {skills.databasesAndTools.map((skill, i) => (
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
            </div>
        </section>

        <section id="publications" className="content-section">
          <h2>Publications</h2>
          <div className="publication-card">
            <h3>{publications[0].title}</h3>
            <p className="publication-authors">{publications[0].authors}</p>
            <p className="publication-journal">{publications[0].journal}, {publications[0].year}</p>
            <p>{publications[0].description}</p>
            <a href={publications[0].link} target="_blank" rel="noopener noreferrer" className="cta-button">
              Read Paper <ExternalLink size={20} />
            </a>
          </div>
        </section>

        <section id="credentials" className="content-section">
          <div className="credentials-grid">
            <div className="credentials-column">
              <h3>#include Education</h3>
              {education.map((edu, i) => (
                <div className="credential-item" key={i}>
                  <strong>{edu.degree}</strong>
                  <p>{edu.school}</p>
                  <span>{edu.detail} | {edu.year}</span>
                </div>
              ))}
            </div>
            <div className="credentials-column">
              <h3>#include Achievements & Certifications</h3>
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

        <section id="blog-preview" className="content-section">
          <h2>From the Blog</h2>
          <div className="project-grid">
            {blogs.slice(0, 3).map((post) => (
              <Link to={`/blog/${post.slug}`} className="blog-preview-card" key={post.id}>
                <img src={post.featuredImage} alt={post.title} className="blog-preview-image" />
                <div className="blog-preview-content">
                  <h3>{post.title}</h3>
                  <p className="blog-date">{post.date}</p>
                  <p>{post.snippet}</p>
                  <span className="read-more">
                    Read More <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="contact" className="content-section">
          <h2>Get In Touch</h2>
          <p>I'm open to new opportunities and collaborations. Feel free to reach out!</p>
          <div className="contact-links">
            <a href="mailto:prajwalrk3071@gmail.com" className="contact-link">
              <Mail size={20} /> prajwalrk3071@gmail.com
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
      <Route path="/blog" element={<BlogListPage />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
    </Routes>
  );
}

export default App;
