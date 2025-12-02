import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <p className="hero-greeting">Hello, I'm</p>
              <h1 className="hero-name">
                <span className="gradient-text">Nader</span>
              </h1>
              <h2 className="hero-title">Backend Developer</h2>
              <p className="hero-description">
                Specializing in Node.js, Express, and building scalable RESTful APIs.
                Passionate about creating efficient server-side solutions.
              </p>
              <div className="hero-buttons">
                <Link to="/projects" className="btn btn-primary">
                  View Projects
                </Link>
                <a href="mailto:contact@example.com" className="btn btn-secondary">
                  Get In Touch
                </a>
              </div>
            </div>
            <div className="hero-image">
              <div className="code-block">
                <div className="code-header">
                  <span className="code-dot red"></span>
                  <span className="code-dot yellow"></span>
                  <span className="code-dot green"></span>
                </div>
                <pre className="code-content">
{`const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.json({
    message: 'Hello World',
    status: 'success'
  });
});

app.listen(3000, () => {
  console.log('Server running...');
});`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <h3 className="stat-number">50+</h3>
              <p className="stat-label">Projects Completed</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">5+</h3>
              <p className="stat-label">Years Experience</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">30+</h3>
              <p className="stat-label">Happy Clients</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">20+</h3>
              <p className="stat-label">Technologies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="section featured-skills">
        <div className="container">
          <h2 className="section-title">Core Technologies</h2>
          <p className="section-subtitle">
            Technologies I work with daily to build robust backend solutions
          </p>
          <div className="skills-grid">
            <div className="skill-item">
              <div className="skill-icon">⚡</div>
              <h3>Node.js</h3>
              <p>Asynchronous, event-driven architecture</p>
            </div>
            <div className="skill-item">
              <div className="skill-icon">🚀</div>
              <h3>Express.js</h3>
              <p>Fast, minimalist web framework</p>
            </div>
            <div className="skill-item">
              <div className="skill-icon">🗄️</div>
              <h3>MongoDB</h3>
              <p>NoSQL database expertise</p>
            </div>
            <div className="skill-item">
              <div className="skill-icon">🔐</div>
              <h3>Security</h3>
              <p>JWT, OAuth, encryption</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
