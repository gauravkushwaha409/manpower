import * as Yup from "yup";

export type ShramStatusType = "pending" | "approved" | "rejected";

const shramSchema = Yup.object().shape({
  candidate_name: Yup.string().required("This field is required"),
  candidate_job: Yup.string().required("This field is required"),
  employer_name: Yup.string().required("This field is required"),
  ols_reference_number: Yup.string().required("This field is required"),
  approval_date: Yup.string().required("This field is required"),
  approval_file: Yup.mixed<string | File>()
    .required("This field is required")
    .test("file-or-url", "Invalid icon", (value) => {
      if (typeof value === "string") {
        try {
          new URL(value);
          return true;
        } catch {
          return false;
        }
      }
      if (value instanceof File) return true;
      return false;
    }),
});

export type shramSchemaType = Yup.InferType<typeof shramSchema>;
export const shramValidationSchema = shramSchema;
