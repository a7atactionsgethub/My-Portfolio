import React from 'react';
import { Download, Github, Box, Palette, TerminalSquare } from 'lucide-react';

const Projects = ({ column }) => {
  if (column === 1) {
    // IT / GitHub Repositories
    const repos = [
      { name: 'aim-reaction-web', tech: 'HTML/JS', desc: 'Aim training web page calculating reaction time', url: 'https://github.com/a7atactionsgethub/aim-reaction-web' },
      { name: 'F1-live-telemetry', tech: 'Python', desc: 'Real-time Formula 1 data visualization', url: 'https://github.com/a7atactionsgethub/F1-live-telemetry' },
      { name: 'letter-writing', tech: 'JavaScript', desc: 'Program for creating structured letters', url: 'https://github.com/a7atactionsgethub/letter-writing' }
    ];

    return (
      <div className="bento-card project-card github-feed">
        <div className="card-header pb-4">
          <div className="header-title">
            <TerminalSquare size={18} />
            <h4>Development</h4>
          </div>
          <span className="badge">GitHub</span>
        </div>
        
        <div className="repo-list">
          {repos.map((repo, i) => (
            <a key={i} href={repo.url} target="_blank" rel="noopener noreferrer" className="repo-item">
              <div className="repo-top">
                <h5>{repo.name}</h5>
                <span className="lang-dot">{repo.tech}</span>
              </div>
              <p>{repo.desc}</p>
            </a>
          ))}
        </div>
      </div>
    );
  }

  if (column === 2) {
    // Graphic Design Showcase
    return (
      <div className="bento-card project-card design-mockup">
        <div className="card-overlay">
          <div className="header-title white">
            <Palette size={18} />
            <h4>Graphic Design</h4>
          </div>
          <p className="subtitle">Visual Identity & UI</p>
        </div>
        
        <div className="aesthetic-grid">
           {/* Abstract minimalist blocks meant to represent design work */}
           <div className="g-box g-1"></div>
           <div className="g-box g-2"></div>
           <div className="g-box g-3">
              <div className="g-circle"></div>
           </div>
        </div>
      </div>
    );
  }

  // Column 3 - 3D Art Showcase
  return (
    <div className="col-3-projects">
      <div className="bento-card trid-mockup">
        <div className="card-overlay">
          <div className="header-title dark">
            <Box size={18} />
            <h4>3D Art</h4>
          </div>
          <p className="subtitle dark">Modeling & Renders</p>
        </div>
        
        {/* Abstract representation of 3D forms */}
        <div className="shapes-container">
          <div className="shape cube"></div>
          <div className="shape sphere"></div>
          <div className="shape cylinder"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;