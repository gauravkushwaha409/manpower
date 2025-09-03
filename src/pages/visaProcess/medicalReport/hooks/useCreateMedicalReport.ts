import { useFormik } from "formik";
import { usePostDataMutation } from "@/api/api";
import {
  medicalReportValidationSchema,
  MedicalReportValidationSchemaType,
} from "../schema/medicalReportValidationSchema";

const useCreateMedicalReport = () => {
  const [
    createVisa,
    {
      isError: isMedicalReportError,
      isLoading: isMedicalReportLoading,
      isSuccess: isMedicalReportSuccess,
    },
  ] = usePostDataMutation();

  const initialValues: MedicalReportValidationSchemaType = {
    id: "",
    name: "",
    hospital_name: "",
    report_date: new Date(),
    status: "",
    medical_report_file: "",
  };

  const formik = useFormik<MedicalReportValidationSchemaType>({
    initialValues,
    validationSchema: medicalReportValidationSchema,
    onSubmit: async (values) => {
      await createVisa({
        url: "/medical-report",
        data: values,
        invalidateTag: "",
      });
    },
  });

  return {
    formik,
    isMedicalReportLoading,
    isMedicalReportError,
    isMedicalReportSuccess,
  };
};

export default useCreateMedicalReport;
