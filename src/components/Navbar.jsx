import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="brand-badge">
          Aswin A
        </div>
      </div>
      
      <div className="nav-right">
        <a href="#portfolio" className="nav-btn">PORTFOLIO</a>
        <a href="#about" className="nav-btn">ABOUT</a>
        <a href="#contact" className="nav-btn">CONTACT</a>
      </div>
    </nav>
  );
};

export default Navbar;