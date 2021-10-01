import React from "react";
import Preloader from "../layout/Preloader";
import { Formik } from "formik";

const Contact = ({ dot }) => {
  const FORMSPARK_ACTION_URL = "https://submit-form.com/32rKDtQ8";

  return (
    <>
      {/* <Preloader /> */}
      <section className='contact'>
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
              <input
                type='text'
                name='name'
                placeholder='Name'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                aria-required='true'
              />
              <span className='contact__form-errors'>
                {errors.name && touched.name && errors.name}
              </span>
              <input
                type='email'
                name='email'
                placeholder='Email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                aria-required='true'
              />
              <span className='contact__form-errors'>
                {errors.email && touched.email && errors.email}
              </span>

              <textarea
                name='message'
                id='message'
                cols='30'
                rows='10'
                placeholder='Message'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
                aria-required='true'
              ></textarea>
              <span className='contact__form-errors'>
                {errors.message && touched.message && errors.message}
              </span>
              <button type='submit' disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </section>
    </>
  );
};

export default Contact;
