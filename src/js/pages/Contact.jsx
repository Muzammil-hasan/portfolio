import React from "react";
import Preloader from "../layout/Preloader";
import { motion } from "framer-motion";
import Form from "../components/Form";

const Contact = ({ mouseOverEvent, mouseOutEvent, content }) => {
  const personalDetails = [
    {
      id: 1,
      title: "Like mail?",
      links: [
        {
          linkName: "muzammilsyed270300@gmailcom",
          url: "mailto:muzammilsyed270300@gmail.com",
        },
      ],
    },
    {
      id: 2,
      title: "Want to call?",
      links: [
        {
          linkName: "+91 9717931398",
          url: "tel:+919717931398",
        },
      ],
    },
    {
      id: 3,
      title: "Social",
      links: [
        {
          linkName: "Linkedin",
          url: "https://www.linkedin.com/in/muzammil-hasan-5279b61b8",
        },

        {
          linkName: "Whatsapp",
          url: "https://wa.me/+919717931398",
        },
        {
          linkName: "Twitter",
          url: "https://twitter.com/Muzammil___syed?s=09",
        },
      ],
    },
  ];

  return (
    <>
      <Preloader />
      <section className='contact'>
        <Form
          mouseOutEvent={mouseOutEvent}
          mouseOverEvent={mouseOverEvent}
          content={content}
        />

        <motion.div
          variants={content}
          initial='initial'
          animate='animate'
          exit='exit'
          className='contact__divider'
        ></motion.div>

        <motion.div
          variants={content}
          initial='initial'
          animate='animate'
          exit='exit'
          className='contact__personal'
        >
          <div>
            {personalDetails.map(({ title, details, id, links }) => {
              return (
                <div key={id} className='contact__personal-container'>
                  <h3 className='contact__personal-container-title'>{title}</h3>
                  {links !== undefined &&
                    links.map(({ linkName, url }) => {
                      return (
                        <a
                          key={linkName}
                          href={url}
                          target='_blank'
                          rel='noopener noreferrer'
                          onMouseOut={mouseOutEvent}
                          onMouseOver={mouseOverEvent}
                        >
                          {linkName}
                        </a>
                      );
                    })}
                </div>
              );
            })}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
