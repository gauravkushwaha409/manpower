import * as Yup from "yup";

export const step1ValidationSchema = Yup.object({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  agent_name: Yup.string().required("Agent name is required"),
  date_of_birth: Yup.string().required("Date of birth is required"),
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
  documents: Yup.array()
    .of(
      Yup.object({
        type: Yup.string()
          .oneOf<"citizenship" | "passport" | "police_report">([
            "citizenship",
            "passport",
            "police_report",
          ])
          .required("Document Type is required"),

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
        issueDate: Yup.string().required("Issue date is required"),
        expireDate: Yup.string().when("type", {
          is: "passport",
          then: (schema) => schema.required("Expire date is required"),
          otherwise: (schema) => schema.nullable().notRequired(),
        }),
      })
    )
    .min(1, "At least one docuemnt is required"),
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
