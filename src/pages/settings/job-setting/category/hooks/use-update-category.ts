import { useUpdateDataMutation } from "@/api/api";
import { useUpdateModal } from "@/hooks/use-update-modal";
import useCategoryDetails from "./use-category-details";
import {
  CategorySchemaType,
  CategoryValidationSchema,
} from "../schema/category-schema";
import { useFormik } from "formik";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { ApiResponse } from "@/api/api.error";
import { handleResponse } from "@/utils/handleResponse";

const useUpdateCategory = () => {
  const { updateId, handleCloseModal } = useUpdateModal();
  const [updateCategory, { isLoading }] = useUpdateDataMutation();
  const { categoryDetails, isLoading: isInitialLoading } = useCategoryDetails({
    id: updateId ?? "",
  });

  const initialValues: CategorySchemaType = {
    category: categoryDetails?.data?.category || "",
    industry: categoryDetails?.data?.industry || "",
    icon: categoryDetails?.data?.icon || "",
  };

  const formik = useFormik<CategorySchemaType>({
    initialValues,
    validationSchema: CategoryValidationSchema,
    onSubmit: async (value, { setErrors, resetForm }) => {
      const formData = new FormData();
      formData.append("industry", value.industry);
      formData.append("category", value.category);
      if (value?.icon && value?.icon instanceof File)
        formData.append("icon", value.icon);
      const response = (await updateCategory({
        data: formData,
        url: endpoints.category.update.replace(":id", updateId ?? ""),
        invalidateTag: [apiTags.category.list, apiTags.category.details],
      })) as ApiResponse;
      handleResponse({
        response,
        setErrorCallBack: setErrors,
        handleOnSuccess: () => {
          resetForm();
          handleCloseModal();
        }
      });
    },
  });
  return { formik, isLoading, isInitialLoading };
};

export default useUpdateCategory;
