import * as Yup from "yup";

export const companyValidationSchema = Yup.object().shape({
  recruitment_company: Yup.string().required("This field is required"),
  country: Yup.string().required("This field is required"),
  sector: Yup.string().required("This field is required"),
  currency: Yup.string().required("This field is required"),
  license_number_name: Yup.string().required("This field is required"),
  license_number: Yup.string().required("This field is required"),
  license_issue_by: Yup.string().required("This field is required"),
  license_image: Yup.mixed<string | File>()
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
  state_region: Yup.string().required("This field is required"),
  city: Yup.string().required("This field is required"),
  street: Yup.string().required("This field is required"),
  area: Yup.string().required("This field is required"),
  contact_person_name: Yup.string().required("This field is required"),
  contact_number: Yup.string().required("This field is required"),
  email: Yup.string().required("This field is required"),
  office_address: Yup.string().required("This field is required"),
  website_url: Yup.string().required("This field is required"),
});

export type CompanyValidationSchemaType = Yup.InferType<
  typeof companyValidationSchema
>;
