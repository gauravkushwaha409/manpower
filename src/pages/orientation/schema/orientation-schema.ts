import * as Yup from "yup";

const orientationSchema = Yup.object().shape({
  candidate_name: Yup.string().required("Candidate name is required"),
});

export type orientationSchemaType = Yup.InferType<typeof orientationSchema>;
export const orientationValidationSchema = orientationSchema;
