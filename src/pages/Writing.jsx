import React from 'react';
import { BookOpen, PenTool, Type, Feather, ArrowLeft, ScrollText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Writing = () => {
  const pieces = [
    { title: 'The Future of Digital Ethics', category: 'Essay', excerpt: 'Exploring the intersection of AI and human creativity...' },
    { title: 'Designing for the Void', category: 'Perspective', excerpt: 'On the minimalist aesthetic in modern interface design...' },
    { title: 'Creative Coding Chronicle', category: 'Blog', excerpt: 'Monthly insights into the world of generative art...' }
  ];

  return (
    <div className="app-wrapper fade-in subpage-layout">
      <header className="subpage-header">
        <Link to="/" className="back-btn-float">
          <ArrowLeft size={20} />
          <span>Back Home</span>
        </Link>
        <div className="brand-badge subpage-badge">
          WRITING / THOUGHTS
        </div>
      </header>

      <main className="bento-grid">
        <div className="bento-col col-1">
          <div className="bento-card hero-card subpage-hero">
            <div className="hero-top-bg writing-bg"></div>
            <div className="hero-content">
              <h1 className="hero-title">Creative <br/>Perspectives</h1>
              <p className="bio-text">Articulating complex ideas through structured narratives. Essays on technology, design philosophy, and the creative process.</p>
            </div>
          </div>
          <div className="bento-card stats-card">
             <div className="card-header"><h3 className="section-title">Topics</h3></div>
             <div className="skill-blocks-inline">
                <div className="skill-tag">Tech Ethics</div>
                <div className="skill-tag">Design Theory</div>
                <div className="skill-tag">Short Stories</div>
             </div>
          </div>
        </div>

        <div className="bento-col col-2">
          {pieces.map((piece, i) => (
            <div key={i} className="bento-card project-card writing-piece">
               <div className="card-header">
                  <span className="badge">{piece.category}</span>
               </div>
               <div className="art-info">
                  <h3>{piece.title}</h3>
                  <p className="art-desc">{piece.excerpt}</p>
                  <Link to="#" className="read-more">Read Entire Piece →</Link>
               </div>
            </div>
          ))}
        </div>

        <div className="bento-col col-3">
           <div className="bento-card highlight-card">
              <ScrollText size={32} className="accent-icon" />
              <h3>Currently working on a book about visual narratives in game design.</h3>
           </div>
           <div className="bento-card newsletter-box">
              <h3>Subscribe to my newsletter</h3>
              <p>Weekly thoughts on design and tech.</p>
              <div className="fake-input">email@example.com</div>
           </div>
        </div>
      </main>
    </div>
  );
};

export default Writing;
