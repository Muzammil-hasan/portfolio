import React from "react";
import Header from "../layout/Header";

const Projects = () => {
  return (
    <>
      <Header />
      <section className='projects'>
        <div className='projects__content'>
          <p>our work</p>
          <h1 className='projects__content-title'>
            Explore some of my latest projects.
          </h1>
        </div>

        <div className='projects__display'>
          <div className='projects__display-image'>
            <img src='../../../dist/images/blusouth/blusouth-main.jpg' alt='' />
          </div>

          <div className='projects__display-image'>
            <img src='../../../dist/images/blusouth/blusouth-main.jpg' alt='' />
          </div>
        </div>

        <div className='projects__display'>
          <div className='projects__display-image'>
            <img src='../../../dist/images/blusouth/blusouth-main.jpg' alt='' />
          </div>

          <div className='projects__display-image'>
            <img src='../../../dist/images/blusouth/blusouth-main.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
