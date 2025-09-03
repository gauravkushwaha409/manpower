import * as Yup from "yup";
export const dofeValidationSchema = Yup.object().shape({
  id: Yup.string().required("Candidate Id is required"),
  candidate_name: Yup.string()
    .required("Candidate Name is required")
    .min(3, "Candidate Name must be at least 3 characters"),
  sticker_no: Yup.string()
    .required("Sticker No. is required")
    .matches(/^[A-Za-z0-9]+$/, "Sticker No. must be alphanumeric"),
  job_vacancy: Yup.string().required("Job Vacancy is required"),
  country: Yup.string().required("Country is required"),
  company: Yup.string()
    .required("Company Name is required")
    .min(3, "Company Name must be at least 3 characters"),
});

export type DOFEValidationSchemaType = Yup.InferType<
  typeof dofeValidationSchema
>;
