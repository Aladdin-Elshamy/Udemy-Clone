import * as yup from "yup"

export const loginSchema = yup
  .object({
    email: yup.string().required("Email is required").matches(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, "Email is not valid"),
    password: yup.string().required("Password is required").min(6,"Password should be at least 6 charachters"),
  })
  .required()