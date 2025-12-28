import * as Yup from "yup";

const medicalSchema = Yup.object().shape({
  candidate_name: Yup.string().required("Candidate name is required"),
});

export type medicalSchemaType = Yup.InferType<typeof medicalSchema>;
export const medicalValidationSchema = medicalSchema;
