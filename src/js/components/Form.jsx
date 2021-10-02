import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Formik } from "formik";

const Form = ({ mouseOverEvent, mouseOutEvent, content }) => {
  const FORMSPARK_ACTION_URL = "https://submit-form.com/32rKDtQ8";

  return (
    <motion.div className='contact__form'>
      <motion.div
        variants={content}
        initial='initial'
        exit='exit'
        animate='animate'
      >
        <h2 className='contact__form-title'>
          Hello there - Let's get in touch
        </h2>
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Email is required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            if (!values.name) {
              errors.name = "Name is required";
            }

            if (!values.message) {
              errors.message = "Message is required";
            }

            return errors;
          }}
          onSubmit={async (values, { setSubmitting }) => {
            let request = await fetch(FORMSPARK_ACTION_URL, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify(values),
            });

            if (request.ok) {
              await setSubmitting(false);
              values.name = "";
              values.email = "";
              values.message = "";
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div className='inputWrapper'>
                <label className={values.name ? "active" : ""} htmlFor='name'>
                  name
                </label>
                <input
                  type='text'
                  name='name'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  aria-required='true'
                />
                <span className='contact__form-errors'>
                  {errors.name && touched.name && errors.name}
                </span>
              </div>

              <div className='inputWrapper'>
                <label className={values.email ? "active" : ""} htmlFor='email'>
                  email
                </label>
                <input
                  type='email'
                  name='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  aria-required='true'
                />
                <span className='contact__form-errors'>
                  {errors.email && touched.email && errors.email}
                </span>
              </div>

              <div className='inputWrapper'>
                <label
                  className={values.message ? "active" : ""}
                  htmlFor='message'
                >
                  Message
                </label>
                <textarea
                  name='message'
                  id='message'
                  rows='1'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                  aria-required='true'
                ></textarea>
                <span className='contact__form-errors'>
                  {errors.message && touched.message && errors.message}
                </span>
              </div>

              <div className='submitWrapper inputWrapper'>
                <button
                  type='submit'
                  disabled={isSubmitting}
                  onMouseOut={mouseOutEvent}
                  onMouseOver={mouseOverEvent}
                >
                  Send message
                </button>
              </div>
            </form>
          )}
        </Formik>
      </motion.div>
    </motion.div>
  );
};

export default Form;
