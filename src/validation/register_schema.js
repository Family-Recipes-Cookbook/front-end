import * as yup from "yup";

export default yup.object().shape({
  personalName: yup
    .string()
    .required("Please include your name.")
    .min(2, "Name must be at least 2 characters long."),
  age: yup
    .string("Please include your age.")
    .required("Please include your age."),
  phone: yup
    .string("Please include a valid phone number.")
    .matches(
      /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/,
      "Please include a valid phone number."
    )
    .required("Please include a valid phone number."),
  email: yup
    .string()
    .email("Please include a valid email.")
    .required("Please include a valid email."),
  username: yup
    .string()
    .required("Username required.")
    .min(2, "Username must be at least 2 characters long."),

  password: yup.string().min(8, "Password must be at least 8 characters long."),
});
