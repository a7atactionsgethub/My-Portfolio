import React from 'react';

const Skills = () => {
  const categories = [
    {
      title: 'IT & Development',
      skills: ['Python', 'JavaScript/HTML', 'Dart', 'React', 'Data Structures', 'Networking']
    },
    {
      title: 'Graphic Design',
      skills: ['UI/UX', 'Figma', 'Typography', 'Branding', 'Adobe Creative Suite']
    },
    {
      title: '3D Art & Animation',
      skills: ['Blender', 'Modeling', 'Texturing', 'Lighting', 'Rendering']
    }
  ];

  return (
    <div className="skills-container bento-card expertise-card">
      <div className="card-header">
        <h3 className="section-title">Core Competencies</h3>
      </div>
      
      <div className="categories-stack">
        {categories.map((cat, idx) => (
          <div key={idx} className="skill-category">
            <h4 className="cat-title">{cat.title}</h4>
            <div className="tags-grid">
              {cat.skills.map((item, i) => (
                <span key={i} className="skill-tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;