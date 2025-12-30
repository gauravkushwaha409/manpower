import * as Yup from "yup";

export type OrientationStatusType = "attended" | "not-attended" | "schedule";
export const orientationStatus: OrientationStatusType[] = [
  "schedule",
  "attended",
  "not-attended",
];

const orientationSchema = Yup.object().shape({
  candidate_name: Yup.string().required("This field is required"),
  candidate_job: Yup.string().required("This field is required"),
  employer_name: Yup.string().required("This field is required"),
  institute_name: Yup.string().required("This field is required"),
  orientation_date: Yup.string().required("This field is required"),
  orientation_location: Yup.string().required("This field is required"),
  orientation_status: Yup.string<OrientationStatusType>()
    .oneOf(orientationStatus)
    .required("This field is required"),
});

export type orientationSchemaType = Yup.InferType<typeof orientationSchema>;
export const orientationValidationSchema = orientationSchema;
