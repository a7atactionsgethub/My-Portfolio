import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-msg">
            <h2 className="footer-heading">Have an idea?<br />Let's build it.</h2>
            <p className="footer-sub">Currently available for freelance projects and exciting opportunities. Let's create something premium and impactful. Ready to bring your vision to life.</p>
            <a href="mailto:aswin.a72010@gmail.com" className="email-link">
              aswin.a72010@gmail.com
            </a>
          </div>

          <div className="footer-socials">
            <h3>Connect</h3>
            <div className="socials-list">
              <a href="#" className="social-link">LinkedIn <ArrowUpRight size={16} /></a>
              <a href="https://github.com/a7atactionsgethub" className="social-link">GitHub <ArrowUpRight size={16} /></a>
              <a href="https://www.instagram.com/a7_visuals/" className="social-link">Instagram <ArrowUpRight size={16} /></a>
              <a href="https://x.com/A7Visualideas" className="social-link">Twitter <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="logo-brand">ASWIN A<span style={{ color: '#3b82f6' }}>.</span></div>
          <p>© {new Date().getFullYear()} Aswin. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
