import { useUpdateDataMutation } from "@/api/api";
import { useFormik } from "formik";
import {
  IndustrySchemaType,
  IndustryValidationSchema,
} from "../schema/industry-schema";
import { useUpdateModal } from "@/hooks/use-update-modal";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";

const useUpdateIndustry = () => {
  const [updateIndustry, { isLoading }] = useUpdateDataMutation();
  const { updateId } = useUpdateModal();

  const initialValues: IndustrySchemaType = {
    industry: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: IndustryValidationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      updateIndustry({
        data: values,
        url: endpoints.industry.update.replace(":id", updateId ?? ""),
        invalidateTag: [apiTags.industry.list, apiTags.industry.details],
      });
    },
  });

  return {
    formik,
    updateIndustry,
    isLoading,
  };
};

export default useUpdateIndustry;
