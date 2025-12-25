import { useFormik } from "formik";
import {
  CategorySchemaType,
  CategoryValidationSchema,
} from "../schema/category-schema";
import { usePostDataMutation } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { ApiResponse } from "@/api/api.error";
import { handleResponse } from "@/utils/handleResponse";
import { useAddModal } from "@/hooks/add-modal";

const useCreateCategory = () => {
  const [createCategory, { isLoading }] = usePostDataMutation();
  const { handleCloseModal } = useAddModal();
  const initialValues: CategorySchemaType = {
    category: "",
    industry: "",
    icon: undefined,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: CategoryValidationSchema,
    onSubmit: async (values, { setErrors }) => {
      const response = (await createCategory({
        url: endpoints.category.create,
        data: values,
        invalidateTag: [apiTags.category.list],
      })) as ApiResponse;
      handleResponse({
        response,
        setErrorCallBack: setErrors,
        handleCloseModal,
      });
    },
  });

  return { formik, isLoading };
};

export default useCreateCategory;
