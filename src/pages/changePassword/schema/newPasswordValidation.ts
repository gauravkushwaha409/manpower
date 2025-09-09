import * as Yup from "yup";

export const changeValidationSchema = Yup.object().shape({
  oldPassword: Yup.string().required("Old password is required"),
  // .test("match-old-password", "Old password is incorrect", function (value) {
  //   const { currentPassword } = this.options.context || {};
  //   return value === currentPassword;
  // }),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character"
    ),
  rePassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

export type ChangePasswordFormValues = Yup.InferType<
  typeof changeValidationSchema
>;
