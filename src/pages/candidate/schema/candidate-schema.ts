import { IOption } from "@/components/form/form-input-select";
import * as Yup from "yup";

export const candidateDocuments = [
  "citizenship",
  "passport",
  "police_report",
  'national_id',
  'resume'
] as const
export type CandidateDocumentOptionType = typeof candidateDocuments[number]

const validateFileOrUrl = (value: any) => {
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
};

export const candidateDocumentOptions: IOption<CandidateDocumentOptionType>[] = [
  { label: "Citizenship", value: "citizenship" },
  { label: "Passport", value: "passport" },
  { label: "Police Report", value: "police_report" },
  { label: "National ID", value: "national_id" },
  { label: "Resume", value: "resume" }
] as const

// ============== Step - 1 Validation Schema ====================
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

// ============== Step - 2 Validation Schema ====================
export const step2ValidationSchema = Yup.object({
  skill: Yup.string().trim().required("This field is required"),
  current_jobtitle: Yup.string().trim().required("This field is required"),
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
        name_of_institute: Yup.string().trim().required("This field is required"),
        course: Yup.string().required("This field is required"),
        passed_year: Yup.string()
          .trim()
          .required("This field is required")
          .matches(/^\d{4}$/, "Year must be 4 digits"),
      })
    )
    .required("This field is required")
    .min(1, "At least education is required"),
});
// ============== Step - 3 work experience Validation Schema ====================
const workExperienceSchema = Yup.object({
  job_title: Yup.string().trim().required("This field is required"),
  company_name: Yup.string().trim().required("This field is required"),
  job_level: Yup.string().trim().required("This field is required"),
  currently_working: Yup.boolean().required("This field is required"),
  start_date: Yup.string().trim().required("This field is required"),
  end_date: Yup.string().trim().required("This field is required"),
  description: Yup.string().trim().required("This field is required"),
});

export const step3ValidationSchema = Yup.object({
  tempWorkExperience: workExperienceSchema,
  workExperience: Yup.array()
    .of(workExperienceSchema)
    .min(1, "At least one work experience is required")
    .required(),
  edit_work_experience_index: Yup.number().nullable(),
});

// ============== Step - 4 Education Details Validation Schema ====================
const educationDetailsSchema = Yup.object({
  degree: Yup.string().trim().required("This field is required"),
  institute_name: Yup.string().trim().required("This field is required"),
  faculty_name: Yup.string().trim().required("This field is required"),
  currently_studying: Yup.boolean().required("This field is required"),
  start_date: Yup.string().trim().required("This field is required"),
  end_date: Yup.string().trim().required("This field is required"),
})

export const step4ValidationSchema = Yup.object({
  tempEducationDetails: educationDetailsSchema,
  educationDetails: Yup.array()
    .of(educationDetailsSchema)
    .min(1, "At least one education detail is required")
    .required(),
  edit_education_index: Yup.number().nullable(),
})
// ============== Step - 5 Certificate Validation Schema ====================
const certificateSchema = Yup.object({
  certificate_title: Yup.string().trim().required("This field is required"),
  organization_name: Yup.string().trim().required("This field is required"),
  description: Yup.string().trim().required("This field is required"),
  certificate_file: Yup.mixed<string | File>()
    .required("This field is required")
    .test("file-or-url", "Invalid document", validateFileOrUrl),
})
export const step5ValidationSchema = Yup.object({
  tempCertificate: certificateSchema,
  certificates: Yup.array()
    .of(certificateSchema)
    .min(1, "At least one certificate is required")
    .required(),
  edit_certificate_index: Yup.number().nullable(),
})

// ============== Step - 6 Validation Schema ====================
const citizenshipSchema = Yup.object({
  citizenship_number: Yup.string().trim().required("This field is required"),
  issued_district: Yup.string().trim().required("This field is required"),
});

const passportSchema = Yup.object({
  passport_number: Yup.string().trim().required("This field is required"),
  expire_date: Yup.string().trim().required("This field is required"),
});

const policeReportSchema = Yup.object({
  report_number: Yup.string().trim().required("This field is required"),
});

