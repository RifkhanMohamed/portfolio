// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
      };
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