import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <header className='header'>
      <div className='header__hamburger__container'>
        <button
          className={`header__hamburger__container-hamburger ${
            active ? "active" : ""
          }`}
          onClick={() => setActive(!active)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='150'
            height='150'
            viewBox='0 0 200 200'
          >
            <g stroke-width='6.5' stroke-linecap='round'>
              <path
                d='M72 82.286h28.75'
                fill='#009100'
                fill-rule='evenodd'
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
                fill-rule='evenodd'
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
                fill-rule='evenodd'
                stroke='currentColor'
              />
              <path
                d='M100.75 125.143h28.75'
                fill='#009100'
                fill-rule='evenodd'
                stroke='currentColor'
              />
            </g>
          </svg>
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={active ? { opacity: 0.4 } : { opacity: 0 }}
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
