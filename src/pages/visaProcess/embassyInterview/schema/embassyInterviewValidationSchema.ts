import * as Yup from "yup";
export const embassyInterviewValidationSchema = Yup.object().shape({
  candidate_name: Yup.string()
    .required("Candidate Name is required")
    .min(3, "Candidate Name must be at least 3 characters"),
  embassy_name: Yup.string()
    .required("Embassy Name is required")
    .min(3, "Embassy Name must be at least 3 characters"),
  interview_date: Yup.date()
    .required("Interview Date is required")
    .min(new Date(), "Interview Date cannot be in the past"),
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

export type EmbassyInterviewValidationSchemaType = Yup.InferType<
  typeof embassyInterviewValidationSchema
>;