const tempDocument = Yup.object().shape({
  type: Yup.string()
    .oneOf<CandidateDocumentOptionType>(candidateDocuments)
    .required("Document type is required"),
  document: Yup.mixed<string | File>()
    .required("This field is required")
    .test("file-or-url", "Invalid document", validateFileOrUrl),
  // ============ Citizenship Validation ============
  citizenship_issued_date: Yup.string().trim().when("tempDocument.type", {
    is: (documentType: CandidateDocumentOptionType) => documentType === "citizenship",
    then: (schema) => schema.required("This field is required"),
    otherwise: (schema) => schema.notRequired()
  }),
  citizenship_issued_district: Yup.string().trim().when("tempDocument.type", {
    is: (documentType: CandidateDocumentOptionType) => documentType === "citizenship",
    then: (schema) => schema.required("This field is required"),
    otherwise: (schema) => schema.notRequired()
  }),
  citizenship_number: Yup.string().trim().when("tempDocument.type", {
    is: (documentType: CandidateDocumentOptionType) => documentType === "citizenship",
    then: (schema) => schema.required("This field is required"),
    otherwise: (schema) => schema.notRequired()
  }),
  // =========== Passport Validation ===========
  passport_issued_date: Yup.string().trim().when("tempDocument.type", {
    is: (documentType: CandidateDocumentOptionType) => documentType === 'passport',
    then: (schema) => schema.required("This field is required"),
    otherwise: (schema) => schema.notRequired()
  }),
  passport_expiry_date: Yup.string().trim().when("tempDocument.type", {
    is: (documentType: CandidateDocumentOptionType) => documentType === 'passport',
    then: (schema) => schema.required("This field is required"),
    otherwise: (schema) => schema.notRequired()
  }),
  passport_number: Yup.string().trim().when("tempDocument.type", {
    is: (documentType: CandidateDocumentOptionType) => documentType === 'passport',
    then: (schema) => schema.required("This field is required"),
    otherwise: (schema) => schema.notRequired()
  }),

  // =========== Police Report Validation ===========
  police_report_issued_date: Yup.string().trim().when("tempDocument.type", {
    is: (documentType: CandidateDocumentOptionType) => documentType === 'police_report',
    then: (schema) => schema.required("This field is required"),
    otherwise: (schema) => schema.notRequired()
  }),
  police_report_dispatch_number: Yup.string().trim().when("tempDocument.type", {
    is: (documentType: CandidateDocumentOptionType) => documentType === 'police_report',
    then: (schema) => schema.required("This field is required"),
    otherwise: (schema) => schema.notRequired()
  })
})

const baseDocumentSchema = Yup.object({
  type: Yup.string()
    .oneOf(
      ["citizenship", "passport", "police_report"],
      "Invalid document type"
    )
    .required("Document type is required"),
  document: Yup.mixed<string | File>()
    .required("This field is required")
    .test("file-or-url", "Invalid document", validateFileOrUrl),
});

// ============== Step - 6 Validation Schema ====================
export const step6ValidationSchema = Yup.object({
  tempDocument: tempDocument,
  documents: Yup.array()
    .of(
      Yup.lazy((value: any) => {
        switch (value.type) {
          case "citizenship":
            return baseDocumentSchema.concat(citizenshipSchema);

          case "passport":
            return baseDocumentSchema.concat(passportSchema);

          case "police_report":
            return baseDocumentSchema.concat(policeReportSchema);
          default:
            return baseDocumentSchema
        }
      })
    )
    .required("This field is required")
    .min(1, "At least one document is required"),
});

// =============== Step - 7 Validation Schema ===========
export const step7ValidationSchema = Yup.object({
  applied_country: Yup.string().required("This field is required"),
  company_name: Yup.string().required("This field is required"),
  job_vacancy: Yup.string().required("This field is required"),
  interview_process: Yup.string().required("This field is required"),
  description: Yup.string().notRequired(),
});

export const candidateValidationSchema = step1ValidationSchema
  .concat(step2ValidationSchema)
  .concat(step3ValidationSchema)
  .concat(step4ValidationSchema)
  .concat(step5ValidationSchema)
  .concat(step6ValidationSchema)
  .concat(step7ValidationSchema);

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

export type Step5ValidationSchemaType = Yup.InferType<
  typeof step5ValidationSchema
>;
export type Step6ValidationSchemaType = Yup.InferType<
  typeof step6ValidationSchema
>;
export type Step7ValidationSchemaType = Yup.InferType<
  typeof step7ValidationSchema
>;

export type CandidateSchemaType = Step1ValidationSchemaType &
  Step2ValidationSchemaType &
  Step3ValidationSchemaType &
  Step4ValidationSchemaType &
  Step5ValidationSchemaType &
  Step6ValidationSchemaType &
  Step7ValidationSchemaType;
