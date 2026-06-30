import { GoHome } from "react-icons/go";
import { FaRegFolder } from "react-icons/fa";
import { useEffect, useState } from "react";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { FiTool } from "react-icons/fi";
import { FaRegPenToSquare } from "react-icons/fa6";
import styles from "./Navbar.module.css";

const Navbar = () => {

  const navItems = [
    {
      id: "home",
      icon: <GoHome />,
    },
    {
      id: "about",
      icon: <MdOutlineBusinessCenter />,
    },
    {
      id: "projects",
      icon: <FaRegFolder />,
    },
    {
      id: "skills",
      icon: <FiTool />,
    },
    {
      id: "contact",
      icon: <FaRegPenToSquare />,
    },
  ];

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  return (
    <div className={`${styles.navbar}`}>
      <ul className={styles.list}>
        {navItems.map((item) => (
          <li
            key={item.id}
            className={activeSection === item.id ? styles.active : ""}
          >
            <a href={`#${item.id}`}>{item.icon}</a>
          </li>
        ))}
      </ul>
    </div>
  );
  
};

export default Navbar;
