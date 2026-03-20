import React from 'react';
import { Camera, Film, MonitorPlay, Scissors, Sparkles, Wand2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const VideoEditing = () => {
  const projects = [
    { title: 'Cinematic Travel Vlog', tech: 'Adobe Premiere Pro', desc: 'Dynamic cuts and color grading' },
    { title: 'Product Commercial', tech: 'After Effects', desc: 'Motion graphics and visual effects' },
    { title: 'YouTube Content', tech: 'DaVinci Resolve', desc: 'Engaging edits for digital creators' }
  ];

  return (
    <div className="art-page-wrapper">
      <nav className="art-page-nav">
        <Link to="/" className="back-link">← BACK HOME</Link>
        <h1>VIDEO EDITING</h1>
      </nav>

      <div className="art-grid">
        {projects.map((project, i) => (
          <div key={i} className="art-item-card">
            <div className="art-preview video-placeholder">
              <MonitorPlay size={40} className="placeholder-icon" />
              <div className="video-stats">
                <span>1080p</span>
                <span>60fps</span>
              </div>
            </div>
            <div className="art-info">
              <h3>{project.title}</h3>
              <p className="art-tech">{project.tech}</p>
              <p className="art-desc">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="workflow-section">
        <h2>WORKFLOW</h2>
        <div className="workflow-grid">
          <div className="workflow-step">
            <Scissors size={24} />
            <h4>Storyboarding</h4>
            <p>Planning the narrative flow and sequence of shots.</p>
          </div>
          <div className="workflow-step">
            <Sparkles size={24} />
            <h4>Color Grading</h4>
            <p>Enhancing the visual mood with cinematic color palettes.</p>
          </div>
          <div className="workflow-step">
            <Wand2 size={24} />
            <h4>Post-Production</h4>
            <p>Adding sound design, transitions, and final polish.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoEditing;
