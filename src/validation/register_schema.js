import * as yup from "yup";

export default yup.object().shape({
  email: yup
    .string()
    .email("Valid email is required.")
    .required("Valid email is required."),
  username: yup
    .string()
    .required("Username required.")
    .min(2, "Username must be at least 2 characters long."),

  password: yup.string().min(8, "Password must be at least 8 characters long."),
});
