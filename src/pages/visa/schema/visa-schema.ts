import * as Yup from "yup";

const visaSchema = Yup.object().shape({
  candidate_name: Yup.string().required("This field is required"),
  candidate_job: Yup.string().required("This field is required"),
  visa_type: Yup.string().required("This field is required"),
  application_date: Yup.string().required("This field is required"),
  approval_date: Yup.string().required("This field is required"),
  visa_expire: Yup.string().required("This field is required"),
  status: Yup.string().required("This field is required"),
  visa_file: Yup.mixed<string | File>()
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

export type visaSchemaType = Yup.InferType<typeof visaSchema>;
export const visaValidationSchema = visaSchema;
