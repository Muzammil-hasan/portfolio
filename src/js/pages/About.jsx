import React from "react";

const About = ({ mouseOverEvent, mouseOutEvent }) => {
  return (
    <section className='about'>
      <div className='about__background'></div>

      <div className='about__content'>
        <div className='about__content-background --mobile'></div>
        <div className='about__content-description'>
          <p>
            I’m a hard working and dedicated professional front-end developer
            with a keen eye for detail, and a determination to deliver the very
            highest quality. I take great pride in my work, and I always try to
            better myself with every project I work on.
          </p>
        </div>

        <div className='about__content-image'>
          <img src='../../../dist/images/avatar.jpg' alt='' />
        </div>

        <div className='about__content-description --primary'>
          <a
            onMouseOver={mouseOverEvent}
            onMouseOut={mouseOutEvent}
            href='https://muzam.ml/'
            target='_blank'
          >
            Muzammil Hasan
          </a>
          <p>
            I’m a hard working and dedicated professional front-end developer
            with a keen eye for detail, and a determination to deliver the very
            highest quality. I take great pride in my work, and I always try to
            better myself with every project I work on.
          </p>
          <p>
            I’m a hard working and dedicated professional front-end developer
            with a keen eye for detail, and a determination to deliver the very
            highest quality. I take great pride in my work, and I always try to
            better myself with every project I work on.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
