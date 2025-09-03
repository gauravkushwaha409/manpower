import { useGetDataQuery, useUpdateDataMutation } from "@/api/api";
import { useFormik } from "formik";
import { IJobApplicant } from "../interface/IJobApplicant";
import { JobApplicantValidation } from "./useCreateJobApplicant";

const useUpdateJobApplicant = () => {
 const [updateJobApplicant, { isError: isUpdateJobApplicantError, isLoading: isUpdateJobApplicantLoading, isSuccess: isUpdateJobApplicantSuccess }] = useUpdateDataMutation();

 // Get Initial Data
 const {
  data,
  isError: isGetJobApplicantDetailsError,
  isLoading: isGetJobApplicantDetailsLoading,
  isSuccess: isGetJobApplicantDetailsSuccess,
 } = useGetDataQuery({ url: "", params: {}, tag: "" });

 const initial: IJobApplicant = data;

 const initialValues: IJobApplicant = {
  id: initial?.id || "",
  candidate_name: initial?.candidate_name || "",
  country: initial?.country || "",
  company_name: initial?.company_name || "",
  job_vacancy: initial?.job_vacancy || "",
  status: initial?.status || "",
  description: initial?.description || "",
 };

 const updateJobApplicantFormik = useFormik({
  initialValues,
  validationSchema: JobApplicantValidation,
  enableReinitialize: true,
  onSubmit: async (values) => {
   updateJobApplicant({
    data: values,
    url: "",
    invalidateTag: "",
   });
  },
 });

 return {
  data,
  updateJobApplicantFormik,
  isGetJobApplicantDetailsError,
  isGetJobApplicantDetailsLoading,
  isGetJobApplicantDetailsSuccess,
  isUpdateJobApplicantSuccess,
  isUpdateJobApplicantLoading,
  isUpdateJobApplicantError,
 };
};

export default useUpdateJobApplicant;
