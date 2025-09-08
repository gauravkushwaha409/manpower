import * as Yup from "yup";

export const userValidationSchema = Yup.object().shape({
  id: Yup.string().required("User id is required"),
  name: Yup.string()
    .required("First name is required")
    .min(3, "First name must be at least 3 character"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone_No: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
});

export type UserValidationSchemaType = Yup.InferType<
  typeof userValidationSchema
>;
