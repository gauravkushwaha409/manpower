import { useFormik } from "formik";
import { usePostDataMutation } from "@/api/api";
import {
  embassyInterviewValidationSchema,
  EmbassyInterviewValidationSchemaType,
} from "../schema/embassyInterviewValidationSchema";

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
    id: "",
    candidate_name: "",
    embassy_name: "",
    interview_date: new Date(),
    visa_number: "",
    status: "",
  };

  const formik = useFormik<EmbassyInterviewValidationSchemaType>({
    initialValues,
    validationSchema: embassyInterviewValidationSchema,
    onSubmit: async (values) => {
      await createEmbassyInterview({
        url: "/embassy-interview",
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
