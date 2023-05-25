import { Link, useNavigate } from "react-router-dom";
import styles from "./Project.module.css";

function Planet() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById("projects");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  return (
    <div className={styles.projectBody}>
      <div className={styles.header}>
        <div className={styles.name}>
          <Link to="/">ALEJANDRA ROJAS</Link>
        </div>

        <div className={styles.back} onClick={handleClick}>
          Back to projects
        </div>
      </div>
      <div>
        <div className={styles.projectLinks}>
          <a
            href="https://theplanetisyourcanvas.com/"
            target="_blank"
            rel="noreferrer"
          >
            Deployed website
          </a>
          &nbsp;|&nbsp;
          <a
            href="https://github.com/alejandra-rojas/ThePlanetIsYourCanvas"
            target="_blank"
            rel="noreferrer"
          >
            GitHub repo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Planet;
