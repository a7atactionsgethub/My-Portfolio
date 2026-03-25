import React from 'react';
import '../styles/skills.css';

const Skills = () => {
  const skillGroups = [
    {
      title: "Development",
      description: "Building robust architectures and seamless interfaces.",
      skills: [
        { name: "React / HTML / CSS", level: 90 },
        { name: "JavaScript / TypeScript", level: 85 },
        { name: "Python", level: 80 },
        { name: "Data Structures", level: 75 }
      ]
    },
    {
      title: "Design",
      description: "Crafting intuitive user experiences and brand identities.",
      skills: [
        { name: "UI/UX Design", level: 95 },
        { name: "Figma", level: 90 },
        { name: "Adobe Creative Suite", level: 85 },
        { name: "Typography & Layout", level: 88 }
      ]
    },
    {
      title: "3D & Motion",
      description: "Bringing static concepts to life with depth and movement.",
      skills: [
        { name: "Blender", level: 85 },
        { name: "Rendering & Lighting", level: 80 },
        { name: "Video Editing", level: 90 },
        { name: "Motion Graphics", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-spacer skills-section">
      <div className="container">
        <h2 className="section-title">Core<br/>Capabilities</h2>
        
        <div className="skills-grid">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="skill-group-card">
              <h3 className="skill-group-title">{group.title}</h3>
              <p className="skill-group-desc">{group.description}</p>
              
              <div className="skill-list">
                {group.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-header">
                      <span>{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <div className="skill-bar-fill" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;