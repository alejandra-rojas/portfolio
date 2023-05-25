import { useState, useEffect } from "react";
import styles from "./Contact.module.css";

function Contact() {
  const [background, setBackground] = useState(false);

  useEffect(() => {
    const contactSection = document.getElementById("contact");

    const changeBackground = () => {
      if (contactSection.getBoundingClientRect().top >= 500) {
        setBackground(false);
      } else {
        setBackground(true);
      }
    };

    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", contactSection);
  }, []);

  return (
    <div className="header-offset" id="contact">
      <section
        className={`section--contact ${
          background ? "active" : ""
        } hundredvh centered left-right`}
      >
        <div className={styles.contactDetails}>
          <div className={styles.contactType}>get in touch</div>
          <div>
            <div className={styles.contactDetail}>
              <a href="mailto:alejandra.rojas@hyperisland.se">
                alejandra.rojas@hyperisland.se
              </a>
            </div>
          </div>
          <div>
            <div className={styles.contactDetail}>
              <a
                href="https://www.linkedin.com/in/alerojasmal/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/alerojasmal
              </a>
            </div>
          </div>
          <div className={styles.contactType}></div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
