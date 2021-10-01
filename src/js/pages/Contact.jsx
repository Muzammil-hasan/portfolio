import React, { useState } from "react";
import Preloader from "../layout/Preloader";
import { motion } from "framer-motion";
import { Formik } from "formik";

const Contact = ({ mouseOverEvent, mouseOutEvent, content }) => {
  // const FORMSPARK_ACTION_URL = "https://submit-form.com/32rKDtQ8";

  const personalDetails = [
    {
      id: 1,
      title: "live nearby?",
      details: "726, phatak dhobiyan, farash khana, Delhi - 110006",
    },
    {
      id: 2,
      title: "Contact with us",
      links: [
        {
          linkName: "muzammilsyed270300@gmailcom",
          url: "https://muzam.ml",
        },

        {
          linkName: "+91 9717931398",
          url: "https://muzam.ml",
        },
      ],
    },
    {
      id: 3,
      title: "Social",
      links: [
        {
          linkName: "Linkedin",
          url: "https://muzam.ml",
        },

        {
          linkName: "Instagram",
          url: "https://muzam.ml",
        },
        {
          linkName: "Twitter",
          url: "https://muzam.ml",
        },
      ],
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Preloader />
      <section className='contact'>
        <motion.div
          variants={content}
          initial='initial'
          animate='animate'
          exit='exit'
          className='contact__divider'
        ></motion.div>

        <motion.div
          className='contact__form'
          variants={content}
          initial='initial'
          animate='animate'
          exit='exit'
        >
          <h2 className='contact__form-title'>
            Hello there - Let's get in touch
          </h2>
          <form>
            <span>
              <label htmlFor='name'>name</label>
              <input type='text' name='name' />
            </span>

            <span>
              <label htmlFor='email'>email</label>
              <input type='email' name='email' />
            </span>

            <span>
              <label htmlFor='message'>message</label>
              <textarea rows='1' name='message' />
            </span>

            <span className='submitWrapper'>
              <button
                type='submit'
                onMouseOver={mouseOverEvent}
                onMouseOut={mouseOutEvent}
                onClick={handleSubmit}
              >
                Send message
              </button>
            </span>
          </form>
        </motion.div>

        <motion.div
          variants={content}
          initial='initial'
          animate='animate'
          exit='exit'
          className='contact__personal'
        >
          {personalDetails.map(({ title, details, id, links }) => {
            return (
              <div key={title} className='contact__personal-container'>
                <h3 className='contact__personal-container-title'>{title}</h3>
                {details !== undefined && <p>{details}</p>}
                {links !== undefined &&
                  links.map(({ linkName, url }) => {
                    return (
                      <a
                        key={linkName}
                        href={url}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {linkName}
                      </a>
                    );
                  })}
              </div>
            );
          })}
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
