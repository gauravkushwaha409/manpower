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

const preApprovalSchemaStep2 = Yup.object().shape({
  job_details: Yup.array()
    .of(
      Yup.object({
        job_title: Yup.string().required("This field is required"),
        male: Yup.number().nullable(),
        female: Yup.number().nullable(),
        basic_salary_aed: Yup.number().nullable(),
        basic_salary_nrp: Yup.number().nullable(),
        working_hours: Yup.number().nullable(),
        working_days: Yup.number().nullable(),
        contract_period: Yup.number().nullable(),
        working_city: Yup.string().nullable(),
        // experience
        experience: Yup.boolean().nullable(),
        years: Yup.number().nullable(),
        qualification: Yup.string().nullable(),
      })
    )
    .required()
    .min(1, ""),
});

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

type PreApprovalJob = Yup.InferType<typeof preApprovalSchemaStep2>;
export type PreApprovalJobDetails = PreApprovalJob["job_details"][0];

export type PreApprovalDofeFormType = Yup.InferType<
  typeof PreApprovalValidation
> &
  PreApprovalJobDetails;
