import * as Yup from "yup";
import { useFormik } from "formik";
import { usePostDataMutation } from "@/api/api";
import {IJobCategory} from "@/pages/jobs/jobCategory/interface/IJobCategory.ts";

const useJobCategory = () => {
 const [createCompany, { isError: isJobCategoryError, isLoading: isJobCategoryLoading, isSuccess: isJobCategorySuccess }] = usePostDataMutation();

 // Inital value
 const initialValues: IJobCategory = {
  id: "",
  title: "",
  description: "",
 };

 const addJobCategoriesFormik = useFormik({
  initialValues,
  validationSchema: jobCategoryValidation,
  onSubmit: async (values) => {
   createCompany({
    url: "",
    data: values,
    invalidateTag: "",
   });
  },
 });

 return { addJobCategoriesFormik, isJobCategoryError, isJobCategoryLoading, isJobCategorySuccess };
};

export default useJobCategory;

export const jobCategoryValidation = Yup.object().shape({
 title: Yup.string().required("Job title is required").min(2, "Job title must be at least 2 characters").max(100, "Job title must be less than 100 characters"),

 description: Yup.string()
  .required("Job description is required")
  .min(10, "Job description must be at least 10 characters")
  .max(1000, "Job description must be less than 1000 characters"),
});
