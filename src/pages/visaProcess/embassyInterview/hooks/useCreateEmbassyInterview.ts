import { useFormik } from "formik";
import { usePostDataMutation } from "@/api/api";
import {
  embassyInterviewValidation,
  EmbassyInterviewValidationSchemaType,
} from "../schema/embassyInterviewValidation";

const useCreateEmbassyInterview = () => {
  const [
    createEmbassyInterview,
    {
      isError: isEmbassyInterviewError,
      isLoading: isEmbassyInterviewLoading,
      isSuccess: isEmbassyInterviewSuccess,
    },
  ] = usePostDataMutation();

  const initialValues: EmbassyInterviewValidationSchemaType = {
    candidate_name: "",
    embassy_name: "",
    interview_date: new Date(),
    visa_number: "",
    status: "",
  };

  const formik = useFormik<EmbassyInterviewValidationSchemaType>({
    initialValues,
    validationSchema: embassyInterviewValidation,
    onSubmit: async (values) => {
      await createEmbassyInterview({
        url: "",
        data: values,
        invalidateTag: "",
      });
    },
  });

  return {
    formik,
    isEmbassyInterviewError,
    isEmbassyInterviewLoading,
    isEmbassyInterviewSuccess,
  };
};

export default useCreateEmbassyInterview;
