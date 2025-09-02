import * as Yup from "yup";
import { useFormik } from "formik";
import { usePostDataMutation } from "@/api/api";
import { IJobInterview } from "../interface/IJobInterview";

const useCreateJobInterview = () => {
 const [createJobInterview, { isError: isJobInterviewError, isLoading: isJobInterviewLoading, isSuccess: isJobInterviewSuccess }] = usePostDataMutation();

 // Inital value
 const initialValues: IJobInterview = {
  id: "",
  company_name: "",
  candidate_name: "",
  job_vacancy: "",
  interviewer: "",
  salary_offered: "",
  interview_date_time: "",
  status: "",
  remarks: "",
 };

 const addJobInterviewFormik = useFormik({
  initialValues,
  validationSchema: jobInterviewValidation,
  onSubmit: async (values) => {
   createJobInterview({
    url: "",
    data: values,
    invalidateTag: "",
   });
  },
 });

 return { addJobInterviewFormik, isJobInterviewError, isJobInterviewLoading, isJobInterviewSuccess };
};

export default useCreateJobInterview;

export const jobInterviewValidation = Yup.object().shape({
 company_name: Yup.string().required("Company Name is required").min(3, "Company Name must be at least 3 characters"),
 candidate_name: Yup.string().required("Candidate Name is required").min(3, "Candidate Name must be at least 3 characters"),
 job_vacancy: Yup.string().required("Job Vacancy is required"),
 interviewer: Yup.string().required("Interviewer name is required"),
 salaryOffered: Yup.string().required("Salary Offered is required"),
 date: Yup.date().required("Date is required").typeError("Invalid date format"),
 time: Yup.string()
  .required("Time is required")
  .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Time must be in HH:mm format"),
 status: Yup.string().required("Status is required").oneOf(["Pending", "Accepted", "Rejected"], "Invalid status"),
 remarks: Yup.string(),
});
