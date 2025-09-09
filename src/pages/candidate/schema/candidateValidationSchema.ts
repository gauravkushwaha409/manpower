import * as Yup from "yup";

export const step1ValidationSchema = Yup.object({
  id: Yup.string().required("ID is required"),
  firstname: Yup.string().required("First name is required"),
  lastname: Yup.string().required("Last name is required"),
  agentName: Yup.string().required("Agent name is required"),
  dateOfBirth: Yup.string().required("Date of birth is required"),
  phone: Yup.string()
    .matches(/^\+?[0-9]{7,15}$/, "Phone number is not valid")
    .required("Phone is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  country: Yup.string().required("Country is required"),
  province: Yup.string().required("Province is required"),
  district: Yup.string().required("District is required"),
  municipality: Yup.string().required("Municipality is required"),
  wardNo: Yup.string().required("Ward number is required"),

  languages: Yup.array()
    .of(
      Yup.object({
        language: Yup.string().required("Language is required"),
        languageLevel: Yup.string().required("Language level is required"),
      })
    )
    .min(1, "At least one language is required"),
});

export const step2ValidationSchema = Yup.object({
  skills: Yup.string().required("Skills are required"),
  current_jobtitle: Yup.string().required("Current job title is required"),
  education: Yup.array().of(
    Yup.object({
      name_of_instute: Yup.string().required("Institute name is required"),
      course: Yup.string().required("Course is required"),
      passed_year: Yup.string()
        .required("Passed year is required")
        .matches(/^\d{4}$/, "Year must be 4 digits"),
    })
  ),
});

export const step3ValidationSchema = Yup.object({
  document_type: Yup.string().required("Document type is required"),
  citizenship_issue_date: Yup.string().when("document_type", {
    is: "citizenship",
    then: (schema) =>
      schema
        .required("Citizenship issue date is required")
        .matches(/^\d{4}-\d{2}-\d{2}$/, "Must be in YYYY-MM-DD format"),
  }),
  citizenship_number: Yup.string().when("document_type", {
    is: "citizenship",
    then: (schema) =>
      schema
        .required("Citizen number is required")
        .matches(/^[A-Za-z0-9]+$/, "Must be alphanumeric"),
  }),
  passport_issued_date: Yup.string().when("document_type", {
    is: "passport",
    then: (schema) =>
      schema
        .required("Passport issue date is required")
        .matches(/^\d{4}-\d{2}-\d{2}$/, "Must be in YYYY-MM-DD format"),
  }),
  passport_expiry_date: Yup.string().when("document_type", {
    is: "passport",
    then: (schema) =>
      schema
        .required("Passport expiry date is required")
        .matches(/^\d{4}-\d{2}-\d{2}$/, "Must be in YYYY-MM-DD format")
        .test(
          "is-after-issue-date",
          "Must be after issue date",
          function (value) {
            const { passport_issued_date } = this.parent;
            if (!passport_issued_date || !value) return true;
            return new Date(value) > new Date(passport_issued_date);
          }
        ),
  }),
  passport_number: Yup.string().when("document_type", {
    is: "passport",
    then: (schema) =>
      schema
        .required("Passport number is required")
        .matches(/^[A-Za-z0-9]+$/, "Must be alphanumeric"),
  }),
  police_report_issued_date: Yup.string().when("document_type", {
    is: "police_report",
    then: (schema) =>
      schema
        .required("Police report issue date is required")
        .matches(/^\d{4}-\d{2}-\d{2}$/, "Must be in YYYY-MM-DD format"),
  }),
  dispatch_number: Yup.string().when("document_type", {
    is: "police_report",
    then: (schema) =>
      schema
        .required("Dispatch number is required")
        .matches(/^[A-Za-z0-9]+$/, "Must be alphanumeric"),
  }),

  passport_file: Yup.mixed<File>().required("A file is required"),
  document: Yup.mixed<File>().required("A file is required"),
});

export const candidateValidationSchema = step1ValidationSchema
  .concat(step2ValidationSchema)
  .concat(step3ValidationSchema);

export type Step1ValidationSchemaType = Yup.InferType<
  typeof step1ValidationSchema
>;
export type Step2ValidationSchemaType = Yup.InferType<
  typeof step2ValidationSchema
>;
export type Step3ValidationSchemaType = Yup.InferType<
  typeof step3ValidationSchema
>;

export type CandidateValidationSchemaType = Step1ValidationSchemaType &
  Step2ValidationSchemaType &
  Step3ValidationSchemaType;
