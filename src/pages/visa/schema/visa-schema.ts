import * as Yup from "yup";

const visaSchema = Yup.object().shape({
  candidate_name: Yup.string().required("Candidate name is required"),
});

export type visaSchemaType = Yup.InferType<typeof visaSchema>;
export const visaValidationSchema = visaSchema;
