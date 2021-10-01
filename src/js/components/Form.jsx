import React from "react";
import { motion } from "framer-motion";
import { Formik } from "formik";

const Form = ({ mouseOverEvent, mouseOutEvent, content }) => {
  // const FORMSPARK_ACTION_URL = "https://submit-form.com/32rKDtQ8";

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <motion.div
      className='contact__form'
      variants={content}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <div>
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
      </div>
    </motion.div>
  );
};

export default Form;
