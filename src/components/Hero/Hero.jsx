// eslint-disable-next-line no-unused-vars
import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const handleDownload = () => {
    // Replace 'your-google-drive-link' with the actual link to your GIF on Google Drive
    const googleDriveLink = `${getImageUrl("hero/Mohamed-Rifkhan-CV.pdf")}`;
    const fileName = googleDriveLink.substring(googleDriveLink.lastIndexOf('/') + 1);
    // Create an invisible link element
    const link = document.createElement('a');
    link.href = googleDriveLink;
    link.target = '_blank';
    link.download = fileName; // Specify the desired file name

    // Trigger a click event on the link
    document.body.appendChild(link);
    link.click();

    // Remove the link from the DOM
    document.body.removeChild(link);
  };
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mohamed Rifkhan</h1>
        <p className={styles.description}>
          I'm a full-stack developer with over 3 years of experience using React, Angular, Spring Boot (Java) and
          .Net (c#). Reach out if you'd like to learn more!
        </p>
        <div className={styles.buttonContainer}>
          <a href="mailto:ar.mohamed.rifkhan@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
          
          <div className={styles.textAnimation} onClick={handleDownload}>
            <div className={styles.cvText}>CV</div>
            <button className={styles.gifButton}  ></button>
          </div>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};