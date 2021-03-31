import * as yup from "yup";

export default yup.object().shape({
  personalName: yup
    .string()
    .required("Please include your name.")
    .min(2, "Name must be at least 2 characters long."),
  email: yup
    .string()
    .email("Valid email is required.")
    .required("Please include a valid email."),
  username: yup
    .string()
    .required("Username required.")
    .min(2, "Username must be at least 2 characters long."),

  password: yup.string().min(8, "Password must be at least 8 characters long."),
});
