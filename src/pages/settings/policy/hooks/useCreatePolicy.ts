import { useFormik } from "formik";
import { usePostDataMutation } from "@/api/api";
import {
  policyValidationSchema,
  PolicyValidationSchemaType,
} from "../schema/policyValidationSchema";

const useCreatePolicy = () => {
  const [
    createPolicy,
    {
      isError: isPolicyError,
      isLoading: isPolicyLoading,
      isSuccess: isPolicySuccess,
    },
  ] = usePostDataMutation();

  const initialValues: PolicyValidationSchemaType = {
    id: "",
    policyDescription: "",
    policyTitle: "",
    policyType: "",
  };

  const formik = useFormik<PolicyValidationSchemaType>({
    initialValues,
    validationSchema: policyValidationSchema,
    onSubmit: async (values) => {
      await createPolicy({
        url: "/policy",
        data: values,
        invalidateTag: "",
      });
    },
  });

  return {
    formik,
    isPolicyError,
    isPolicyLoading,
    isPolicySuccess,
  };
};

export default useCreatePolicy;
