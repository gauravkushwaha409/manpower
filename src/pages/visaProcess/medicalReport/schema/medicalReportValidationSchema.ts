import * as Yup from "yup";
export const medicalReportValidationSchema = Yup.object().shape({
  id: Yup.string().required("Candidate Id is required"),
  name: Yup.string()
    .required("Candidate Name is required")
    .min(3, "Candidate Name must be at least 3 characters"),
  hospital_name: Yup.string()
    .required("Hospital Name is required")
    .min(3, "Hospital Name must be at least 3 characters"),
  report_date: Yup.date()
    .required("Report Date is required")
    .max(new Date(), "Report Date cannot be in the future"),
  status: Yup.string()
    .required("Status is required")
    .oneOf(
      ["Pending", "Approved", "Rejected", "In Progress"],
      "Invalid status"
    ),
  medical_report_file: Yup.mixed()
    .required("Medical Report File is required")
    .test("fileType", "Only PDF, JPG, or PNG files are allowed", (value) => {
      if (!value) return false;
      const file = value as File;
      return ["application/pdf", "image/jpeg", "image/png"].includes(file.type);
    }),
});

export type MedicalReportValidationSchemaType = Yup.InferType<
  typeof medicalReportValidationSchema
>;
