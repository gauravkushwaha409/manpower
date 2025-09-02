import * as Yup from "yup";
import { useFormik } from "formik";
import { usePostDataMutation } from "@/api/api";
import { IJobApplicant } from "../interface/IJobApplicant";

const useCreateJobApplicant = () => {
 const [createJobApplicant, { isError: isJobApplicantError, isLoading: isJobApplicantLoading, isSuccess: isJobApplicantSuccess }] = usePostDataMutation();

 // Inital value
 const initialValues: IJobApplicant = {
  id: "",
  candidate_name: "",
  country: "",
  company_name: "",
  job_vacancy: "",
  status: "",
  description: "",
 };

 const addJobApplicantFormik = useFormik({
  initialValues,
  validationSchema: JobApplicantValidation,
  onSubmit: async (values) => {
   createJobApplicant({
    url: "",
    data: values,
    invalidateTag: "",
   });
  },
 });

 return { addJobApplicantFormik, isJobApplicantError, isJobApplicantLoading, isJobApplicantSuccess };
};

export default useCreateJobApplicant;

export const JobApplicantValidation = Yup.object().shape({
 candidate_name: Yup.string().required("Candidate Name is required").min(3, "Candidate Name must be at least 3 characters"),
 country: Yup.string().required("Country is required"),
 company_name: Yup.string().required("Company Name is required").min(2, "Company Name must be at least 2 characters"),
 job_vacancy: Yup.string().required("Job Vacancy is required"),
 status: Yup.string().required("Status is required"),
 description: Yup.string().required("Remarks is required").max(500, "Remarks cannot exceed 500 characters"),
});
