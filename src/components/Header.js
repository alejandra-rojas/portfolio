import { useState, useEffect } from "react";
import styles from "./Header.module.css";

function Header() {
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "contact", name: "contact" },
        { id: "projects", name: "projects" },
        { id: "about", name: "about" },
      ];

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.getBoundingClientRect().top <= 90) {
          setCurrentSection(section.name);
          break;
        } else {
          setCurrentSection("");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.headerStatic}>
      <div className={styles.name}>
        <a href="#hello" role="menuitem">
          ALEJANDRA ROJAS
        </a>
      </div>
      <nav>
        <ul className={styles.navMain}>
          <li>
            <a
              //href="#about"
              role="menuitem"
              className={currentSection === "about" ? "active" : ""}
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              //href="#projects"
              role="menuitem"
              className={currentSection === "projects" ? "active" : ""}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              //href="#contact"
              role="menuitem"
              className={currentSection === "contact" ? "active" : ""}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
