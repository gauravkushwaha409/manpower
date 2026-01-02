import * as Yup from "yup";

// ========================== Pre Approval Dofe Temporary Job Details ===================================
const tempJobDetails = Yup.object({
  job_title: Yup.string().required("This field is required"),
  male: Yup.string()
    .required("This field is required")
    .test(
      "is-valid-number",
      "Amount must be a valid number",
      (value) => value !== undefined && value !== "" && !isNaN(Number(value))
    ),
  female: Yup.string()
    .required("This field is required")
    .test(
      "is-valid-number",
      "Amount must be a valid number",
      (value) => value !== undefined && value !== "" && !isNaN(Number(value))
    ),
  basic_salary_aed: Yup.string()
    .required("This field is required")
    .test(
      "is-valid-number",
      "Amount must be a valid number",
      (value) => value !== undefined && value !== "" && !isNaN(Number(value))
    ),
  basic_salary_nrp: Yup.string()
    .required("This field is required")
    .test(
      "is-valid-number",
      "Amount must be a valid number",
      (value) => value !== undefined && value !== "" && !isNaN(Number(value))
    ),
  working_hours: Yup.string()
    .required("This field is required")
    .test(
      "is-valid-number",
      "Amount must be a valid number",
      (value) => value !== undefined && value !== "" && !isNaN(Number(value))
    ),
  working_days: Yup.string()
    .required("This field is required")
    .test(
      "is-valid-number",
      "Amount must be a valid number",
      (value) => value !== undefined && value !== "" && !isNaN(Number(value))
    ),
  contract_period: Yup.string()
    .required("This field is required")
    .test(
      "is-valid-number",
      "Amount must be a valid number",
      (value) => value !== undefined && value !== "" && !isNaN(Number(value))
    ),
  working_city: Yup.string().required("This field is required"),
  // experience
  experience: Yup.boolean().required("This field is required"),
  years: Yup.string()
    .required("This field is required")
    .test(
      "is-valid-number",
      "Amount must be a valid number",
      (value) => value !== undefined && value !== "" && !isNaN(Number(value))
    ),
  qualification: Yup.string().required("This field is required"),
});

// =========================== Pre Approval Dofe Job Details Item =====================================
const jobDetails = Yup.object({
  job_title: Yup.string().required("This field is required"),
  male: Yup.string().required(),
  female: Yup.string().required(),
  basic_salary_aed: Yup.string().required(),
  basic_salary_nrp: Yup.string().required(),
  working_hours: Yup.string().required(),
  working_days: Yup.string().required(),
  contract_period: Yup.string().required(),
  working_city: Yup.string().required(),
  experience: Yup.boolean().required(),
  years: Yup.string().required(),
  qualification: Yup.string().required(),
});

// ========================== Pre Approval Dofe Step - 1 ===================================
const preApprovalSchemaStep1 = Yup.object().shape({
  country: Yup.string().required("This field is required"),
  recuirtment_company: Yup.string().required("This field is required"),
  pre_approval_certificate_number: Yup.string().required(
    "This field is required"
  ),
  pre_approval_certificate_pdf: Yup.mixed<string | File>().test(
    "file-or-url",
    "Invalid icon",
    (value) => {
      if (!value) return true;
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
    }
  ),
  pre_approval_date: Yup.string().required("This field is required"),
  pre_approval_validity: Yup.string().required("This field is required"),
  pre_lt_number: Yup.string().required("This field is required"),
  chalani_number: Yup.string().required("This field is required"),
  // temporary store the document data
  document_type: Yup.string().required("This field is required").optional(),
  document: Yup.mixed<string | File>()
    .required("Document is required")
    .test("file-or-url", "Invalid document", (value) => {
      if (!value) return false; // required check
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

  // Step two form
  documents: Yup.array()
    .of(
      Yup.object({
        document_type: Yup.string().required("This field is required"),
        document: Yup.mixed<string | File>()
          .required("Document is required")
          .test("file-or-url", "Invalid document", (value) => {
            if (!value) return false; // required check
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
      })
    )
    .min(1, "This field is required"),
});

// ========================== Pre Approval Dofe Step - 2 ===================================
const preApprovalSchemaStep2 = Yup.object().shape({
  job_details: Yup.array().of(jobDetails).required().min(1, ""),
  temp_job_details: tempJobDetails,
  edit_index: Yup.number().nullable(),
});

// ========================== Pre Approval Dofe Step - 3 ===================================
const preApprovalSchemaStep3 = Yup.object().shape({
  food: Yup.boolean(),
  accomodation: Yup.boolean(),
  transportation: Yup.boolean(),
  free_visa: Yup.boolean(),
  free_ticket: Yup.boolean(),
  overtime: Yup.boolean(),
});

export const PreApprovalValidation = preApprovalSchemaStep1
  .concat(preApprovalSchemaStep2)
  .concat(preApprovalSchemaStep3);

export type PreApprovalJobListItem = Yup.InferType<typeof jobDetails>;

export type PreApprovalDofeFormType = Yup.InferType<
  typeof PreApprovalValidation
>;
