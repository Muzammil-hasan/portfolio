import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <header className='header'>
      <a
        className='header__logo'
        href='https://muzam.ml/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <svg
          viewBox='0 0 384 122'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g className='alphabet-m'>
            <path
              d='M76.7 41.9C83.3667 41.9 88.6667 43.9 92.6 47.9C96.6 51.9 98.6 57.9333 98.6 66V97H79.6V69.1C79.6 65.3 78.8667 62.5 77.4 60.7C76 58.9 74 58 71.4 58C68.5333 58 66.2333 59 64.5 61C62.7667 63 61.9 66.0333 61.9 70.1V97H42.9V69.1C42.9 61.7 40.1667 58 34.7 58C31.7667 58 29.4333 59 27.7 61C25.9667 63 25.1 66.0333 25.1 70.1V97H6.1V42.8H24.2V48.5C26.2 46.3 28.5667 44.6667 31.3 43.6C34.1 42.4667 37.1333 41.9 40.4 41.9C44.2 41.9 47.6 42.6 50.6 44C53.6 45.4 56.0333 47.5333 57.9 50.4C60.0333 47.6667 62.7333 45.5667 66 44.1C69.2667 42.6333 72.8333 41.9 76.7 41.9Z'
              fill='currentColor'
            />
            <line
              x1='26.7'
              y1='42'
              x2='26.7'
              y2='97'
              stroke='currentColor'
              strokeWidth='5'
            />
          </g>

          <g className='alphabet-u'>
            <path
              d='M159.1 42.8V97H141V91.2C139 93.4 136.6 95.0667 133.8 96.2C131 97.3333 128.033 97.9 124.9 97.9C117.9 97.9 112.3 95.8333 108.1 91.7C103.967 87.5667 101.9 81.3667 101.9 73.1V42.8H120.9V70C120.9 74.0667 121.667 77.0333 123.2 78.9C124.733 80.7667 126.967 81.7 129.9 81.7C132.9 81.7 135.333 80.6667 137.2 78.6C139.133 76.4667 140.1 73.2333 140.1 68.9V42.8H159.1Z'
              fill='currentColor'
            />
            <line
              x1='138.5'
              y1='42'
              x2='138.5'
              y2='97'
              stroke='currentColor'
              strokeWidth='5'
            />
          </g>

          <g className='alphabet-z'>
            <path
              d='M212.3 82.8V97H162.3V85.8L187.4 56.9H163V42.8H211.3V53.9L186.2 82.8H212.3Z'
              fill='currentColor'
            />
            <line
              x1='164'
              y1='80.3'
              x2='197'
              y2='80.3'
              stroke='currentColor'
              strokeWidth='5'
            />
          </g>

          <g className='alphabet-a'>
            <path
              d='M242.2 41.9C251.2 41.9 258.067 43.9667 262.8 48.1C267.533 52.1667 269.9 58.4333 269.9 66.9V97H252.2V90C249.467 95.2667 244.133 97.9 236.2 97.9C232 97.9 228.367 97.1667 225.3 95.7C222.233 94.2333 219.9 92.2667 218.3 89.8C216.767 87.2667 216 84.4 216 81.2C216 76.0667 217.967 72.1 221.9 69.3C225.833 66.4333 231.9 65 240.1 65H250.9C250.567 59.2667 246.733 56.4 239.4 56.4C236.8 56.4 234.167 56.8333 231.5 57.7C228.833 58.5 226.567 59.6333 224.7 61.1L218.3 48.2C221.3 46.2 224.933 44.6667 229.2 43.6C233.533 42.4667 237.867 41.9 242.2 41.9ZM241.5 85.9C243.7 85.9 245.633 85.3667 247.3 84.3C248.967 83.2333 250.167 81.6667 250.9 79.6V74.9H242.7C237.167 74.9 234.4 76.7333 234.4 80.4C234.4 82.0667 235.033 83.4 236.3 84.4C237.567 85.4 239.3 85.9 241.5 85.9Z'
              fill='currentColor'
            />
            <line
              x1='238'
              y1='62.5'
              x2='271'
              y2='62.5'
              stroke='currentColor'
              strokeWidth='5'
            />
          </g>

          <g className='alphabet-m'>
            <path
              d='M343.7 41.9C350.367 41.9 355.667 43.9 359.6 47.9C363.6 51.9 365.6 57.9333 365.6 66V97H346.6V69.1C346.6 65.3 345.867 62.5 344.4 60.7C343 58.9 341 58 338.4 58C335.533 58 333.233 59 331.5 61C329.767 63 328.9 66.0333 328.9 70.1V97H309.9V69.1C309.9 61.7 307.167 58 301.7 58C298.767 58 296.433 59 294.7 61C292.967 63 292.1 66.0333 292.1 70.1V97H273.1V42.8H291.2V48.5C293.2 46.3 295.567 44.6667 298.3 43.6C301.1 42.4667 304.133 41.9 307.4 41.9C311.2 41.9 314.6 42.6 317.6 44C320.6 45.4 323.033 47.5333 324.9 50.4C327.033 47.6667 329.733 45.5667 333 44.1C336.267 42.6333 339.833 41.9 343.7 41.9Z'
              fill='currentColor'
            />
            <line
              x1='293.7'
              y1='42'
              x2='293.7'
              y2='97'
              stroke='currentColor'
              strokeWidth='5'
            />
          </g>

          <path
            className='tm'
            d='M363.54 29.15H360.06V27.5H368.97V29.15H365.49V38H363.54V29.15ZM380.078 38L380.063 31.04L376.613 36.8H375.743L372.293 31.13V38H370.433V27.5H372.038L376.208 34.46L380.303 27.5H381.908L381.923 38H380.078Z'
            fill='currentColor'
          />
        </svg>
      </a>
      <div className='header__hamburger__container'>
        <button
          className={`header__hamburger__container-hamburger ${
            active ? "active" : ""
          }`}
          onClick={() => setActive(!active)}
        >
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'>
            <g strokeWidth='2'>
              <path
                d='M72 82.286h28.75'
                fill='#009100'
                fillRule='evenodd'
                stroke='currentColor'
              />
              <path
                d='M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554'
                fill='none'
                stroke='currentColor'
              />
              <path
                d='M72 125.143h28.75'
                fill='#009100'
                fillRule='evenodd'
                stroke='currentColor'
              />
              <path
                d='M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554'
                fill='none'
                stroke='currentColor'
              />
              <path
                d='M100.75 82.286h28.75'
                fill='#009100'
                fillRule='evenodd'
                stroke='currentColor'
              />
              <path
                d='M100.75 125.143h28.75'
                fill='#009100'
                fillRule='evenodd'
                stroke='currentColor'
              />
            </g>
          </svg>
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={active ? { opacity: 0.6 } : { opacity: 0 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        className='header__overlay'
      ></motion.div>

      <motion.nav
        initial={{ x: "100%" }}
        animate={active ? { x: 0 } : { x: "100%" }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className='header__nav'
      >
        <ul className='header__nav__list'>
          <li className='header__nav__list-item'>
            <Link to='/'>Home</Link>
          </li>
          <li className='header__nav__list-item'>
            <Link to='/about'>About</Link>
          </li>
          <li className='header__nav__list-item'>
            <Link to='/projects'>Projects</Link>
          </li>
          <li className='header__nav__list-item'>
            <Link to='/contact'>Contact</Link>
          </li>
          <li className='header__nav__list-item --social'>
            <a href='https://muzam.ml/'>say hi on instagram</a>
          </li>
        </ul>
      </motion.nav>
    </header>
  );
};

export default Header;
