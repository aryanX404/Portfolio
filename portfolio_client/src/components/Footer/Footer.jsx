import styles from "./Footer.module.css";

import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";
import { motion } from "framer-motion";
import {
  fadeUp,
  slideLeft,
  slideRight,
  zoom,
  staggerContainer,
} from "../../utils/animations";

const Footer = () => {
  return (
    <motion.footer
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={styles.footer}
    >
      <div className={styles.top}>
        <div className={styles.brand}>
          <h2>ARYAN SINGH</h2>
          <p>Full Stack Developer</p>
        </div>

        <ul className={styles.links}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className={styles.socials}>
          <a
            href="https://www.linkedin.com/in/aryan-kumar-singh-82825931a"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoLinkedin />
          </a>

          <a
            href="https://github.com/aryanX404"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a href="https://instagram.com/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>

          <a href="https://youtube.com/" target="_blank" rel="noreferrer">
            <RiYoutubeLine />
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Aryan Singh. All Rights Reserved.</p>

        <p>Built with ❤️ using React • Vite • Framer Motion</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
