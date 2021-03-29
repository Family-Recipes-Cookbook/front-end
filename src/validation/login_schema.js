import * as yup from "yup";

export default yup.object().shape({
  username: yup
    .string()
    .required("Username required.")
    .min(2, "Username must be at least 2 characters long."),

  password: yup.string().min(8, "Password must be at least 8 characters long."),
});
