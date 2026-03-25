import React from 'react';
import { Terminal, Palette, MonitorPlay, Box, Coffee, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/projects.css';
import escapePng from '../assets/3dassets/Escape.png';

const Projects = ({ column }) => {
  // Column 1: Coding repos
  if (column === 1) {
    const repos = [
      { name: 'aim-reaction-web', tech: 'HTML/CSS', desc: 'Bio tracking and race calculation reaction time.' },
      { name: 'F1-live-telemetry', tech: 'Python', desc: 'Real-time Formula 1 data visualization.' },
      { name: 'letter-writing', tech: 'JavaScript', desc: 'Program for creating structured letters.' }
    ];

    return (
      <div className="bento-card coding-card-retro">
        <div className="section-header-micro">
          <Terminal size={14} color="var(--accent-retro)" />
          <h3 className="section-title-retro">Coding</h3>
          <span className="coding-badge"><Coffee size={10} /> Coffee</span>
        </div>
        <div className="repo-stack-retro">
          {repos.map((repo, idx) => (
            <a key={idx} href="#" target="_blank" rel="noreferrer" className="repo-item-retro">
              <div className="repo-top">
                <span className="repo-name">{repo.name}</span>
                <span className="repo-tech-tag">{repo.tech}</span>
              </div>
              <p className="repo-desc-micro">{repo.desc}</p>
            </a>
          ))}
        </div>
      </div>
    );
  }

  // Column 2: Graphic Design card
  if (column === 2) {
    return (
      <Link to="/graphic-design" className="bento-card project-card-v3 design-brand">
        <div className="card-overlay-v3">
          <Palette size={18} />
          <h3 className="card-title-v3">Graphic Design</h3>
          <p className="card-sub-v3">Visual Identity & UI</p>
        </div>
      </Link>
    );
  }

  // Column 3: 3D Art card with render image
  if (column === 3) {
    return (
      <Link to="/3d-art" className="bento-card project-card-3d no-padding">
        <div className="card-3d-content">
          <div className="card-3d-text">
            <Box size={16} color="var(--accent-retro)" />
            <h3 className="card-title-3d">3D Art</h3>
            <p className="card-sub-3d">Modeling & Renders</p>
          </div>
          <div className="card-3d-image">
            <img src={escapePng} alt="3D Render" />
          </div>
        </div>
      </Link>
    );
  }

  // Column 4: Video Editing / Vlogs & Comms
  if (column === 4) {
    return (
      <Link to="/video-editing" className="bento-card project-card-v3 video-brand">
        <div className="video-content-card">
          <h3 className="card-title-v3">Vlogs & Comms</h3>
          <div className="video-bars">
            <div className="v-bar vb1"></div>
            <div className="v-bar vb2"></div>
            <div className="v-bar vb3"></div>
            <div className="v-bar vb4"></div>
            <div className="v-bar vb5"></div>
          </div>
        </div>
      </Link>
    );
  }

  return null;
};

export default Projects;