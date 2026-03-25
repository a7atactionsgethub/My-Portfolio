import React from 'react';
import { Palette, Layers, PenTool, Layout, Image as ImageIcon, Box, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const GraphicDesign = () => {
  const designs = [
    { name: 'Branding Identity', tool: 'Photoshop', desc: 'Logo and visual identity for modern startups' },
    { name: 'UI Social Media', tool: 'Illustrator', desc: 'High-engagement social media post designs' },
    { name: 'Poster Design', tool: 'Photoshop', desc: 'Cinematic poster concepts and typography' },
    { name: 'App Interface', tool: 'Figma', desc: 'Clean and modern mobile application layouts' }
  ];

  return (
    <div className="app-wrapper fade-in subpage-layout">
      <header className="subpage-header">
        <Link to="/" className="back-btn-float">
          <ArrowLeft size={20} />
          <span>Back Home</span>
        </Link>
        <div className="brand-badge subpage-badge">
          GRAPHIC DESIGN / VISUAL ARTS
        </div>
      </header>

      <main className="bento-grid">
        <div className="bento-col col-1">
          <div className="bento-card hero-card subpage-hero">
            <div className="hero-top-bg design-bg"></div>
            <div className="hero-content">
              <h1 className="hero-title">Visual <br/>Storytelling</h1>
              <p className="bio-text">Creating impactful designs that communicate brand values and engage audiences through color, typography, and layout.</p>
            </div>
          </div>
          <div className="bento-card expertise-card">
             <div className="card-header"><h3 className="section-title">Tools of Trade</h3></div>
             <div className="skill-blocks-inline">
                <div className="skill-tag">Adobe Photoshop</div>
                <div className="skill-tag">Illustrator</div>
                <div className="skill-tag">Figma</div>
                <div className="skill-tag">InDesign</div>
             </div>
          </div>
        </div>

        <div className="bento-col col-2">
          {designs.slice(0, 2).map((design, i) => (
            <div key={i} className="bento-card project-card">
              <div className="art-preview design-placeholder">
                <ImageIcon size={40} className="placeholder-icon" />
              </div>
              <div className="art-info">
                <h3>{design.name}</h3>
                <p className="art-tech">{design.tool}</p>
                <p className="art-desc">{design.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bento-col col-3">
          {designs.slice(2).map((design, i) => (
            <div key={i} className="bento-card project-card">
              <div className="art-preview design-placeholder">
                <ImageIcon size={40} className="placeholder-icon" />
              </div>
              <div className="art-info">
                <h3>{design.name}</h3>
                <p className="art-tech">{design.tool}</p>
                <p className="art-desc">{design.desc}</p>
              </div>
            </div>
          ))}
          <div className="bento-card social-card bg-accent">
             <p className="cta-text">Looking for a custom design? <br/> Let's talk.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GraphicDesign;
