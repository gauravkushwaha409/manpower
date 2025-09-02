import { useGetDataQuery, useUpdateDataMutation } from "@/api/api";
import { useFormik } from "formik";
import {
  embassyInterviewValidationSchema,
  EmbassyInterviewValidationSchemaType,
} from "../schema/embassyInterviewValidationSchema";

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
    id: initial?.id || "",
    candidate_name: initial?.candidate_name || "",
    embassy_name: initial?.embassy_name || "",
    interview_date: initial?.interview_date || "",
    visa_number: initial?.visa_number || "",
    status: initial?.status || "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: embassyInterviewValidationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      updateEmbassyInterview({
        data: values,
        url: `/embassy-interview/${values?.id}`,
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
