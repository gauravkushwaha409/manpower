import * as Yup from "yup";

const jobOfferSchema = Yup.object().shape({
  candidate_name: Yup.string().required("Candidate name is required"),
});

export type JobOfferSchemaType = Yup.InferType<typeof jobOfferSchema>;
export const JobOfferValidationSchema = jobOfferSchema;
