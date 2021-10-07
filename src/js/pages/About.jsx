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
              I love being in a nature while I'm not coding you'll find me
              outdoor whether it's for a walk, run or cycling and I love food in
              all capacities. I spend my time exploring new restaurants, trying
              new dishes, and talking about my next meal.
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
              I'm a 21 year old hard working and dedicated professional
              front-end developer living in Delhi, India. As a freelance I work
              with companies, agencies, start-ups and individuals to full fill
              their ideas into reality. I take great pride in my work, and I
              always try to better myself with every project I work on.
            </p>
            <p>
              I like to write semantic, cross browser compatible code by hand
              that is re-useable, maintainable and easy to understand. I am
              motivated, enthusiastic and well organised. The main areas of my
              expertise are HTML(5), CSS(3), JavaScript with React. I regularly
              use version control system (GIT) to maintain my code, and I
              specialise in responsive web.
            </p>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default About;
