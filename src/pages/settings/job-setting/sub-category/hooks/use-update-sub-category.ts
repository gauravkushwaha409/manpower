import { useUpdateDataMutation } from "@/api/api";
import { useUpdateModal } from "@/hooks/use-update-modal";
import { useFormik } from "formik";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { ApiResponse } from "@/api/api.error";
import { handleResponse } from "@/utils/handleResponse";
import useSubCategoryDetails from "./use-sub-category-details";
import {
  SubCategorySchemaType,
  SubCategoryValidationSchema,
} from "../schema/sub-category-schema";

const useUpdateSubCategory = () => {
  const { updateId, handleCloseModal } = useUpdateModal();
  const [updateSubCategory, { isLoading }] = useUpdateDataMutation();
  const { subCategoryDetails, isLoading: isInitialLoading } =
    useSubCategoryDetails({
      id: updateId ?? "",
    });

  const initialValues: SubCategorySchemaType = {
    industry: subCategoryDetails?.data?.industry || "",
    category: subCategoryDetails?.data?.category || "",
    sub_category: subCategoryDetails?.data?.industry || "",
    icon: subCategoryDetails?.data?.icon || "",
  };

  const formik = useFormik<SubCategorySchemaType>({
    initialValues,
    validationSchema: SubCategoryValidationSchema,
    onSubmit: async (values, { setErrors, resetForm }) => {
      const formData = new FormData();
      formData.append("industry", values.industry);
      formData.append("category", values.category);
      formData.append("sub_category", values.sub_category);
      if (values?.icon && values?.icon instanceof File)
        formData.append("icon", values.icon);

      const response = (await updateSubCategory({
        data: formData,
        url: endpoints.subCategory.update.replace(":id", updateId ?? ""),
        invalidateTag: [apiTags.subCategory.list, apiTags.subCategory.details],
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

export default useUpdateSubCategory;
