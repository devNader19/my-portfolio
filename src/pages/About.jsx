import './About.css'

const About = () => {
  return (
    <div className="about">
      <section className="section about-hero">
        <div className="container">
          <h1 className="section-title">About Me</h1>
          <p className="section-subtitle">
            Passionate backend developer with expertise in Node.js and server-side technologies
          </p>
        </div>
      </section>

      <section className="section about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Hello! I'm Nader</h2>
              <p>
                I'm a dedicated backend developer with over 5 years of experience building 
                scalable and efficient server-side applications. My passion lies in creating 
                robust APIs and backend systems that power modern web applications.
              </p>
              <p>
                I specialize in Node.js and have extensive experience with Express.js, 
                MongoDB, PostgreSQL, and various cloud platforms. I'm always eager to learn 
                new technologies and improve my craft.
              </p>
              <p>
                When I'm not coding, you can find me exploring new frameworks, contributing 
                to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <div className="placeholder-content">
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <p>Your Photo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section experience">
        <div className="container">
          <h2 className="section-title">Experience & Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Senior Backend Developer</h3>
                <p className="timeline-company">Tech Company Inc.</p>
                <p className="timeline-date">2021 - Present</p>
                <p className="timeline-description">
                  Leading backend development for multiple projects, architecting scalable 
                  solutions, and mentoring junior developers.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Backend Developer</h3>
                <p className="timeline-company">Startup Solutions</p>
                <p className="timeline-date">2019 - 2021</p>
                <p className="timeline-description">
                  Developed RESTful APIs, implemented authentication systems, and optimized 
                  database queries for better performance.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Bachelor's in Computer Science</h3>
                <p className="timeline-company">University Name</p>
                <p className="timeline-date">2015 - 2019</p>
                <p className="timeline-description">
                  Focused on software engineering, algorithms, and database systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
