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
          <svg width='100' height='100' viewBox='0 0 100 100'>
            <path
              className='line line-1'
              d='M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058'
            />
            <path className='line line-2' d='M 20,50 H 80' />
            <path
              className='line line-3'
              d='M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942'
            />
          </svg>
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={active ? { opacity: 0.5 } : { opacity: 0 }}
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
        </ul>
      </motion.nav>
    </header>
  );
};

export default Header;
