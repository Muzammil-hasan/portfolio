import React, { useEffect } from "react";
import { motion } from "framer-motion";
import locomotiveScroll from "locomotive-scroll";

const Projects = ({ mouseOverEvent, mouseOutEvent }) => {
  const scrollRef = React.createRef();
  const projects = [
    {
      id: 1,
      name: "Blu South",
      imageMain: "../../../dist/images/blusouth/blusouth-left.jpg",
      siteLink: "https://www.blusouthtownhomes.com/",
    },
    {
      id: 2,
      name: "Spring Field",
      imageMain: "../../../dist/images/springfield/springfield-left.jpg",
      siteLink: "https://www.springfieldal.com/",
    },
    {
      id: 3,
      name: "Loop studio",
      imageMain: "../../../dist/images/springfield/springfield-right.jpg",
      siteLink: "https://muzam.ml/",
    },
    {
      id: 4,
      name: "holland village",
      imageMain: "../../../dist/images/blusouth/blusouth-main.jpg",
      siteLink: "https://muzam.ml/",
    },
  ];

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
  });

  return (
    <section className='projects' ref={scrollRef}>
      <div
        className='projects__content'
        data-scroll
        data-scroll-speed='1'
        data-scroll-position='top'
      >
        <p>our work</p>
        <h1 className='projects__content-title'>
          Explore some of my recent projects.
        </h1>
      </div>

      <ul className='projects__container'>
        {projects.map((project) => {
          const { imageMain, id, name, siteLink } = project;
          return (
            <li
              data-scroll
              data-scroll-speed='3'
              data-scroll-position='top'
              key={id}
              className={`projects__container__item ${name
                .toLowerCase()
                .split(" ")
                .join("-")}`}
            >
              <div className='projects__container__item-image'>
                <a href={siteLink}>
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ ease: "easeInOut", duration: 0.5 }}
                    src={imageMain}
                    alt={name}
                    onMouseOver={mouseOverEvent}
                    onMouseOut={mouseOutEvent}
                  />
                </a>
              </div>
              <a
                className='projects__container__item-cta'
                href={siteLink}
                target='_blank'
                onMouseOver={mouseOverEvent}
                onMouseOut={mouseOutEvent}
              >
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
