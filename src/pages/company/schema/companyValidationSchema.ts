import * as Yup from "yup";

export const companyValidationSchema = Yup.object().shape({
  id: Yup.string().required("Company id is required"),
  recruitment_company: Yup.string().required("Company name is required"),
  license_number: Yup.string().required("License number is required"),
  country: Yup.string().required("Country is required"),
  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required"),
  street: Yup.string().required("Street is required"),
  area: Yup.string().required("Area is required"),
  currency: Yup.string().required("Currency is required"),
  contact_number: Yup.string().required("Contact person is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  office_address: Yup.string().required("Office address is required"),
  website_url: Yup.string()
    .url("Invalid URL format")
    .required("Website URL is required"),
});

export type CompanyValidationSchemaType = Yup.InferType<
  typeof companyValidationSchema
>;
