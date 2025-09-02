import * as Yup from "yup";

export const languageValidationSchema = Yup.object().shape({
  language: Yup.string()
    .required("language name is required")
    .min(3, "language name must be at least 3 character"),
});

export type LanguageFormValues = Yup.InferType<typeof languageValidationSchema>;
