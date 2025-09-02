import { useGetDataQuery, useUpdateDataMutation } from "@/api/api";
import { useFormik } from "formik";
import {
  embassyInterviewValidation,
  EmbassyInterviewValidationSchemaType,
} from "../schema/embassyInterviewValidation";

const useUpdateEmbassyInterview = () => {
  const [
    updateEmbassyInterview,
    {
      isError: isUpdateEmbassyInterviewError,
      isLoading: isUpdateEmbassyInterviewLoading,
      isSuccess: isUpdateEmbassyInterviewSuccess,
    },
  ] = useUpdateDataMutation();

  const {
    data,
    isError: isGetEmbassyInterviewError,
    isLoading: isGetEmbassyInterviewLoading,
    isSuccess: isGetEmbassyInterviewSuccess,
  } = useGetDataQuery({
    url: "",
    params: {},
    tag: "",
  });

  const initial: EmbassyInterviewValidationSchemaType = data;

  const initialValues: EmbassyInterviewValidationSchemaType = {
    candidate_name: initial?.candidate_name || "",
    embassy_name: initial?.embassy_name || "",
    interview_date: initial?.interview_date || "",
    visa_number: initial?.visa_number || "",
    status: initial?.status || "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: embassyInterviewValidation,
    enableReinitialize: true,
    onSubmit: async (values) => {
      updateEmbassyInterview({
        data: values,
        url: "",
        invalidateTag: "",
      });
    },
  });

  return {
    data,
    formik,
    isGetEmbassyInterviewError,
    isGetEmbassyInterviewLoading,
    isGetEmbassyInterviewSuccess,
    isUpdateEmbassyInterviewSuccess,
    isUpdateEmbassyInterviewLoading,
    isUpdateEmbassyInterviewError,
  };
};

export default useUpdateEmbassyInterview;
