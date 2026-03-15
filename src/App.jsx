import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app-wrapper fade-in">
      <Navbar />
      
      {/* 
        Grid restructuring:
        Column 1 (IT): Hero, Github Projects
        Column 2 (Design): About, Graphic Design Showcase
        Column 3 (3D & Meta): 3D Art Showcase, Skills, Contact
      */}
      <main className="bento-grid">
        <div className="bento-col col-1">
          <Hero />
          <Projects column={1} /> {/* Github repos */}
        </div>

        <div className="bento-col col-2">
          <About />
          <Projects column={2} /> {/* Graphic Design */}
        </div>

        <div className="bento-col col-3">
          <Projects column={3} /> {/* 3D Art */}
          <Skills />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
