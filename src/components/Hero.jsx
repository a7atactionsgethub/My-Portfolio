import React from 'react';

const Hero = () => {
  return (
    <div className="bento-card no-padding hero-card">
      <div className="hero-top-bg">
        {/* Abstract gradient background to match the design */}
      </div>
      
      <div className="hero-content">
        <div className="avatar">
          <img 
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" 
            alt="Arian" 
          />
        </div>
        
        <div className="role-tags">
          <span className="pill dark">IT Student</span>
          <span className="pill outline">Graphic Designer</span>
          <span className="pill outline">3D Artist</span>
        </div>

        <h1 className="hero-title">
          Crafting Digital<br/>
          Experiences That<br/>
          Feel Effortless
        </h1>
      </div>

      <style jsx="true">{`
        .hero-card {
          display: flex;
          flex-direction: column;
        }

        .hero-top-bg {
          height: 180px;
          background: linear-gradient(135deg, #FFDFD6 0%, #E2E2F8 50%, #C8E6FE 100%);
          width: 100%;
        }

        .hero-content {
          padding: 0 2rem 2.5rem 2rem;
          position: relative;
        }

        .avatar {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          border: 4px solid var(--card-bg);
          overflow: hidden;
          margin-top: -35px;
          margin-bottom: 1.5rem;
          background: var(--bg-color);
        }

        .avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .role-tags {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .pill {
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        .pill.dark {
          background: var(--text-primary);
          color: white;
        }

        .pill.outline {
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
        }

        .hero-title {
          font-size: 2.8rem;
          line-height: 1.05;
          font-weight: 500;
          letter-spacing: -0.03em;
        }

        @media (max-width: 1024px) {
          .hero-title {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
