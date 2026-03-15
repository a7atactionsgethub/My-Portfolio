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

        <style jsx="true">{`
          .github-feed {
            background: var(--card-bg);
            flex: 1;
            display: flex;
            flex-direction: column;
          }
          .header-title {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--text-primary);
          }
          .card-header.pb-4 { margin-bottom: 1rem; display: flex; justify-content: space-between; align-items: center; }
          .badge { font-size: 0.7rem; background: var(--bg-color); padding: 0.2rem 0.5rem; border-radius: 4px; border: 1px solid var(--border-color); }
          .repo-list { display: flex; flex-direction: column; gap: 0.8rem; }
          .repo-item { padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; transition: var(--transition); text-decoration: none; color: inherit; }
          .repo-item:hover { border-color: var(--accent-blue); background: #F8FAFF; }
          .repo-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem; }
          .repo-item h5 { font-size: 0.9rem; font-weight: 600; color: var(--accent-blue); }
          .lang-dot { font-size: 0.7rem; color: #666; font-weight: 500; }
          .repo-item p { font-size: 0.8rem; color: var(--text-secondary); line-height: 1.4; }
        `}</style>
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

        <style jsx="true">{`
          .design-mockup {
            background: linear-gradient(135deg, #1A1A1A 0%, #363636 100%);
            min-height: 400px;
            padding: 0;
            position: relative;
            overflow: hidden;
            flex: 1;
          }
          .card-overlay {
            position: absolute;
            top: 1.5rem;
            left: 1.5rem;
            z-index: 10;
          }
          .header-title.white {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: white;
            margin-bottom: 0.2rem;
          }
          .header-title h4 { color: white; margin: 0; }
          .subtitle { color: rgba(255,255,255,0.7); font-size: 0.8rem; }
          
          .aesthetic-grid {
            position: absolute;
            bottom: -10%;
            right: -10%;
            width: 90%;
            height: 80%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 1rem;
            transform: rotate(-5deg);
          }
          .g-box { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 12px; backdrop-filter: blur(5px); }
          .g-1 { grid-column: span 2; background: linear-gradient(90deg, #FF6B6B 0%, #FF8E53 100%); opacity: 0.8; }
          .g-2 { background: #E8EFFF; opacity: 0.9; }
          .g-3 { display: flex; align-items: center; justify-content: center; }
          .g-circle { width: 60%; height: 60%; border-radius: 50%; border: 4px solid var(--accent-gold); }
        `}</style>
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

      <style jsx="true">{`
        .col-3-projects {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          flex: 1;
        }

        .trid-mockup {
          background: #E5E5E5;
          min-height: 250px;
          position: relative;
          overflow: hidden;
          padding: 0;
          flex: 1;
        }

        .card-overlay { position: absolute; top: 1.5rem; left: 1.5rem; z-index: 10; }
        .header-title.dark { display: flex; align-items: center; gap: 0.5rem; color: #333; margin-bottom: 0.2rem; }
        .header-title.dark h4 { color: #333; margin: 0; }
        .subtitle.dark { color: #666; font-size: 0.8rem; }

        .shapes-container {
          position: absolute;
          bottom: 2rem;
          right: 2rem;
          width: 70%;
          height: 60%;
        }

        .shape { position: absolute; background: white; box-shadow: 10px 10px 30px rgba(0,0,0,0.1), inset -5px -5px 15px rgba(0,0,0,0.05); }
        
        .cube {
          width: 80px; height: 80px; bottom: 0; right: 0;
          background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%);
          border-radius: 8px;
          transform: rotate(15deg);
          z-index: 2;
        }
        
        .sphere {
          width: 100px; height: 100px; border-radius: 50%; bottom: 30px; right: 60px;
          background: radial-gradient(circle at 30% 30%, #fff, #d0d0d0);
          z-index: 1;
        }
        
        .cylinder {
          width: 50px; height: 120px; border-radius: 25px; top: 0; right: 20px;
          background: linear-gradient(90deg, #e0e0e0 0%, #fff 40%, #c0c0c0 100%);
          transform: rotate(-25deg);
          z-index: 0;
        }
      `}</style>
    </div>
  );
};

export default Projects;
