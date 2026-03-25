import React from 'react';
import { TerminalSquare, Code as CodeIcon, Cpu, Globe, Database, Smartphone, ArrowLeft, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Coding = () => {
  const projects = [
    { name: 'aim-reaction-web', tech: 'React / JS', desc: 'Performance-focused reaction trainer' },
    { name: 'F1-live-telemetry', tech: 'Python', desc: 'Real-time data visualization' },
    { name: 'letter-writing', tech: 'JavaScript', desc: 'Automated document processing' }
  ];

  return (
    <div className="app-wrapper fade-in subpage-layout">
      <header className="subpage-header">
        <Link to="/" className="back-btn-float">
          <ArrowLeft size={20} />
          <span>Back Home</span>
        </Link>
        <div className="brand-badge subpage-badge">
          DEVELOPMENT / SOFTWARE
        </div>
      </header>

      <main className="bento-grid">
        <div className="bento-col col-1">
          <div className="bento-card hero-card subpage-hero">
            <div className="hero-top-bg code-bg"></div>
            <div className="hero-content">
              <h1 className="hero-title">System <br/>Architecture</h1>
              <p className="bio-text">Building scalable solutions and interactive web experiences. Focused on clean code, performance, and user-centric architecture.</p>
            </div>
          </div>
          <div className="bento-card tech-stack-card">
             <div className="card-header"><h3 className="section-title">Languages</h3></div>
             <div className="skill-blocks-inline">
                <div className="skill-tag">JavaScript</div>
                <div className="skill-tag">Python</div>
                <div className="skill-tag">C++</div>
                <div className="skill-tag">Rust</div>
             </div>
          </div>
        </div>

        <div className="bento-col col-2">
          {projects.map((project, i) => (
            <div key={i} className="bento-card project-card clickable-repo">
              <div className="art-info">
                <div className="repo-header">
                   <TerminalSquare size={18} />
                   <h3>{project.name}</h3>
                </div>
                <p className="art-tech">{project.tech}</p>
                <p className="art-desc">{project.desc}</p>
                <div className="repo-footer">
                   <Github size={14} /> View on GitHub
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bento-col col-3">
          <div className="bento-card expertise-card">
            <div className="card-header"><h3 className="section-title">Frameworks</h3></div>
            <div className="categories-stack">
               <div className="skill-tag">React / Next.js</div>
               <div className="skill-tag">Tailwind CSS</div>
               <div className="skill-tag">Node.js</div>
               <div className="skill-tag">PostgreSQL</div>
            </div>
          </div>
          <div className="bento-card social-card bg-dark">
             <p className="cta-text">Check out my full GitHub profile for more open-source work.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Coding;
