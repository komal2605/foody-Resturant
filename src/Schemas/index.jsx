import * as Yup from "yup";
const pattern = new RegExp(/^[0-9\b]+$/);
const textvalidation = new RegExp(/^[a-zA-Z ]*$/);

const loginSchema = Yup.object({
  name: Yup.string()
    .min(2)
    .matches(textvalidation, "only characters and spaces allowed")
    .max(25)
    .required("Please provide your fullname"),
  email: Yup.string().email().required("Please provide your e-mail"),
  password: Yup.string().min(6).required("Please enter your password"),
});

const registerSchema = Yup.object({
  name: Yup.string()
    .min(2)
    .matches(textvalidation, "only characters and spaces allowed")
    .max(25)
    .required("Please provide your fullname"),
  email: Yup.string().email().required("Please provide your e-mail"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirm_password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const bookTableSchema = Yup.object({
  name: Yup.string()
    .min(2)
    .matches(textvalidation, "only characters and spaces allowed")
    .max(25)
    .required("Please provide your fullname"),
  date: Yup.date().required("Please select date"),
  time: Yup.string().required("Please select time"),
  contact: Yup.string()
    .required("please provide your contact number")
    .matches(pattern, "must have digits only")
    .length(10, "must be exactly 10 digits"),
  details: Yup.string(),
});

export { bookTableSchema, loginSchema, registerSchema };
