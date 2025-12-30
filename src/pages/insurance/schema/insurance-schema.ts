import * as Yup from "yup";

const insuranceSchema = Yup.object().shape({
  candidate_name: Yup.string().required("This field is required"),
  insurance_company: Yup.string().required("This field is required"),
  policy_no: Yup.string().required("This field is required"),
  valid_from: Yup.string().required("This field is required"),
  valid_to: Yup.string().required("This field is required"),
  document: Yup.string().required("This field is required"),
});

export type insuranceSchemaType = Yup.InferType<typeof insuranceSchema>;
export const insuranceValidationSchema = insuranceSchema;
