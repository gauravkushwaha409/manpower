import { useFormik } from "formik";
import { usePostDataMutation } from "@/api/api";
import {
  industryValidationSchema,
  IndustryValidationSchemaType,
} from "../schema/industryValidationSchema";

const useCreateIndustry = () => {
  const [
    createIndustry,
    {
      isError: isIndustryError,
      isLoading: isIndustryLoading,
      isSuccess: isIndustrySuccess,
    },
  ] = usePostDataMutation();

  const initialValues: IndustryValidationSchemaType = {
    id: "",
    industry: "",
  };

  const formik = useFormik<IndustryValidationSchemaType>({
    initialValues,
    validationSchema: industryValidationSchema,
    onSubmit: async (values) => {
      await createIndustry({
        url: "/industry",
        data: values,
        invalidateTag: "",
      });
    },
  });

  return {
    formik,
    isIndustryError,
    isIndustryLoading,
    isIndustrySuccess,
  };
};

export default useCreateIndustry;
