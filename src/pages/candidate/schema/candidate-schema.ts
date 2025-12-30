import * as Yup from "yup";

export type CandidateDocumentType =
  | "citizenship"
  | "passport"
  | "police_report";
export const CandidateDocument: CandidateDocumentType[] = [
  "citizenship",
  "passport",
  "police_report",
];

export const step1ValidationSchema = Yup.object({
  first_name: Yup.string().required("This field is required"),
  last_name: Yup.string().required("This field is required"),
  passport_no: Yup.string().required("This field is required"),
  date_of_birth: Yup.string().required("This field is required"),
  birth_place: Yup.string().required("This field is required"),
  father_name: Yup.string().required("This field is required"),
  mother_name: Yup.string().required("This field is required"),
  phone: Yup.string()
    .matches(/^\+?[0-9]{7,15}$/, "Phone number is not valid")
    .required("This field is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("This field is required"),
  province: Yup.string().required("This field is required"),
  district: Yup.string().required("This field is required"),
  municipality: Yup.string().required("This field is required"),
  ward_no: Yup.string().required("This field is required"),
});

export const step2ValidationSchema = Yup.object({
  skill: Yup.string().required("This field is required"),
  current_jobtitle: Yup.string().required("This field is required"),
  languages: Yup.array()
    .of(
      Yup.object({
        language: Yup.string().required("This field is required"),
        languageLevel: Yup.string().required("This field is required"),
      })
    )
    .required("This field is required")
    .min(1, "At least one language is required"),
  education: Yup.array()
    .of(
      Yup.object({
        name_of_institute: Yup.string().required("This field is required"),
        course: Yup.string().required("This field is required"),
        passed_year: Yup.string()
          .required("This field is required")
          .matches(/^\d{4}$/, "Year must be 4 digits"),
      })
    )
    .required("This field is required")
    .min(1, "At least education is required"),
});

const baseFields = {
  type: Yup.string()
    .oneOf<CandidateDocumentType>(CandidateDocument)
    .required("Document type is required"),

  document: Yup.mixed<string | File>()
    .required("This field is required")
    .test("file-or-url", "Invalid document", (value) => {
      if (!value) return false;

      if (typeof value === "string") {
        try {
          new URL(value);
          return true;
        } catch {
          return false;
        }
      }

      return value instanceof File;
    }),

  issue_date: Yup.string().required("This field is required"),
};

const citizenshipSchema = Yup.object({
  ...baseFields,
  citizenship_number: Yup.string().required("This field is required"),
});

const passportSchema = Yup.object({
  ...baseFields,
  passport_number: Yup.string().required("This field is required"),
  expire_date: Yup.string().required("This field is required"),
});

const policeReportSchema = Yup.object({
  ...baseFields,
  report_number: Yup.string().required("This field is required"),
});

export const step3ValidationSchema = Yup.object({
  document_type: Yup.string()
    .oneOf<CandidateDocumentType>(CandidateDocument)
    .required("Document type is required"),
  documents: Yup.array()
    .of(
      Yup.lazy((value: any) => {
        if (!value?.type) {
          return Yup.object({
            type: Yup.string().required("Document type is required"),
          });
        }

        switch (value.type) {
          case "citizenship":
            return citizenshipSchema;

          case "passport":
            return passportSchema;

          case "police_report":
            return policeReportSchema;

          default:
            return Yup.object().strip(true);
        }
      })
    )
    .required("This field is required")
    .min(1, "At least one document is required"),
});

export const step4ValidationSchema = Yup.object({
  applied_country: Yup.string().required("This field is required"),
  company_name: Yup.string().required("This field is required"),
  job_vacancy: Yup.string().required("This field is required"),
  interview_process: Yup.string().required("This field is required"),
  description: Yup.string().notRequired(),
});

export const candidateValidationSchema = step1ValidationSchema
  .concat(step2ValidationSchema)
  .concat(step3ValidationSchema)
  .concat(step4ValidationSchema);

export type Step1ValidationSchemaType = Yup.InferType<
  typeof step1ValidationSchema
>;
export type Step2ValidationSchemaType = Yup.InferType<
  typeof step2ValidationSchema
>;
export type Step3ValidationSchemaType = Yup.InferType<
  typeof step3ValidationSchema
>;
export type Step4ValidationSchemaType = Yup.InferType<
  typeof step4ValidationSchema
>;

export type CandidateSchemaType = Step1ValidationSchemaType &
  Step2ValidationSchemaType &
  Step3ValidationSchemaType &
  Step4ValidationSchemaType;
