import * as Yup from "yup";

export const formSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

export type LoginFormValues = Yup.InferType<typeof formSchema>;
