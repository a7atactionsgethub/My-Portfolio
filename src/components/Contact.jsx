import React from 'react';
import { Twitter, Dribbble, Instagram, Linkedin, Figma } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bento-card social-card no-padding">
      <div className="social-links">
        <a href="#" className="social-icon">
          <Twitter size={20} />
        </a>
        <a href="#" className="social-icon">
          <Dribbble size={20} />
        </a>
        <a href="#" className="social-icon">
          <Instagram size={20} />
        </a>
        <a href="#" className="social-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20.5S17 16 17 9.5a5 5 0 0 0-10 0c0 6.5 5 11 5 11z"/>
            <circle cx="12" cy="9.5" r="1.5"/>
          </svg>
        </a>
        <a href="#" className="social-icon">
          <Linkedin size={20} />
        </a>
      </div>

      <style jsx="true">{`
        .social-card {
          margin-top: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1.5rem !important;
        }

        .social-links {
          display: flex;
          justify-content: space-between;
          width: 100%;
          max-width: 300px;
        }

        .social-icon {
          color: var(--text-primary);
          transition: var(--transition);
          opacity: 0.8;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .social-icon:hover {
          opacity: 1;
          transform: translateY(-2px);
          color: var(--accent-blue);
        }
      `}</style>
    </div>
  );
};

export default Contact;
