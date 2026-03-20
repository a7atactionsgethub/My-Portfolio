import React from 'react';
import { TerminalSquare, Code as CodeIcon, Cpu, Globe, Database, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Coding = () => {
  const projects = [
    { name: 'aim-reaction-web', tech: 'React / JS', link: 'https://github.com/a7atactionsgethub/aim-reaction-web' },
    { name: 'F1-live-telemetry', tech: 'Python', link: 'https://github.com/a7atactionsgethub/F1-live-telemetry' },
    { name: 'letter-writing', tech: 'JavaScript', link: 'https://github.com/a7atactionsgethub/letter-writing' }
  ];

  return (
    <div className="art-page-wrapper">
      <nav className="art-page-nav">
        <Link to="/" className="back-link">← BACK HOME</Link>
        <h1>CODING</h1>
      </nav>

      <div className="art-grid coding-grid">
        {projects.map((project, i) => (
          <a key={i} href={project.link} target="_blank" rel="noopener noreferrer" className="art-item-card git-card">
            <div className="art-preview code-placeholder">
              <TerminalSquare size={40} className="placeholder-icon" />
            </div>
            <div className="art-info">
              <h3>{project.name}</h3>
              <p className="art-tech">{project.tech}</p>
              <p className="art-desc">View Repository →</p>
            </div>
          </a>
        ))}
      </div>

      <div className="tech-stack-section">
        <h2>TECH STACK</h2>
        <div className="tech-pills">
          <div className="tech-pill"><CodeIcon size={16} /> Javascript</div>
          <div className="tech-pill"><Globe size={16} /> React</div>
          <div className="tech-pill"><Cpu size={16} /> Python</div>
          <div className="tech-pill"><Database size={16} /> SQL</div>
          <div className="tech-pill"><Smartphone size={16} /> Flutter</div>
        </div>
      </div>
    </div>
  );
};

export default Coding;
