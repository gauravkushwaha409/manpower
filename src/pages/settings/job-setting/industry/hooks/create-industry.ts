import { useFormik } from "formik";
import { usePostDataMutation } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import {
  IndustrySchemaType,
  IndustryValidationSchema,
} from "../schema/industry-schema";

const useCreateIndustry = () => {
  const [createIndustry, { isLoading }] = usePostDataMutation();

  const initialValues: IndustrySchemaType = {
    industry: "",
  };

  const formik = useFormik<IndustrySchemaType>({
    initialValues,
    validationSchema: IndustryValidationSchema,
    onSubmit: async (values) => {
      await createIndustry({
        url: endpoints.industry.create,
        data: values,
        invalidateTag: [apiTags.industry.list],
      });
    },
  });

  return {
    formik,
    isLoading,
  };
};

export default useCreateIndustry;
