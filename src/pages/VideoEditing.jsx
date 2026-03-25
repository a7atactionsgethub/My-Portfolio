import React from 'react';
import { MonitorPlay, Scissors, Sparkles, Wand2, ArrowLeft, Clapperboard, Film } from 'lucide-react';
import { Link } from 'react-router-dom';

const VideoEditing = () => {
  const projects = [
    { title: 'Cinematic Travel Vlog', tech: 'Adobe Premiere Pro', desc: 'Dynamic cuts and color grading' },
    { title: 'Product Commercial', tech: 'After Effects', desc: 'Motion graphics and visual effects' },
    { title: 'YouTube Content', tech: 'DaVinci Resolve', desc: 'Engaging edits for digital creators' }
  ];

  return (
    <div className="app-wrapper fade-in subpage-layout">
      <header className="subpage-header">
        <Link to="/" className="back-btn-float">
          <ArrowLeft size={20} />
          <span>Back Home</span>
        </Link>
        <div className="brand-badge subpage-badge">
          VIDEO EDITING / POST PRODUCTION
        </div>
      </header>

      <main className="bento-grid">
        <div className="bento-col col-1">
          <div className="bento-card hero-card subpage-hero">
            <div className="hero-top-bg video-bg"></div>
            <div className="hero-content">
              <h1 className="hero-title">Motion <br/>Direction</h1>
              <p className="bio-text">Turning raw footage into compelling stories. Specialized in high-energy edits, cinematic color grading, and seamless transitions.</p>
            </div>
          </div>
          <div className="bento-card workflow-card">
            <div className="card-header"><h3 className="section-title">Techniques</h3></div>
            <div className="skill-blocks-inline">
              <div className="skill-tag">Color Grading</div>
              <div className="skill-tag">Sound Design</div>
              <div className="skill-tag">Motion Graphics</div>
              <div className="skill-tag">VFX</div>
            </div>
          </div>
        </div>

        <div className="bento-col col-2">
          <div className="bento-card project-card video-card-large">
            <div className="art-preview video-placeholder-main">
              <Clapperboard size={60} className="placeholder-icon" />
              <div className="play-button-overlay"><MonitorPlay size={40} /></div>
            </div>
            <div className="art-info">
              <h3>{projects[0].title}</h3>
              <p className="art-tech">{projects[0].tech}</p>
              <p className="art-desc">{projects[0].desc}</p>
            </div>
          </div>
        </div>

        <div className="bento-col col-3">
          {projects.slice(1).map((project, i) => (
            <div key={i} className="bento-card project-card">
              <div className="art-preview video-placeholder">
                <Film size={30} className="placeholder-icon" />
              </div>
              <div className="art-info">
                <h3>{project.title}</h3>
                <p className="art-tech">{project.tech}</p>
              </div>
            </div>
          ))}
          <div className="bento-card expertise-card contact-cta">
             <h3>Let's Edit Your Story</h3>
             <a href="mailto:contact@aswin.com" className="email-link">aswin@example.com</a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VideoEditing;
