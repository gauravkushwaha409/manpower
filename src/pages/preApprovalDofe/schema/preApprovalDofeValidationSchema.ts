import * as Yup from "yup";

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

const preApprovalSchemaStep2 = Yup.object().shape({
  job_title: Yup.string().required("This field is required"),
  male: Yup.number()
    .typeError("Invalid number")
    .required("This field is required"),
  female: Yup.number()
    .typeError("Invalid number")
    .required("This field is required"),
  basic_salary_aed: Yup.number()
    .typeError("Invalid number")
    .required("This field is required"),
  basic_salary_nrp: Yup.number()
    .typeError("Invalid number")
    .required("This field is required"),
  working_hours: Yup.number()
    .typeError("Invalid number")
    .required("This field is required"),
  working_days: Yup.number()
    .typeError("Invalid number")
    .required("This field is required"),
  contract_period: Yup.number()
    .typeError("Invalid number")
    .required("This field is required"),
  working_city: Yup.string().required("This field is required"),
  // experience
  experience: Yup.boolean(),
  years: Yup.number().when("experience", (experience, schema) => {
    return experience
      ? schema
          .required("Years of experience is required")
          .min(0, "Years cannot be negative")
      : schema.notRequired();
  }),
  qualification: Yup.string().when("experience", (experience, schema) => {
    return experience
      ? schema.required("Qualification is required")
      : schema.notRequired();
  }),
  // Food
  food: Yup.boolean(),
  accomodation: Yup.boolean(),
  transportation: Yup.boolean(),
  free_visa: Yup.boolean(),
  free_ticket: Yup.boolean(),
  overtime: Yup.boolean(),
});

export const PreApprovalValidation = preApprovalSchemaStep1.concat(
  preApprovalSchemaStep2
);

export type PreApprovalDofeFormType = Yup.InferType<
  typeof PreApprovalValidation
>;
