import * as Yup from "yup";

const loginSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please provide your fullname"),
  email: Yup.string().email().required("Please provide your e-mail"),
  password: Yup.string().min(6).required("Please enter your password"),
});

const registerSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please provide your fullname"),
  email: Yup.string().email().required("Please provide your e-mail"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirm_password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const bookTableSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please provide your fullname"),
  date: Yup.date().required("Please select date"),
  time: Yup.string().required("Please select time"),
  contact: Yup.number().min(10).required("please provide your contact number"),
  details: Yup.string(),
});

export { bookTableSchema, loginSchema, registerSchema };
