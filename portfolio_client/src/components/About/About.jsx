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
            Passionate About Building
            <br />
            <span>Modern Web Experiences</span>
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
            I'm Aryan Singh, a Mechanical Engineering undergraduate at IIITDM
            Jabalpur with a strong interest in Full Stack Web Development. I
            enjoy turning ideas into responsive, user-friendly applications
            using modern technologies.
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
            I specialize in building MERN applications while constantly learning
            new technologies and improving my problem-solving skills. My goal is
            to create products that are both visually appealing and highly
            functional.
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

            <span>B.Tech Mechanical Engineering</span>

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
