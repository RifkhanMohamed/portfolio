/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import Modal from "./Modal";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
// eslint-disable-next-line no-unused-vars, react-hooks/rules-of-hooks
const [isModalOpen, setIsModalOpen] = useState(false);

// eslint-disable-next-line no-unused-vars
const openModal = () => {
  setIsModalOpen(true);
};

// eslint-disable-next-line no-unused-vars
const closeModal = () => {
  setIsModalOpen(false);
};
export const ProjectCard = ({
  // eslint-disable-next-line react/prop-types, no-unused-vars
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <button className={styles.link} onClick={openModal}>Demo</button>
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <img src={project.image1} alt="Image 1" />
        <img src={project.image2} alt="Image 2" />
        <video controls>
          <source src={project.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Modal>
    </div>
  );
};