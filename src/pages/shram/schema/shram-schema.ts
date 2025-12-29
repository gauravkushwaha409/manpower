import * as Yup from "yup";

const shramSchema = Yup.object().shape({
  candidate_name: Yup.string().required("Candidate name is required"),
});

export type shramSchemaType = Yup.InferType<typeof shramSchema>;
export const shramValidationSchema = shramSchema;
