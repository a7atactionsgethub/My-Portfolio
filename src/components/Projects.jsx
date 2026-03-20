import React from 'react';
import { Download, Github, Box, Palette, TerminalSquare, MonitorPlay } from 'lucide-react';
import { Link } from 'react-router-dom'; // <-- import Link

const Projects = ({ column }) => {
  if (column === 1) {
    // IT / GitHub Repositories
    const repos = [
      { name: 'aim-reaction-web', tech: 'HTML/JS', desc: 'Aim training web page calculating reaction time', url: 'https://github.com/a7atactionsgethub/aim-reaction-web' },
      { name: 'F1-live-telemetry', tech: 'Python', desc: 'Real-time Formula 1 data visualization', url: 'https://github.com/a7atactionsgethub/F1-live-telemetry' },
      { name: 'letter-writing', tech: 'JavaScript', desc: 'Program for creating structured letters', url: 'https://github.com/a7atactionsgethub/letter-writing' }
    ];

    return (
      <Link to="/coding" style={{ textDecoration: 'none' }}>
        <div className="bento-card project-card github-feed">
          <div className="card-header pb-4">
            <div className="header-title">
              <TerminalSquare size={18} />
              <h4>Coding</h4>
            </div>
            <span className="badge">GitHub</span>
          </div>
          
          <div className="repo-list">
            {repos.map((repo, i) => (
              <div key={i} className="repo-item">
                <div className="repo-top">
                  <h5>{repo.name}</h5>
                  <span className="lang-dot">{repo.tech}</span>
                </div>
                <p>{repo.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Link>
    );
  }

  if (column === 2) {
    // Graphic Design Showcase
    return (
      <Link to="/graphic-design" style={{ textDecoration: 'none' }}>
        <div className="bento-card project-card design-mockup">
          <div className="card-overlay">
            <div className="header-title white">
              <Palette size={18} />
              <h4>Graphic Design</h4>
            </div>
            <p className="subtitle">Visual Identity & UI</p>
          </div>
          
          <div className="aesthetic-grid">
             <div className="g-box g-1"></div>
             <div className="g-box g-2"></div>
             <div className="g-box g-3">
                <div className="g-circle"></div>
             </div>
          </div>
        </div>
      </Link>
    );
  }

  if (column === 4) {
    // Video Editing Showcase
    return (
      <Link to="/video-editing" style={{ textDecoration: 'none' }}>
        <div className="bento-card project-card video-mockup">
          <div className="card-overlay">
            <div className="header-title white">
              <MonitorPlay size={18} />
              <h4>Video Editing</h4>
            </div>
            <p className="subtitle">Vlogs & Comms</p>
          </div>
          <div className="video-visualizer">
            <div className="bar b1"></div>
            <div className="bar b2"></div>
            <div className="bar b3"></div>
            <div className="bar b4"></div>
          </div>
        </div>
      </Link>
    );
  }

  // Column 3 - 3D Art Showcase (now clickable)
  return (
    <div className="col-3-projects">
      <Link to="/3d-art" style={{ textDecoration: 'none' }}>
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
      </Link>
    </div>
  );
};

export default Projects;