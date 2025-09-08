import * as Yup from "yup";

export const policyValidationSchema = Yup.object().shape({
  id: Yup.string().required("Policy id is required"),

  policyType: Yup.string().required("Policy Type is required"),

  policyTitle: Yup.string().required("Policy Title is required"),

  policyDescription: Yup.string().required("Policy Description is required"),
});

export type PolicyValidationSchemaType = Yup.InferType<
  typeof policyValidationSchema
>;
