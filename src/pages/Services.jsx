import './Services.css'

const Services = () => {
  const services = [
    {
      title: 'API Development',
      description: 'Design and build robust RESTful and GraphQL APIs tailored to your business needs. Fast, secure, and scalable solutions.',
      icon: '🌐',
      features: [
        'RESTful API Design',
        'GraphQL Implementation',
        'API Documentation',
        'Rate Limiting & Security'
      ]
    },
    {
      title: 'Backend Architecture',
      description: 'Architect scalable and maintainable backend systems. From monolithic to microservices architecture.',
      icon: '🏗️',
      features: [
        'System Design',
        'Microservices Architecture',
        'Scalability Planning',
        'Performance Optimization'
      ]
    },
    {
      title: 'Database Design',
      description: 'Design efficient database schemas and optimize queries for maximum performance and reliability.',
      icon: '🗄️',
      features: [
        'Database Schema Design',
        'Query Optimization',
        'Data Migration',
        'Backup & Recovery'
      ]
    },
    {
      title: 'Authentication & Security',
      description: 'Implement secure authentication systems with JWT, OAuth, and multi-factor authentication.',
      icon: '🔐',
      features: [
        'JWT Implementation',
        'OAuth Integration',
        'Password Encryption',
        'Security Auditing'
      ]
    },
    {
      title: 'Cloud Deployment',
      description: 'Deploy and manage applications on cloud platforms with CI/CD pipelines and containerization.',
      icon: '☁️',
      features: [
        'AWS/Cloud Deployment',
        'Docker & Kubernetes',
        'CI/CD Pipeline Setup',
        'Monitoring & Logging'
      ]
    },
    {
      title: 'Code Review & Consulting',
      description: 'Review code, provide technical guidance, and help improve your backend architecture and practices.',
      icon: '💡',
      features: [
        'Code Review',
        'Technical Consulting',
        'Best Practices',
        'Team Mentoring'
      ]
    },
  ]

  return (
    <div className="services">
      <section className="section services-hero">
        <div className="container">
          <h1 className="section-title">Services</h1>
          <p className="section-subtitle">
            Comprehensive backend development services to help bring your ideas to life
          </p>
        </div>
      </section>

      <section className="section services-content">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-card">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's discuss how I can help you build a robust backend solution for your application.</p>
            <a href="mailto:contact@example.com" className="btn btn-primary">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
