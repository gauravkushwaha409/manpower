import * as Yup from "yup";

export const preApplicationValidationSchema = Yup.object().shape({
  id: Yup.string().required("Pre Application id is required"),

  title: Yup.string()
    .required("Title is required")
    .min(3, "Title must be at least 3 characters"),

  description: Yup.string()
    .required("Description is required")
    .min(10, "Description must be at least 10 characters"),

  document: Yup.mixed<File>()
    .nullable()
    .test(
      "fileSize",
      "File size must be less than 10MB",
      (value?: File | null) => {
        return !value || value.size <= 10 * 1024 * 1024;
      }
    )
    .test(
      "fileType",
      "Only JPG, PNG, GIF, and SVG files are allowed",
      (value?: File | null) => {
        return (
          !value ||
          ["image/jpeg", "image/png", "image/gif", "image/svg+xml"].includes(
            value.type
          )
        );
      }
    ),
});

export type PreApplicationValidationSchemaType = Yup.InferType<
  typeof preApplicationValidationSchema
>;
