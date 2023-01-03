import React, { useState } from "react";
import { useFormik } from "formik";
import { loginSchema, registerSchema } from "../../Schemas";
import "./Form.css";

const initialValuesLogin = {
  name: "",
  email: "",
  password: "",
};

const initialValuesRegister = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};
const Form = () => {
  const [submittedText, setSubmittedText] = useState(false);
  const [register, setRegister] = useState(true);
  const [username, setUsername] = useState("");

  const loginFormik = useFormik({
    initialValues: initialValuesLogin,
    validationSchema: loginSchema,
    onSubmit: (values, action) => {
      console.log("🚀 ~ file: Form.jsx:61 ~ Form ~ values", values);
      action.resetForm();
      setSubmittedText(true);
      setUsername(values.name);
    },
  });
  const registerFormik = useFormik({
    initialValues: initialValuesRegister,
    validationSchema: registerSchema,
    onSubmit: (values, action) => {
      console.log("🚀 ~ file: Form.jsx:72 ~ Form ~ values", values);
      action.resetForm();
      setSubmittedText(true);
      setUsername(values.name);
    },
  });

  return (
    <>
      <div className="app__login-register flex__center ">
        {submittedText ? (
          <p
            className="submitted-text"
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
            <div className="login">
              <div className="form-content">
                <h2 className="p__cormorant">
                  {register ? "Create New Account" : "Welcome back"}
                </h2>
                <p>
                  {register ? "Already have Account? " : "Don't have account? "}
                  <span onClick={() => setRegister(!register)}>
                    {register ? "Log in" : "Create new account"}
                  </span>
                </p>
                {register ? (
                  <form onSubmit={registerFormik.handleSubmit}>
                    <div className="inputs">
                      <input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        name="name"
                        value={registerFormik.values.name}
                        onChange={registerFormik.handleChange}
                        onBlur={registerFormik.handleBlur}
                      />
                      {registerFormik.errors.name &&
                      registerFormik.touched.name ? (
                        <span>{registerFormik.errors.name}</span>
                      ) : null}
                    </div>
                    <div className="inputs">
                      <input
                        id="email"
                        type="email"
                        placeholder="e-mail"
                        name="email"
                        value={registerFormik.values.email}
                        onChange={registerFormik.handleChange}
                        onBlur={registerFormik.handleBlur}
                      />
                      {registerFormik.errors.email &&
                      registerFormik.touched.email ? (
                        <span>{registerFormik.errors.email}</span>
                      ) : null}
                    </div>
                    <div className="inputs">
                      <input
                        id="password"
                        type="password"
                        placeholder="password"
                        name="password"
                        value={registerFormik.values.password}
                        onChange={registerFormik.handleChange}
                        onBlur={registerFormik.handleBlur}
                      />
                      {registerFormik.errors.password &&
                      registerFormik.touched.password ? (
                        <span>{registerFormik.errors.password}</span>
                      ) : null}
                    </div>
                    <div className="inputs">
                      <input
                        id="confirm_password"
                        type="password"
                        placeholder="confirm password"
                        name="confirm_password"
                        value={registerFormik.values.confirm_password}
                        onChange={registerFormik.handleChange}
                        onBlur={registerFormik.handleBlur}
                      />
                      {registerFormik.errors.confirm_password &&
                      registerFormik.touched.confirm_password ? (
                        <span>{registerFormik.errors.confirm_password}</span>
                      ) : null}
                    </div>
                    <button type="submit" className="custom__button">
                      {register === true ? "Create Account" : "Log in"}
                    </button>
                  </form>
                ) : (
                  <form onSubmit={loginFormik.handleSubmit}>
                    <div className="inputs">
                      <input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        name="name"
                        value={loginFormik.values.name}
                        onChange={loginFormik.handleChange}
                        onBlur={loginFormik.handleBlur}
                      />
                      {loginFormik.errors.name && loginFormik.touched.name ? (
                        <span>{loginFormik.errors.name}</span>
                      ) : null}
                    </div>
                    <div className="inputs">
                      <input
                        id="email"
                        type="email"
                        placeholder="e-mail"
                        name="email"
                        value={loginFormik.values.email}
                        onChange={loginFormik.handleChange}
                        onBlur={loginFormik.handleBlur}
                      />
                      {loginFormik.errors.email && loginFormik.touched.email ? (
                        <span>{loginFormik.errors.email}</span>
                      ) : null}
                    </div>
                    <div className="inputs">
                      <input
                        id="password"
                        type="password"
                        placeholder="password"
                        name="password"
                        value={loginFormik.values.password}
                        onChange={loginFormik.handleChange}
                        onBlur={loginFormik.handleBlur}
                      />
                      {loginFormik.errors.password &&
                      loginFormik.touched.password ? (
                        <span>{loginFormik.errors.password}</span>
                      ) : null}
                    </div>
                    <button type="submit" className="custom__button">
                      {register === true ? "Create Account" : "Log in"}
                    </button>
                  </form>
                )}
              </div>
              <div className="loginRegister-img" />
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Form;
