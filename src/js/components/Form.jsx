import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const Form = ({ mouseOverEvent, mouseOutEvent, content }) => {
  // const FORMSPARK_ACTION_URL = "https://submit-form.com/32rKDtQ8";
  const [values, setValues] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setValues("");
    console.log(data.email);
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

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='inputWrapper'>
            <label htmlFor='name'>name</label>
            <input
              value={values}
              {...register("name", { required: true })}
              onChange={(e) => setValues(e.target.value)}
            />
            {errors.name && (
              <span className='errorMessage'>*Your name required.</span>
            )}
          </div>

          <div className='inputWrapper'>
            <label htmlFor='email'>email</label>
            <input
              {...register("email", {
                required: "*Email required.",
                pattern: {
                  value:
                    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                  message: "*Your email is incorrect.",
                },
              })}
            />
            <p className='errorMessage'>
              <ErrorMessage errors={errors} name='email'>
                {({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                  ))
                }
              </ErrorMessage>
            </p>
          </div>

          <div className='inputWrapper'>
            <label htmlFor='message'>message</label>
            <textarea rows='1' {...register("message")} />
          </div>

          <div className='submitWrapper inputWrapper'>
            <button
              type='submit'
              onMouseOver={mouseOverEvent}
              onMouseOut={mouseOutEvent}
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Form;
