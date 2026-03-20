import React from 'react';
import { Twitter, Dribbble, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="fixed-footer">
      <div className="footer-links">
        <a href="https://github.com/a7atactionsgethub" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <Github size={18} />
          <span>Github</span>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <Twitter size={18} />
          <span>Twitter</span>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <Instagram size={18} />
          <span>Instagram</span>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <Linkedin size={18} />
          <span>LinkedIn</span>
        </a>
      </div>
      <div className="footer-copyright">
        © 2026 ASWIN
      </div>
    </footer>
  );
};

export default Footer;
