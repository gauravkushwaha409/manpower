import * as Yup from "yup";

const industrySchema = Yup.object().shape({
  industry: Yup.string()
    .required("Industry name is required")
    .min(3, "Industry name must be at least 3 characters")
    .max(50, "Industry name cannot exceed 50 characters"),
});

export const IndustryValidationSchema = industrySchema;
export type IndustrySchemaType = Yup.InferType<typeof industrySchema>;
