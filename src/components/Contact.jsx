import React from 'react';
import { Twitter, Dribbble, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bento-card social-card no-padding">
      <div className="social-links">
        <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
          <Twitter size={20} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
          <Dribbble size={20} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
          <Instagram size={20} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20.5S17 16 17 9.5a5 5 0 0 0-10 0c0 6.5 5 11 5 11z"/>
            <circle cx="12" cy="9.5" r="1.5"/>
          </svg>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
          <Linkedin size={20} />
        </a>
      </div>
    </div>
  );
};

export default Contact;