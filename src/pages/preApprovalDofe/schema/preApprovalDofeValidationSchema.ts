import * as Yup from "yup";

export const preApprovalDofeValidationSchema = Yup.object().shape({
  company: Yup.string().required("Company is required"),
  preApprovalDate: Yup.string().required("Pre Approval Date is required"),
  ltNumber: Yup.string().required("LT Number is required"),
  chalanNumber: Yup.string().required("Chalan Number is required"),
});

export type PreApprovalDofeValidationSchemaType = Yup.InferType<
  typeof preApprovalDofeValidationSchema
>;
