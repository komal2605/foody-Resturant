import React, { useState } from "react";
import { images } from "../../constants";
import { useFormik } from "formik";
import { BsCalendar2Date, BsClock } from "react-icons/bs";
import { bookTableSchema, loginSchema, registerSchema } from "../../Schemas";
import "./Form.css";

const initialValuesLogin = {
  name: "",
  email: "",
  password: "",
};

const initialValuesBookTable = {
  name: "",
  date: "",
  time: "",
  contact: "",
  details: "",
};

const initialValuesRegister = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};
export default function Form(props) {
  const [submittedText, setSubmittedText] = useState(false);
  const [bookedText, setTableBookedText] = useState(false);
  const [register, setRegister] = useState(true);
  const [username, setUsername] = useState("");

  // for login-----
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues:
        props.show === "loginForm"
          ? register
            ? initialValuesRegister
            : initialValuesLogin
          : initialValuesBookTable,
      validationSchema:
        props.show === "loginForm"
          ? register
            ? registerSchema
            : loginSchema
          : bookTableSchema,
      onSubmit: (values, action) => {
        action.resetForm();
        setSubmittedText(true);
        setTableBookedText(true);
        setUsername(values.name);
      },
    });
  console.log("🚀 ~ file: Form.jsx:55 ~ Form ~ values", values);

  // for book-table--------

  return (
    <>
      {props.show === "loginForm" && (
        <div className="app__login-register flex__center ">
          <div className="login">
            <div className="form-content">
              {submittedText ? (
                <p
                  style={{
                    color: "var(--color-golden)",
                    textTransform: "capitalize",
                    fontSize: "18px",
                  }}
                >
                  welcome {username} !
                </p>
              ) : (
                <>
                  <h2 className="p__cormorant">Create New Account</h2>
                  <p>
                    Already have Account?{" "}
                    <span onClick={() => setRegister(false)}>Log in</span>
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="inputs">
                      <input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.name && touched.name ? (
                        <span>{errors.name}</span>
                      ) : null}
                    </div>
                    <div className="inputs">
                      <input
                        id="email"
                        type="email"
                        placeholder="E-mail"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.email && touched.email ? (
                        <span>{errors.email}</span>
                      ) : null}
                    </div>
                    <div className="inputs">
                      <input
                        id="password"
                        type="password"
                        placeholder="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.password && touched.password ? (
                        <span>{errors.password}</span>
                      ) : null}
                    </div>
                    {register ? (
                      <div className="inputs">
                        <input
                          id="confirm_password"
                          type="password"
                          placeholder="confirm password"
                          name="confirm_password"
                          value={values.confirm_password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.confirm_password && touched.confirm_password ? (
                          <span>{errors.confirm_password}</span>
                        ) : null}
                      </div>
                    ) : null}
                    <button type="submit" className="custom__button">
                      {register === true ? "Create Account" : "Log in"}
                    </button>
                  </form>
                </>
              )}
            </div>
            <img src={images.veganFood} alt="form-login" />
          </div>
        </div>
      )}

      {props.show === "dinning" && (
        <div className="app__book-table flex__center">
          <div className="app__book-table-div">
            <img src={images.dinning} alt="dinning" />
            <div className="book-table">
              {bookedText ? (
                <p
                  style={{
                    color: "var(--color-golden)",
                    textTransform: "capitalize",
                    fontSize: "18px",
                  }}
                >
                  Thank you {username},<br />
                  <br />
                  your table is booked !!
                </p>
              ) : (
                <>
                  <h2 className="p__cormorant">Book your Dinning</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="inputs">
                      <input
                        type="text"
                        placeholder="Your name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.name && touched.name ? (
                        <span>{errors.name}</span>
                      ) : null}
                    </div>
                    <div className="inputs">
                      <input
                        type="tel"
                        placeholder="+91 "
                        name="contact"
                        value={values.contact}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.contact && touched.contact ? (
                        <span>{errors.contact}</span>
                      ) : null}
                    </div>
                    <div className="flex__center sub-div">
                      <div className="inputs">
                        <p>
                          <BsCalendar2Date />
                        </p>
                        <input
                          type="date"
                          name="date"
                          value={values.date}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />

                        {errors.date && touched.date ? (
                          <span>{errors.date}</span>
                        ) : null}
                      </div>
                      <div className="inputs">
                        <p>
                          <BsClock />
                        </p>
                        <input
                          type="time"
                          name="time"
                          value={values.time}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.time && touched.time ? (
                          <span>{errors.time}</span>
                        ) : null}
                      </div>
                    </div>

                    <div className="inputs">
                      <textarea
                        cols="30"
                        rows="7"
                        placeholder="any more details"
                        name="details"
                        value={values.details}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></textarea>
                      {errors.details && touched.details ? (
                        <span>{errors.details}</span>
                      ) : null}
                    </div>
                    <button type="submit" className="custom__button">
                      Book my Table
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
