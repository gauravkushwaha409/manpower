import { useGetDataQuery, useUpdateDataMutation } from "@/api/api";
import { useFormik } from "formik";
import {
  industryValidationSchema,
  IndustryValidationSchemaType,
} from "../schema/industryValidationSchema";

const useUpdateIndustry = () => {
  const [
    updateIndustry,
    {
      isError: isUpdateIndustryError,
      isLoading: isUpdateIndustryLoading,
      isSuccess: isUpdateIndustrySuccess,
    },
  ] = useUpdateDataMutation();

  const {
    data,
    isError: isGetIndustryDetailsError,
    isLoading: isGetIndustryDetailsLoading,
    isSuccess: isGetIndustryDetailsSuccess,
  } = useGetDataQuery({
    url: "/industry",
    params: {},
    tag: "",
  });

  const initial: IndustryValidationSchemaType = data;

  const initialValues: IndustryValidationSchemaType = {
    id: initial?.id || "",
    industry: initial?.industry || "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: industryValidationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      updateIndustry({
        data: values,
        url: `/country/${values?.id}`,
        invalidateTag: "",
      });
    },
  });

  return {
    data,
    formik,
    updateIndustry,
    isGetIndustryDetailsError,
    isGetIndustryDetailsLoading,
    isGetIndustryDetailsSuccess,
    isUpdateIndustrySuccess,
    isUpdateIndustryLoading,
    isUpdateIndustryError,
  };
};

export default useUpdateIndustry;
