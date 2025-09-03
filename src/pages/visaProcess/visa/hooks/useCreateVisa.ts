import { useFormik } from "formik";
import { usePostDataMutation } from "@/api/api";
import {
  visaValidationSchema,
  VisaValidationSchemaType,
} from "../schema/visaValidationSchema";

const useCreateVisa= () => {
  const [
    createVisa,
    {
      isError: isVisaError,
      isLoading: isVisaLoading,
      isSuccess: isVisaSuccess,
    },
  ] = usePostDataMutation();

  const initialValues: VisaValidationSchemaType = {
    id: "",
    job_vacancy: "",
    visa_number: "",
    status: "",
    company_name: "",
    candidate_name: "",
  };

  const formik = useFormik<VisaValidationSchemaType>({
    initialValues,
    validationSchema: visaValidationSchema,
    onSubmit: async (values) => {
      await createVisa({
        url: "/visa",
        data: values,
        invalidateTag: "",
      });
    },
  });

  return {
    formik,
    isVisaLoading,
    isVisaError,
    isVisaSuccess,
  };
};

export default useCreateVisa;
