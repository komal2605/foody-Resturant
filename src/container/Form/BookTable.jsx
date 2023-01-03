import React, { useState } from "react";
import { bookTableSchema } from "../../Schemas";
import { BsCalendar2Date, BsClock } from "react-icons/bs";
import { useFormik } from "formik";
import "./Form.css";

const BookTable = () => {
  const [bookedText, setTableBookedText] = useState(false);
  const [username, setUsername] = useState("");
  const initialValuesBookTable = {
    name: "",
    date: "",
    time: "",
    contact: "",
    details: "",
  };

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValuesBookTable,
      validationSchema: bookTableSchema,
      onSubmit: (values, action) => {
        console.log("🚀 ~ file: Form.jsx:83 ~ Form ~ values", values);
        action.resetForm();
        setTableBookedText(true);
        setUsername(values.name);
      },
    });

  return (
    <div className="app__book-table flex__center">
      {bookedText ? (
        <p className="submitted-text">
          Thank you {username},<br />
          <br />
          your table is booked !!
        </p>
      ) : (
        <>
          <div className="app__book-table-div">
            <div className="book-table-img" />
            <div className="book-table-content">
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
                <div className="sub-div">
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
                    rows="6"
                    name="details"
                    value={values.details}
                    placeholder="any more details"
                    maxLength={250}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ resize: "none" }}
                  ></textarea>
                  {errors.details && touched.details ? (
                    <span>{errors.details}</span>
                  ) : null}
                </div>
                <button type="submit" className="custom__button">
                  Book my Table
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BookTable;
