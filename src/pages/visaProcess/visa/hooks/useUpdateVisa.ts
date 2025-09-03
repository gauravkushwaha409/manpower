import { useGetDataQuery, useUpdateDataMutation } from "@/api/api";
import { useFormik } from "formik";
import {
  visaValidationSchema,
  VisaValidationSchemaType,
} from "../schema/visaValidationSchema";

const useUpdateVisa = () => {
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

  const initial: VisaValidationSchemaType = data;

  const initialValues: VisaValidationSchemaType = {
    id: initial?.id || "",
    job_vacancy: initial?.job_vacancy || "",
    visa_number: initial?.visa_number || "",
    status: initial?.status || "",
    company_name: initial?.company_name || "",
    candidate_name: initial?.candidate_name || "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: visaValidationSchema,
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

export default useUpdateVisa;
