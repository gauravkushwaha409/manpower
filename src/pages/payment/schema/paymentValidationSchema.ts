import * as Yup from "yup";

export const paymentValidationSchema = Yup.object().shape({
  id: Yup.string().required("Payment id is required"),
  candidateName: Yup.string()
    .required("Candidate Name is required")
    .min(3, "Candidate Name must be at least 3 characters"),
  country: Yup.string().required("Country is required"),
  payment: Yup.number()
    .required("Payment amount is required")
    .positive("Payment must be positive"),
  payment_date: Yup.date().required("Payment date is required"),
  payment_for: Yup.string().required("Payment purpose is required"),
  payment_method: Yup.string().required("Payment method is required"),
  payment_image: Yup.string().required("Payment image is required"),
  total_payment: Yup.string().required("Total Payment is required"),
});

export type PaymentValidationSchemaType = Yup.InferType<
  typeof paymentValidationSchema
>;