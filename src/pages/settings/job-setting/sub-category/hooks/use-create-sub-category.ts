import { useFormik } from "formik";

import { usePostDataMutation } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { ApiResponse } from "@/api/api.error";
import { handleResponse } from "@/utils/handleResponse";
import { useAddModal } from "@/hooks/use-add-modal";
import {
  SubCategorySchemaType,
  SubCategoryValidationSchema,
} from "../schema/sub-category-schema";

const useCreateSubCategory = () => {
  const [createSubCategory, { isLoading }] = usePostDataMutation();
  const { handleCloseModal } = useAddModal();
  const initialValues: SubCategorySchemaType = {
    industry: "",
    category: "",
    sub_category: "",
    icon: undefined,
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

      const response = (await createSubCategory({
        url: endpoints.subCategory.create,
        data: formData,
        invalidateTag: [apiTags.subCategory.list],
      })) as ApiResponse;
      handleResponse({
        response,
        setErrorCallBack: setErrors,
        handleCloseModal,
        resetForm: resetForm,
      });
    },
  });

  return { formik, isLoading };
};

export default useCreateSubCategory;
