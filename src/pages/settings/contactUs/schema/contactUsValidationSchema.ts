import * as Yup from "yup";

export const contactUsValidationSchema = Yup.object().shape({
  id: Yup.string().required("Contact id is required"),

  contactName: Yup.string().required("Contact name is required"),

  contactEmail: Yup.string().required("Contact Email is required"),

  contactNumber: Yup.string().required("Contact number is required"),
});

export type ContactUsValidationSchemaType = Yup.InferType<
  typeof contactUsValidationSchema
>;
