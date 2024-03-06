import * as yup from "yup";

export const registerSchema = yup.object().shape({
  fullName: yup.string().required("First name is required"),
  email: yup.string().email("Email is not valid").required("Email is required"),
  password: yup
    .string()
    .min(5, "Password minimum 6 characters")
    .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/, {
      message:
        "Password must required: Capital letter and a Special character.",
    })
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("Confirm password is required"),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email("Email is not valid").required("Email is required"),
  password: yup
    .string()
    .min(5, "Password minimum 6 characters")
    .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/, {
      message:
        "Password must required: Capital letter and a Special character.",
    })
    .required("Password is required"),
});

export const forgetPasswordSchema = yup.object().shape({
  email: yup.string().email("Email is not valid").required("Email is required"),
});
