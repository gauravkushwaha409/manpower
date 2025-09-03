import * as Yup from "yup";

export const visaValidationSchema = Yup.object().shape({
  id: Yup.string().required("Candidate Id is required"),
  candidate_name: Yup.string()
    .required("Candidate Name is required")
    .min(3, "Candidate Name must be at least 3 characters"),
  company_name: Yup.string()
    .required("Company Name is required")
    .min(3, "Company Name must be at least 3 characters"),
  job_vacancy: Yup.string()
    .required("Job Vacancy is required")
    .min(3, "Job Vacancy must be at least 3 characters"),
  visa_number: Yup.string()
    .required("Visa Number is required")
    .matches(
      /^[A-Z0-9]{8,12}$/,
      "Visa Number must be 8-12 alphanumeric characters"
    ),
  status: Yup.string()
    .required("Status is required")
    .oneOf(
      ["Pending", "Approved", "Rejected", "In Progress"],
      "Invalid status"
    ),
});

export type VisaValidationSchemaType = Yup.InferType<
  typeof visaValidationSchema
>;
