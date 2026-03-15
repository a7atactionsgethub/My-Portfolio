import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const About = () => {
  return (
    <div className="about-stack">
      <div className="bento-card no-padding bio-box">
        <div className="bio-header">
          <span className="badge-blue">Profile</span>
        </div>
        <div className="bio-content-wrapper">
          <p className="bio-text">
            Hi, I'm an IT Student, Graphic Designer, and 3D Artist. 
            My passion is bridging the gap between deep technical implementation 
            and stunning visual design. I build full-stack applications, 
            render high-fidelity 3D environments, and design interfaces 
            that don't just solve problems, but create delight. 
            My goal is to make digital tools feel more natural.
          </p>
        </div>
      </div>

      <button className="btn-secondary">
        View My Work <ArrowUpRight size={18} />
      </button>
    </div>
  );
};

export default About;