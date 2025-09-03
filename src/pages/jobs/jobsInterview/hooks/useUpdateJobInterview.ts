import { useGetDataQuery, useUpdateDataMutation } from "@/api/api";
import { useFormik } from "formik";
import { IJobInterview } from "../interface/IJobInterview";
import { jobInterviewValidation } from "./useCreateJobInterview";

const useUpdateJobInterview = () => {
 const [updateJobInterview, { isError: isUpdateJobInterviewError, isLoading: isUpdateJobInterviewLoading, isSuccess: isUpdateJobInterviewSuccess }] = useUpdateDataMutation();

 // Get Initial Data
 const {
  data,
  isError: isGetJobInterviewDetailsError,
  isLoading: isGetJobInterviewDetailsLoading,
  isSuccess: isGetJobInterviewDetailsSuccess,
 } = useGetDataQuery({ url: "", params: {}, tag: "" });

 const initial: IJobInterview = data;

 const initialValues: IJobInterview = {
  id: initial?.id || "",
  company_name: initial?.company_name || "",
  candidate_name: initial?.candidate_name || "",
  job_vacancy: initial?.job_vacancy || "",
  interviewer: initial?.interviewer || "",
  salary_offered: initial?.salary_offered || "",
  interview_date_time: initial?.interview_date_time || "",
  status: initial?.status || "",
  remarks: initial?.remarks || "",
 };

 const updateJobInterviewFormik = useFormik({
  initialValues,
  validationSchema: jobInterviewValidation,
  enableReinitialize: true,
  onSubmit: async (values) => {
   updateJobInterview({
    data: values,
    url: "",
    invalidateTag: "",
   });
  },
 });

 return {
  data,
  updateJobInterviewFormik,
  isGetJobInterviewDetailsError,
  isGetJobInterviewDetailsLoading,
  isGetJobInterviewDetailsSuccess,
  isUpdateJobInterviewSuccess,
  isUpdateJobInterviewLoading,
  isUpdateJobInterviewError,
 };
};

export default useUpdateJobInterview;
