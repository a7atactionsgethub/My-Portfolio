import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="brand-badge">
          ARIAN GRAND / UX DESIGNER
        </div>
      </div>
      <div className="nav-right">
        <Link to="/" className="nav-btn">HOME</Link>
        <Link to="/3d-art" className="nav-btn">3D ART</Link>
        <a href="#contact" className="nav-btn">CONTACT</a>
      </div>
    </nav>
  );
};

export default Navbar;