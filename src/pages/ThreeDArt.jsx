import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import manhole from '../assets/3dassets/ManHole.png';      // your real image
import escape from '../assets/3dassets/Escape.png';        // your second image

const ThreeDArt = () => {
  const artworks = [
    { 
      id: 1, 
      title: 'Manhole Cover', 
      description: '3D model / Texture', 
      image: manhole, 
      size: 'large' 
    },
    { 
      id: 2, 
      title: 'Escape', 
      description: 'Blender Render', 
      image: escape, 
      size: 'medium' 
    },
    { 
      id: 3, 
      title: 'Character Bust', 
      description: 'Sculpted in Blender', 
      image: 'https://images.unsplash.com/photo-1614935151651-0bea6507db88?w=400&h=500&fit=crop', 
      size: 'small' 
    },
    { 
      id: 4, 
      title: 'Environment Scene', 
      description: 'Cycles Render', 
      image: 'https://images.unsplash.com/photo-1637776877390-111e3e5b4d3b?w=600&h=300&fit=crop', 
      size: 'wide' 
    },
    { 
      id: 5, 
      title: 'Texture Study', 
      description: 'Substance Painter', 
      image: 'https://images.unsplash.com/photo-1637776877390-111e3e5b4d3b?w=400&h=400&fit=crop', 
      size: 'medium' 
    },
  ];

  const getSizeClass = (size) => {
    switch(size) {
      case 'large': return 'grid-large';
      case 'medium': return 'grid-medium';
      case 'small': return 'grid-small';
      case 'wide': return 'grid-wide';
      default: return 'grid-medium';
    }
  };

  return (
    <div className="app-wrapper fade-in">
      <div className="back-row">
        <Link to="/" className="back-button">
          <ArrowLeft size={18} style={{ marginRight: '0.5rem' }} />
          Back to Home
        </Link>
      </div>
      
      <h1 className="page-title">3D Art Gallery</h1>
      
      <div className="puzzle-grid">
        {artworks.map((art) => (
          <div key={art.id} className={`art-card ${getSizeClass(art.size)}`}>
            <img src={art.image} alt={art.title} className="art-image" />
            <h3>{art.title}</h3>
            <p>{art.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeDArt;