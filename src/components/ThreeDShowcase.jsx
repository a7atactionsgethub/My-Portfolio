import React from 'react';
import { Box, ArrowRight } from 'lucide-react';
import manhole from '../assets/3dassets/ManHole.png';
import escape from '../assets/3dassets/Escape.png';
import '../styles/threed.css';

const ThreeDShowcase = () => {
  return (
    <section id="3d-art" className="section-spacer threed-section">
      <div className="container">
        <div className="threed-header">
          <div>
            <h2 className="section-title">Digital<br/>Dimensions</h2>
            <p className="section-subtitle">Crafting immersive 3D environments and high-fidelity assets. Expanding the boundaries of visual storytelling through depth and light.</p>
          </div>
          <a href="/3d-art" className="btn-secondary">
            Full Gallery <ArrowRight size={18} />
          </a>
        </div>

        <div className="threed-grid">
          <div className="threed-featured">
            <div className="threed-card">
              <img src={escape} alt="Escape 3D Render" />
              <div className="threed-info">
                <h3>Escape Sequence</h3>
                <p>Blender • Cycles Render</p>
              </div>
            </div>
          </div>
          
          <div className="threed-secondary">
            <div className="threed-card">
              <img src={manhole} alt="Manhole 3D Model" />
              <div className="threed-info">
                <h3>Industrial Assets</h3>
                <p>Modeling & Texturing</p>
              </div>
            </div>
            
            <div className="threed-card abstract-card">
              <div className="abstract-content">
                <Box size={40} className="abstract-icon" />
                <h3>Explore Realities</h3>
                <p>Lighting • Shading • Composition</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeDShowcase;
