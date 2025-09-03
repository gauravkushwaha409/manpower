import { useGetDataQuery, useUpdateDataMutation } from "@/api/api";
import { useFormik } from "formik";
import {
  medicalReportValidationSchema,
  MedicalReportValidationSchemaType,
} from "../schema/medicalReportValidationSchema";

const useUpdateMedicalReport = () => {
  const [
    updateMedicalReport,
    {
      isError: isUpdateMedicalReportError,
      isLoading: isUpdateMedicalReportLoading,
      isSuccess: isUpdateMedicalReportSuccess,
    },
  ] = useUpdateDataMutation();

  const {
    data,
    isError: isGetMedicalReportError,
    isLoading: isGetMedicalReportLoading,
    isSuccess: isGetMedicalReportSuccess,
  } = useGetDataQuery({
    url: "/medical-report",
    params: {},
    tag: "",
  });

  const initial: MedicalReportValidationSchemaType = data;

  const initialValues: MedicalReportValidationSchemaType = {
    id: initial?.id || "",
    name: initial?.name || "",
    hospital_name: initial?.hospital_name || "",
    report_date: initial?.report_date || "",
    status: initial?.status || "",
    medical_report_file: initial?.medical_report_file || "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: medicalReportValidationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      updateMedicalReport({
        data: values,
        url: `/medical-report/${values?.id}`,
        invalidateTag: "",
      });
    },
  });

  return {
    data,
    formik,
    isGetMedicalReportError,
    isGetMedicalReportLoading,
    isGetMedicalReportSuccess,
    isUpdateMedicalReportSuccess,
    isUpdateMedicalReportLoading,
    isUpdateMedicalReportError,
  };
};

export default useUpdateMedicalReport;
