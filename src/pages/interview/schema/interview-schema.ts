import * as Yup from "yup";

export type InterviewModeType = "offline" | "onsite";
export type InterviewResultType = "selected" | "rejected" | "pending";
export const InterviewMode: InterviewModeType[] = ["offline", "onsite"];
export const InterviewResult: InterviewResultType[] = [
  "pending",
  "selected",
  "rejected",
];

const interviewSchema = Yup.object().shape({
  candidate_name: Yup.string().required("This field is required"),
  candidate_job: Yup.string().required("This field is required"),
  employer_name: Yup.string().required("This field is required"),
  interview_date: Yup.string().required("This field is required"),
  interview_mode: Yup.string<InterviewModeType>()
    .oneOf(InterviewMode)
    .typeError("Invalid type")
    .required("This field is required"),
  interview_location: Yup.string().required("This field is required"),
  interviewer_name: Yup.string().when("interview_location", {
    is: (mode: InterviewModeType) => mode === "offline",
    then: (schema) => schema.required("This field is required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  result: Yup.string<InterviewResultType>()
    .oneOf(InterviewResult)
    .typeError("Invalid choice")
    .required("This field is required"),
  remarks: Yup.string().required("This field is required"),
});

export type InterviewSchemaType = Yup.InferType<typeof interviewSchema>;
export const InterviewValidationSchema = interviewSchema;
