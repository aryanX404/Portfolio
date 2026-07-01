import styles from "./About.module.css";
import { motion } from "framer-motion";
import {
  fadeUp,
  slideLeft,
  slideRight,
  zoom,
  staggerContainer,
} from "../../utils/animations";

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={`${styles.container} container`}>
        <div className={styles.left}>
          <p className={styles.tag}>ABOUT ME</p>

          <motion.h2
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            className={styles.heading}
          >
            I Build What I Learn
            
            
          </motion.h2>

          <motion.p
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            className={styles.description}
          >
            I'm Aryan — a full-stack developer who builds fast, functional web
            applications end-to-end, from database to deployment. I specialize
            in the MERN stack (MongoDB, Express, React, Node.js), and I learn
            fast: in under 2 years I've gone from writing my first line of code
            to shipping Study Smarter, a real platform currently used by
            students to share and access notes.
          </motion.p>

          <motion.p
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            className={styles.description}
          >
            I'm currently pursuing a B.Tech at IIITDM Jabalpur, but my focus is building things that work — not just studying theory. If you need a functional, well-built web app without the overhead of a big agency, that's exactly what I do.
          </motion.p>
        </div>

        <div className={styles.right}>
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            className={styles.card}
          >
            <h3>Education</h3>

            <span>Bachelor of Technology</span>

            <p>IIITDM Jabalpur</p>

            <small>2024 - Present</small>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            className={styles.card}
          >
            <h3>Focus</h3>

            <ul>
              <li>Full Stack Development</li>
              <li>React & Node.js</li>
              <li>MongoDB</li>
              <li>REST APIs</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
