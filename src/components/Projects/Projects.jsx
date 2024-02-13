// eslint-disable-next-line no-unused-vars
import React, {useState,useEffect} from "react";
// eslint-disable-next-line no-unused-vars
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    const [slidesToShow, setSlidesToShow] = useState(getInitialSlidesToShow());

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
      };
      function getInitialSlidesToShow() {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 830 && screenWidth >= 600) {
            return 2; // Show 1 card on smaller screens
          } else if (screenWidth <= 600) {
            return 1; // Show 3 cards on larger screens
          }
          else {
            return 3;
          }
      }
    
      useEffect(() => {
        const handleResize = () => {
          setSlidesToShow(getInitialSlidesToShow());
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
  return (
        <section className={styles.container} id="projects">
        <h2 className={styles.title}>Projects</h2>
        <Slider {...sliderSettings} className={styles.projectsSlider}>
          {projects.map((project, id) => (
            <div key={id} className={styles.projectCardWrapper}>
              <ProjectCard project={project} />
            </div>
          ))}
        </Slider>
      </section>
  );
};