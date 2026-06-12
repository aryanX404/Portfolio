import styles from '../styles/Projects.module.css';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      image: ''
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task manager with real-time updates',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      link: '#',
      image: ''
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather data visualization and analytics',
      technologies: ['React', 'API Integration', 'Charts.js'],
      link: '#',
      image: ''
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Modern responsive portfolio with smooth animations',
      technologies: ['React', 'CSS Modules', 'Framer Motion'],
      link: '#',
      image: ''
    }
  ];

  return (
    <section className={styles.projectsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Projects</h2>
          <p className={styles.subtitle}>Explore my latest work and innovations</p>
        </div>

        <div className={styles.projectsGrid}>
          {projectsData.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className={styles.imagePlaceholder}></div>
                )}
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.technologies}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={styles.tech}>{tech}</span>
                  ))}
                </div>
                <a href={project.link} className={styles.projectLink}>
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
