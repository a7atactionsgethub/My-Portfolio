import React from 'react';
import { Palette, Layers, PenTool, Layout, Image as ImageIcon, Box } from 'lucide-react';
import { Link } from 'react-router-dom';

const GraphicDesign = () => {
  const designs = [
    { name: 'Branding Identity', tool: 'Adobe Photoshop', desc: 'Logo and visual identity for modern startups' },
    { name: 'UI Social Media', tool: 'Illustrator', desc: 'High-engagement social media post designs' },
    { name: 'Poster Design', tool: 'Photoshop', desc: 'Cinematic poster concepts and typography' },
    { name: 'App Interface', tool: 'Figma', desc: 'Clean and modern mobile application layouts' }
  ];

  return (
    <div className="art-page-wrapper">
      <nav className="art-page-nav">
        <Link to="/" className="back-link">← BACK HOME</Link>
        <h1>GRAPHIC DESIGN</h1>
      </nav>

      <div className="art-grid">
        {designs.map((design, i) => (
          <div key={i} className="art-item-card">
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

      <div className="skillset-visualizer">
        <h2>EXPERTISE</h2>
        <div className="skill-blocks">
          <div className="skill-block">
            <PenTool size={20} />
            <span>Vector Illustration</span>
          </div>
          <div className="skill-block">
            <Layers size={20} />
            <span>Photo Manipulation</span>
          </div>
          <div className="skill-block">
            <Layout size={20} />
            <span>Layout Design</span>
          </div>
          <div className="skill-block">
            <Palette size={20} />
            <span>Color Theory</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesign;
