import React from "react";
import Preloader from "../layout/Preloader";
import { motion } from "framer-motion";

const About = ({ mouseOverEvent, mouseOutEvent, content }) => {
  return (
    <>
      <Preloader />
      <motion.section className='about'>
        <motion.div
          className='about__background'
          variants={content}
          initial='initial'
          animate='animate'
          exit='exit'
        ></motion.div>

        <motion.div
          className='about__content'
          variants={content}
          initial='initial'
          animate='animate'
          exit='exit'
        >
          <div className='about__content-background --mobile'></div>
          <div className='about__content-description'>
            <p>
              I’m a hard working and dedicated professional front-end developer
              with a keen eye for detail, and a determination to deliver the
              very highest quality. I take great pride in my work, and I always
              try to better myself with every project I work on.
            </p>
          </div>

          <div className='about__content-image'>
            <img src='../../../dist/images/avatar.jpeg' alt='' />
            <div className='about__content-image-mask'></div>
          </div>

          <div className='about__content-description --primary'>
            <a
              onMouseOver={mouseOverEvent}
              onMouseOut={mouseOutEvent}
              href='mailto:muzammilsyed270300@gmail.com'
              target='_blank'
            >
              Muzammil Hasan
            </a>
            <p>
              I’m a hard working and dedicated professional front-end developer
              with a keen eye for detail, and a determination to deliver the
              very highest quality. I take great pride in my work, and I always
              try to better myself with every project I work on.
            </p>
            <p>
              I’m a hard working and dedicated professional front-end developer
              with a keen eye for detail, and a determination to deliver the
              very highest quality. I take great pride in my work, and I always
              try to better myself with every project I work on.
            </p>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default About;
