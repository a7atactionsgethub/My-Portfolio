import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="brand-badge">
          ARIAN GRAND / UX DESIGNER
        </div>
      </div>
      
      <div className="nav-right">
        <a href="#portfolio" className="nav-btn">PORTFOLIO</a>
        <a href="#about" className="nav-btn">ABOUT</a>
        <a href="#contact" className="nav-btn">CONTACT</a>
      </div>

      <style jsx="true">{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 0.5rem;
          margin-bottom: 0.5rem;
        }

        .brand-badge {
          border: 1px solid var(--border-color);
          background: var(--card-bg);
          padding: 0.6rem 1rem;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          color: var(--text-primary);
          text-transform: uppercase;
        }

        .nav-right {
          display: flex;
          gap: 0.5rem;
        }

        .nav-btn {
          border: 1px solid var(--border-color);
          background: var(--card-bg);
          padding: 0.6rem 1.2rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          transition: var(--transition);
        }

        .nav-btn:hover {
          border-color: var(--text-primary);
          color: var(--text-primary);
        }

        @media (max-width: 600px) {
          .navbar {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }
          .nav-right {
            width: 100%;
            justify-content: space-between;
          }
          .nav-btn {
            flex: 1;
            text-align: center;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
