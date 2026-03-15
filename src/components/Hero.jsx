import React from 'react';
import profilePic from '../assets/profile.jpg';  // Adjust path if needed

const Hero = () => {
  return (
    <div className="bento-card no-padding hero-card">
      <div className="hero-top-bg">
        {/* Abstract gradient background to match the design */}
      </div>
      
      <div className="hero-content">
        <div className="avatar">
          <img src={profilePic} alt="Arian" />
        </div>
        
        <div className="role-tags">
          <span className="pill dark">IT Student</span>
          <span className="pill outline">Graphic Designer</span>
          <span className="pill outline">3D Artist</span>
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