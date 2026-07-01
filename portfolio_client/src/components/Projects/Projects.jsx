import styles from "./Projects.module.css";
import notestore from "../../assets/Notestore.png";
import { motion } from "framer-motion";
import {
  fadeUp,
  slideLeft,
  slideRight,
  zoom,
  staggerContainer,
} from "../../utils/animations";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Note Store-Study Smarter",
      description: "A notes-sharing platform built for college students to upload, discover, and access study notes in one place.",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://notestore-frontend.onrender.com/",
      image: notestore,
      deployed: true,
    },
    
    {
      id:2,
      title: "Task Management App",
      description: "Collaborative task manager with real-time updates.",
      technologies: ["React", "CSS Modules", "Framer Motion","Node.js","MongoDB"],
      link: "#",
      image: "",
      deployed: false,
    },
    {
      id: 3,
      title: "To-Do List App",
      description: "List your tasks and manage your time effectively with this simple to-do list application.",
      technologies: ["React", "Node.js", "Tailwind CSS","MongoDB"],
      link: "#",
      image: "",
      deployed: false,
    },
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.h2
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            className={styles.title}
          >
            FEATURED <span>PROJECTS</span>{" "}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            className={styles.subtitle}
          >
            Explore my latest work and innovations
          </motion.p>
        </div>

        <div className={styles.projectsGrid}>
          {projectsData.map((project) => (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              key={project.id}
              className={styles.projectCard}
            >
              <div className={styles.projectImage}>
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className={styles.imagePlaceholder}></div>
                )}
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
                <div className={styles.technologies}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a href={project.link} className={styles.projectLink}>
                  {project.deployed? "View Project" : "🟡 Deployment in progress"}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
