import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/about.css';

const About = () => {
  return (
    <div className="about-col2">
      <div className="bento-card bio-card-proper">
        {/* The "Profile" badge attached to the card boundary */}
        <div className="bio-card-tab">Profile</div>
        <p className="bio-text-content">
          Hi, I'm an IT Student, Graphic Designer, and 3D Artist. My passion is 
          bridging the gap between deep technical implementation and stunning visual 
          design. I build full-stack applications, render high-fidelity 3D 
          environments, and design interfaces that don't just solve problems, but 
          create delight. My goal is to make digital tools feel more natural.
        </p>
      </div>

      <Link to="/graphic-design" className="view-work-bar" style={{ textDecoration: 'none' }}>
        <span>VIEW MY WORK</span>
        <ArrowRight size={16} />
      </Link>
    </div>
  );
};

export default About;