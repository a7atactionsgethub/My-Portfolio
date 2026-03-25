import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import '../styles/projects.css';

const ProjectsWrapper = () => {
  const projects = [
    {
      id: "01",
      title: "AIM Reaction Engine",
      category: "Full-Stack Development",
      description: "A high-performance reaction training web application. Built with React and optimized for millisecond precision analytics. Integrates raw data into a minimal dashboard.",
      tech: ["React", "JavaScript", "HTML/CSS"],
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=800&fit=crop"
    },
    {
      id: "02",
      title: "F1 Live Telemetry",
      category: "Data Visualization",
      description: "Real-time Formula 1 data visualization engine extracting live session data for simulator analysis. Rendering intense data flows into clean UI structures.",
      tech: ["Python", "WebSockets", "Data Science"],
      image: "https://images.unsplash.com/photo-1532983330958-4b32bbe9cbadd?w=1200&h=800&fit=crop"
    },
    {
      id: "03",
      title: "A7 Brand Identity",
      category: "UI/UX & Branding",
      description: "Complete visual identity and design system for a creative studio, focusing on minimal aesthetics, strong typography grids, and print-ready formats.",
      tech: ["Figma", "Illustrator", "Photoshop"],
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&h=800&fit=crop"
    }
  ];

  return (
    <section id="projects" className="section-spacer projects-section">
      <div className="container">
        <h2 className="section-title">Selected<br/>Works</h2>
        <p className="section-subtitle">A collection of projects bridging the gap between technical complexity and elegant design. Delivering impact through digital craft.</p>
        
        <div className="projects-list">
          {projects.map((project) => (
            <div key={project.id} className="project-row">
              <div className="project-info">
                <span className="project-id">{project.id}</span>
                <h3 className="project-title">{project.title}</h3>
                <h4 className="project-category">{project.category}</h4>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t, i) => <span key={i}>{t}</span>)}
                </div>
                <a href="#" className="project-link">
                  View Case Study <ArrowUpRight size={18} />
                </a>
              </div>
              <div className="project-visual">
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsWrapper;
