import * as Yup from "yup";

export const industryValidationSchema = Yup.object().shape({
  industry: Yup.string()
    .required("Industry name is required")
    .min(3, "Industry name must be at least 3 characters")
    .max(50, "Industry name cannot exceed 50 characters"),
});

export type IndustryValidationSchemaType = Yup.InferType<
  typeof industryValidationSchema
>;
