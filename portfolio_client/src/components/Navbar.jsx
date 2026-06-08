import { GoHome } from "react-icons/go";
import { FaRegFolder } from "react-icons/fa";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { FiTool } from "react-icons/fi";
import { FaRegPenToSquare } from "react-icons/fa6";
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li className="icon"><GoHome /></li>
        <li className="icon"><FaRegFolder /></li>
        <li className="icon"><MdOutlineBusinessCenter /></li>
        <li className="icon"><FiTool /></li>
        <li className="icon"><FaRegPenToSquare /></li>
      </ul>
    </div>
  )
}

export default Navbar

