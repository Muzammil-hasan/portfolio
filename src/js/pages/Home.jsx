import React from "react";
import Header from "../layout/Header";

const Home = () => {
  return (
    <>
      <Header />
      <section className='home'>
        <div className='home__stroke'>
          <svg
            viewBox='0 0 733 203'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <line
              x1='374.5'
              y1='203'
              x2='374.5'
              y2='2.18557e-08'
              stroke='white'
            />
            <line
              x1='4.37114e-08'
              y1='202.5'
              x2='733'
              y2='202.5'
              stroke='white'
            />
          </svg>
        </div>
        <div className='home__content'>
          <h1 className='home__content-title'>
            Build your <span>ideas</span> into websites.
          </h1>
          <p className='home__content-subtitle'>
            front end developer <span>Based in Delhi</span>
          </p>
        </div>

        <div className='home__stroke second'>
          <svg
            viewBox='0 0 733 1'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <line x1='733' y1='0.5' y2='0.5' stroke='white' />
          </svg>
        </div>
      </section>
    </>
  );
};

export default Home;
