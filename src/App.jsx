import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ThreeDArt from './pages/ThreeDArt'; // adjust path if needed

function App() {
  return (
    <Router>
      <div className="app-wrapper fade-in">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main className="bento-grid">
              <div className="bento-col col-1">
                <Hero />
                <Projects column={1} />
              </div>
              <div className="bento-col col-2">
                <About />
                <Projects column={2} />
              </div>
              <div className="bento-col col-3">
                <Projects column={3} />
                <Skills />
                <Contact />
              </div>
            </main>
          } />
          <Route path="/3d-art" element={<ThreeDArt />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;