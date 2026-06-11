import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import profileImage from "../../assets/bhavitha.jpeg";

import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={`${styles.profile} container`}>
      <div className={`${styles.profileLeft}`}>
        <div className={styles.photo}>
          <img src={profileImage} alt="photo" />
          <h1>Aryan Singh</h1>
        </div>
        <div className={styles.data}>
          <p>A Software Engineer who has developed countless innovative solutions.</p>
          <ul>
            <li><IoLogoLinkedin/></li>
            <li><FaInstagram/></li>
            <li><RiYoutubeLine/></li>
            <li><FiTwitter/></li>
          </ul>
        </div>
      </div>

      <div className={`${styles.profileRight}`}>
          <h1>FULL STACK <br />
            <span>DEVELOPER</span>
          </h1>
          <p>Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.</p>
          <div className={styles.experience}>
            <div className={styles.counts}>
              <h1>5+</h1>
              <p>YEARS OF<br/>EXPERIENCE</p>
            </div>
            <div className={styles.counts}>
              <h1>10+</h1>
              <p>PROJECTS<br/>COMPLETED</p>
            </div>
            <div className={styles.counts}>
              <h1>8+</h1>
              <p>WORLDWIDE<br/>CLIENTS</p>
            </div>
          </div>

          <div className={styles.cardContainer}>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
          </div>
          
      </div>
    </div>
  );
};

export default Profile;
