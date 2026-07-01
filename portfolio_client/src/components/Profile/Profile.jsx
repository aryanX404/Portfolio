import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { FiTwitter } from "react-icons/fi";
import profileImage from "../../assets/profile.jpeg";
import { GrProjects } from "react-icons/gr";
import { MdOutlineArrowOutward } from "react-icons/md";
import { SiCloudflareworkers } from "react-icons/si";
import {
  fadeUp,
  slideLeft,
  slideRight,
  zoom,
  staggerContainer,
} from "../../utils/animations";

import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div id="home" className={`${styles.profile} container`}>
      <motion.div
        variants={slideLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.3,
        }}
        className={`${styles.profileLeft}`}
      >
        <div className={styles.photo}>
          <img src={profileImage} alt="photo" />
          <h1>ARYAN SINGH</h1>
        </div>
        <div className={styles.data}>
          <p>
            Full-stack developer building real products with React & Node. Currently focused on freelance web development for startups and small businesses.
          </p>
          <ul>
            <li>
              {" "}
              <a
                href="https://www.linkedin.com/in/aryan-kumar-singh-82825931a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/_im.aaryan_?igsh=MThkazIzeTl6ZTV1eQ=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/aryan-kumar-singh-82825931a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiYoutubeLine />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/aryan-kumar-singh-82825931a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiTwitter />
              </a>
            </li>
          </ul>
        </div>
      </motion.div>

      <div
        // variants={slideRight}
        // initial="hidden"
        // whileInView="visible"
        // viewport={{
        //   once: true,
        //   amount: 0.3,
        // }}
        className={`${styles.profileRight}`}
      >
        <h1>
          <motion.span
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            className={styles.title}
          >
            LETS BUILD YOUR{" "}
          </motion.span>
          <br />
          <motion.span
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            className={styles.sub_title}
          >
            NEXT WEB APP
          </motion.span>
        </h1>
        <motion.p
          variants={fadeUp}
          transition={{
            delay: 0.2,
          }}
          className={styles.sub_para}
        >
          Full-stack developer (React, Node, MongoDB) helping startups and small businesses ship real products, not just prototypes.
        </motion.p>
        <div className={styles.experience}>
          <div className={styles.counts}>
            <h1>2</h1>
            <p>
              YEARS LEARNING
              <br />
              & BUILDING
            </p>
          </div>
          <div className={styles.counts}>
            <h1>2</h1>
            <p>
              LIVE DEPLOYED
              <br />
              PROJECTS
            </p>
          </div>
          <div className={styles.counts}>
            <h1>4</h1>
            <p>
              APPS BUILT
              <br />
              (2 DEPLOYED, 2 IN PROGRESS)
            </p>
          </div>
        </div>

        <div className={styles.cardContainer}>
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            className={styles.card}
          >
            <div className="project-icon">
              {" "}
              <GrProjects />
            </div>
            <div className="card-content">
              EXPLORE <br />
              PROJECTS
            </div>
            <div className="redirect-btn">
              <MdOutlineArrowOutward />
            </div>
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
            <div className="project-icon">
              {" "}
              <SiCloudflareworkers />
            </div>
            <div className="card-content">LET'S <br/>TALK</div>
            <div className="redirect-btn">
              <MdOutlineArrowOutward />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
