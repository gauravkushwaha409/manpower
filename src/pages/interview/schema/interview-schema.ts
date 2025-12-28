import * as Yup from "yup";

const interviewSchema = Yup.object().shape({
  candidate_name: Yup.string().required("Candidate name is required"),
});

export type InterviewSchemaType = Yup.InferType<typeof interviewSchema>;
export const InterviewValidationSchema = interviewSchema;
