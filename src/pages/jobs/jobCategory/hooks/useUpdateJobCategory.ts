import { useGetDataQuery, useUpdateDataMutation } from "@/api/api";
import { IPreApplication } from "@/pages/pre-application/interface/IPreApplication";
import { useFormik } from "formik";
import {jobCategoryValidation} from "@/pages/jobs/jobCategory/hooks/useCreateJobCategory.ts";
import {IJobCategory} from "@/pages/jobs/jobCategory/interface/IJobCategory.ts";

const useUpdateJobCategory = () => {
 const [updateJobCategory, { isError: isUpdateJobCategoryError, isLoading: isUpdateJobCategoryLoading, isSuccess: isUpdateJobCategorySuccess }] = useUpdateDataMutation();

 // Get Initial Data
 const {
  data,
  isError: isGetJobCategoryDetailsError,
  isLoading: isGetJobCategoryDetailsLoading,
  isSuccess: isGetJobCategoryDetailsSuccess,
 } = useGetDataQuery({ url: "", params: {}, tag: "" });

 const initial: IPreApplication = data;

 const initialValues: IJobCategory = {
  id: initial?.id || "",
  title: initial?.title || "",
  description: initial?.description || "",
 };

 const updateJobCategoryFormik = useFormik({
  initialValues,
  validationSchema: jobCategoryValidation,
  enableReinitialize: true,
  onSubmit: async (values) => {
   updateJobCategory({
    data: values,
    url: "",
    invalidateTag: "",
   });
  },
 });

 return {
  data,
  updateJobCategoryFormik,
  isGetJobCategoryDetailsError,
  isGetJobCategoryDetailsLoading,
  isGetJobCategoryDetailsSuccess,
  isUpdateJobCategorySuccess,
  isUpdateJobCategoryLoading,
  isUpdateJobCategoryError,
 };
};

export default useUpdateJobCategory;
