import * as Yup from "yup";

export const orientationValidationSchema = Yup.object().shape({
  id: Yup.string().required("Candidate Id is required"),
  candidate_name: Yup.string()
    .required("Candidate Name is required")
    .min(3, "Candidate Name must be at least 3 characters"),

  orientation_center_name: Yup.string()
    .required("Orientation Center Name is required")
    .min(3, "Orientation Center Name must be at least 3 characters"),

  certificate_no: Yup.string()
    .required("Certificate Number is required")
    .matches(/^[A-Z0-9-]+$/, "Certificate Number must be alphanumeric"),

  start_date: Yup.date()
    .required("Start Date is required")
    .max(Yup.ref("end_date"), "Start Date cannot be after End Date"),

  end_date: Yup.date()
    .required("End Date is required")
    .min(Yup.ref("start_date"), "End Date cannot be before Start Date"),
});

export type OrientationValidationSchemaType = Yup.InferType<
  typeof orientationValidationSchema
>;
