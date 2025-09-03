import * as Yup from "yup";
import { useFormik } from "formik";
import { usePostDataMutation } from "@/api/api";
import { IJobOffer } from "../interface/IJobOffer";

const useCreateJobOffer = () => {
 const [createJobOffer, { isError: isJobOfferError, isLoading: isJobOfferLoading, isSuccess: isJobOfferSuccess }] = usePostDataMutation();

 // Inital value
 const initialValues: IJobOffer = {
  id: "",
  candidate_name: "",
  company_name: "",
  job_vacancy: "",
  salary_offered: "",
  offer_date: "",
  start_date: "",
  status: "",
 };

 const addJobOfferFormik = useFormik({
  initialValues,
  validationSchema: JobOfferValidation,
  onSubmit: async (values) => {
   createJobOffer({
    url: "",
    data: values,
    invalidateTag: "",
   });
  },
 });

 return { addJobOfferFormik, isJobOfferError, isJobOfferLoading, isJobOfferSuccess };
};

export default useCreateJobOffer;

export const JobOfferValidation = Yup.object().shape({
 candidate_name: Yup.string().required("Candidate Name is required").min(3, "Candidate Name must be at least 3 characters"),
 company_name: Yup.string().required("Company Name is required").min(3, "Company Name must be at least 3 characters"),

 job_vacancy: Yup.string().required("Job Vacancy is required"),

 salary_offered: Yup.number().required("Salary Offered is required").positive("Salary must be a positive number").integer("Salary must be a whole number"),

 offer_date: Yup.date().required("Offer Date is required").typeError("Invalid date format"),

 start_date: Yup.date().required("Start Date is required").min(Yup.ref("offer_date"), "Start Date cannot be before Offer Date").typeError("Invalid date format"),

 status: Yup.string().required("Status is required").oneOf(["Pending", "Accepted", "Rejected"], "Invalid status"),
});
