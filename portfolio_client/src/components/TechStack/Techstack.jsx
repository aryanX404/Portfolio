import styles from "./Techstack.module.css";
import { motion } from "framer-motion";
import {
  fadeUp,
  slideLeft,
  slideRight,
  zoom,
  staggerContainer,
} from "../../utils/animations";

const techs = [
  {
    name: "React",
    sub: "UI Library",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    sub: "Runtime",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MongoDB",
    sub: "Database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  //   { name: 'Express',    sub: 'Backend Framework',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invert: true },
  {
    name: "JavaScript",
    sub: "Language",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "HTML5",
    sub: "Markup",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    sub: "Styling",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Git",
    sub: "Version Control",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Vite",
    sub: "Build Tool",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
  },
  //   { name: 'Firebase',   sub: 'Auth & Hosting',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
];

export default function TechStack() {
  return (
    <section id="skills" className={styles.section}>
      <motion.h2
        variants={zoom}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.3,
        }}
        className={styles.heading}
      >
        <span className={styles.bright}>TECH</span>
        <span className={styles.dim}> STACK</span>
      </motion.h2>

      <div className={styles.grid}>
        {techs.map((t) => (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            key={t.name}
            className={styles.item}
          >
            <div className={styles.iconBox}>
              <img
                src={t.icon}
                alt={t.name}
                className={styles.icon}
                style={t.invert ? { filter: "invert(1)" } : {}}
              />
            </div>
            <div className={styles.info}>
              <span className={styles.name}>{t.name}</span>
              <span className={styles.sub}>{t.sub}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
