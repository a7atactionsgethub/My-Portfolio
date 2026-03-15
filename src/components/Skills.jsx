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

      <style jsx="true">{`
        .skills-container {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .section-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .categories-stack {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .cat-title {
          font-size: 0.8rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.8rem;
          font-weight: 600;
        }

        .tags-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .skill-tag {
          border: 1px solid var(--border-color);
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--text-primary);
          background: var(--bg-color);
          transition: var(--transition);
        }

        .skill-tag:hover {
          border-color: var(--text-primary);
          background: var(--card-bg);
        }
      `}</style>
    </div>
  );
};

export default Skills;
