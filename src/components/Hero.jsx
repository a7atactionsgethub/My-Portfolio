import React from 'react';
import { ArrowRight } from 'lucide-react';
import '../styles/hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-roles">
            <span className="role-dot"></span> Full-Stack Developer
            <span className="role-divider">/</span> UI/UX Designer
            <span className="role-divider">/</span> 3D Artist
          </div>
          
          <h1 className="hero-display">
            Bridging logic &<br />
            <span className="hero-highlight">imagination.</span>
          </h1>
          
          <p className="hero-description">
            I craft premium digital experiences. By blending deep technical implementation with stunning visual design, I build tools and environments that feel seamless, intuitive, and alive.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;