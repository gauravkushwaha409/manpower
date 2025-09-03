import { useGetDataQuery, useUpdateDataMutation } from "@/api/api";
import { useFormik } from "formik";
import {
  dofeValidationSchema,
  DOFEValidationSchemaType,
} from "../schema/dofeValidationSchema";

const useUpdateDOFE = () => {
  const [
    updateDOFE,
    {
      isError: isUpdateDOFEError,
      isLoading: isUpdateDOFELoading,
      isSuccess: isUpdateDOFESuccess,
    },
  ] = useUpdateDataMutation();

  const {
    data,
    isError: isGetDOFEError,
    isLoading: isGetDOFELoading,
    isSuccess: isGetDOFESuccess,
  } = useGetDataQuery({
    url: "/dofe",
    params: {},
    tag: "",
  });

  const initial: DOFEValidationSchemaType = data;

  const initialValues: DOFEValidationSchemaType = {
    id: initial?.id || "",
    candidate_name: initial?.candidate_name || "",
    sticker_no: initial?.sticker_no || "",
    job_vacancy: initial?.job_vacancy || "",
    country: initial?.country || "",
    company: initial?.company || "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: dofeValidationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      updateDOFE({
        data: values,
        url: `/dofe/${values?.id}`,
        invalidateTag: "",
      });
    },
  });

  return {
    data,
    formik,
    isGetDOFEError,
    isGetDOFELoading,
    isGetDOFESuccess,
    isUpdateDOFESuccess,
    isUpdateDOFELoading,
    isUpdateDOFEError,
  };
};

export default useUpdateDOFE;
