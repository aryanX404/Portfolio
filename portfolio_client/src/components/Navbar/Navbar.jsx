import { GoHome } from "react-icons/go";
import { FaRegFolder } from "react-icons/fa";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { FiTool } from "react-icons/fi";
import { FaRegPenToSquare } from "react-icons/fa6";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={`${styles.navbar} container`}>
      <ul className={styles.list}>
        <li><GoHome /></li>
        <li><FaRegFolder /></li>
        <li><MdOutlineBusinessCenter /></li>
        <li><FiTool /></li>
        <li><FaRegPenToSquare /></li>
      </ul>
    </div>
  )
}

export default Navbar

