import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/base.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsWrapper from './components/ProjectsWrapper';
import ThreeDShowcase from './components/ThreeDShowcase';
import Skills from './components/Skills';
import Footer from './components/Footer';

import ThreeDArt from './pages/ThreeDArt';
import GraphicDesign from './pages/GraphicDesign';
import VideoEditing from './pages/VideoEditing';
import Coding from './pages/Coding';
import Writing from './pages/Writing';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <ProjectsWrapper />
              <ThreeDShowcase />
              <Skills />
            </main>
          } />
          <Route path="/3d-art" element={<ThreeDArt />} />
          <Route path="/graphic-design" element={<GraphicDesign />} />
          <Route path="/video-editing" element={<VideoEditing />} />
          <Route path="/coding" element={<Coding />} />
          <Route path="/writing" element={<Writing />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;