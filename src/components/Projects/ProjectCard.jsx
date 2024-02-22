/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState,useEffect } from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const ProjectCard = ({
  // eslint-disable-next-line react/prop-types
  project: { title, imageSrc, description, skills, source, demo },
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [slidesToShow, setSlidesToShow] = useState(getInitialSlidesToShow());

  const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
    };
    // function getInitialSlidesToShow() {
    //   const screenWidth = window.innerWidth;
    //   if (screenWidth <= 830 && screenWidth >= 600) {
    //       return 2; // Show 1 card on smaller screens
    //     } else if (screenWidth <= 600) {
    //       return 1; // Show 3 cards on larger screens
    //     }
    //     else {
    //       return 3;
    //     }
    // }

    // useEffect(() => {
    //   const handleResize = () => {
    //     setSlidesToShow(getInitialSlidesToShow());
    //   };
  
    //   window.addEventListener("resize", handleResize);
  
    //   return () => {
    //     window.removeEventListener("resize", handleResize);
    //   };
    // }, []);
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
      <Button variant="primary" onClick={handleShow}>
        Demo
      </Button>
      <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show} onHide={handleClose}
    >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Slider {...sliderSettings}  className={styles.projectsSlider}>
          {demo.map((media, id) => (
                <div key={id}>
                  {media.endsWith(".mp4") ? (
                    <video
                      controls
                      width="100%"
                      height="500px"
                      className={styles.imageSlider}
                    >
                      <source src={getImageUrl(media)} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={getImageUrl(media)}
                      alt={`Demo Image ${id + 1}`}
                      className={styles.imageSlider}
                    />
                  )}
                </div>
              ))}
          </Slider>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        <Button variant="primary" onClick={() => window.open(source, "_blank")}>
          Source
        </Button>
      </div>
    </div>
  );
};