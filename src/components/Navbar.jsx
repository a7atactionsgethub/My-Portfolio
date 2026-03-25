import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav-container ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-inner">
        <NavLink to="/" className="logo-brand">
          ASWIN<span style={{ color: '#3b82f6' }}>.</span>
        </NavLink>
        <div className="nav-menu">
           <NavLink to="/" className="nav-link">Home</NavLink>
           <a href="#projects" className="nav-link">Projects</a>
           <a href="#3d-art" className="nav-link">3D Art</a>
           <a href="#skills" className="nav-link">Skills</a>
           <a href="#contact" className="nav-link">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;