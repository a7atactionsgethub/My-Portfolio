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

      <style jsx="true">{`
        .about-stack {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .bio-box {
          background: transparent;
          border: none;
        }

        .bio-header {
          margin-bottom: 0.5rem;
        }

        .badge-blue {
          background: #E8EFFF;
          color: var(--accent-blue);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          display: inline-block;
        }

        .bio-content-wrapper {
          border: 1px solid var(--accent-blue);
          padding: 1rem;
          background: var(--card-bg);
        }

        .bio-text {
          color: var(--accent-blue);
          font-size: 0.85rem;
          line-height: 1.4;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

export default About;
