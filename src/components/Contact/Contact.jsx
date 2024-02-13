// eslint-disable-next-line no-unused-vars
import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:ar.mohamed.rifkhan@gmail.com">ar.mohamed.rifkhan@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/rifkhan-mohamed/">linkedin</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/RifkhanMohamed/">github</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/fiverr.png")} alt="Fiverr icon" />
          <a href="https://www.fiverr.com/rifkhan94?public_mode=true">fiverr</a>
        </li>
      </ul>
    </footer>
  );
};