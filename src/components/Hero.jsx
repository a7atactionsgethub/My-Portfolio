import React from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../assets/profile.jpg';  // Adjust path if needed

const Hero = () => {
  return (
    <div className="bento-card no-padding hero-card">
      <div className="hero-top-bg">
        {/* Abstract gradient background to match the design */}
      </div>
      
      <div className="hero-content">
        <div className="avatar">
          <img src={profilePic} alt="Aswin" />
        </div>
        
        <div className="role-tags">
          <Link to="/graphic-design" className="pill dark">Photoshop</Link>
          <Link to="/graphic-design" className="pill outline">Graphic Designer</Link>
          <Link to="/video-editing" className="pill outline">Video Editor</Link>
          <Link to="/coding" className="pill outline">Coder</Link>
          <Link to="/3d-art" className="pill outline">3D Artist</Link>
        </div>

        <h1 className="hero-title">
          Crafting Digital<br/>
          Experiences That<br/>
          Feel Effortless
        </h1>
      </div>
    </div>
  );
};

export default Hero;