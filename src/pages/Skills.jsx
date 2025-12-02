import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Backend Frameworks',
      skills: [
        { name: 'Node.js', level: 95 },
        { name: 'Express.js', level: 90 },
        { name: 'Nest.js', level: 85 },
        { name: 'Fastify', level: 80 },
      ]
    },
    {
      category: 'Databases',
      skills: [
        { name: 'MongoDB', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'Redis', level: 85 },
      ]
    },
    {
      category: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', level: 80 },
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 75 },
        { name: 'CI/CD', level: 85 },
      ]
    },
    {
      category: 'Other Technologies',
      skills: [
        { name: 'GraphQL', level: 80 },
        { name: 'RESTful APIs', level: 95 },
        { name: 'Microservices', level: 85 },
        { name: 'WebSockets', level: 85 },
      ]
    },
  ]

  const technologies = [
    { name: 'JavaScript', icon: 'JS' },
    { name: 'TypeScript', icon: 'TS' },
    { name: 'Node.js', icon: '⚡' },
    { name: 'Express', icon: '🚀' },
    { name: 'MongoDB', icon: '🗄️' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Redis', icon: '🔴' },
    { name: 'Docker', icon: '🐳' },
    { name: 'AWS', icon: '☁️' },
    { name: 'GraphQL', icon: '📊' },
    { name: 'JWT', icon: '🔐' },
    { name: 'REST', icon: '🌐' },
  ]

  return (
    <div className="skills">
      <section className="section skills-hero">
        <div className="container">
          <h1 className="section-title">Skills & Technologies</h1>
          <p className="section-subtitle">
            A comprehensive overview of my technical expertise and tools I work with
          </p>
        </div>
      </section>

      <section className="section skills-content">
        <div className="container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h2 className="category-title">{category.category}</h2>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-bar-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-bar-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section tech-stack">
        <div className="container">
          <h2 className="section-title">Technology Stack</h2>
          <p className="section-subtitle">
            Technologies and tools I use to build amazing backend solutions
          </p>
          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-card">
                <div className="tech-icon">{tech.icon}</div>
                <h3>{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills
