import { useGetDataQuery, useUpdateDataMutation } from "@/api/api";
import { useFormik } from "formik";
import {
  policyValidationSchema,
  PolicyValidationSchemaType,
} from "../schema/policyValidationSchema";

const useUpdatePolicy = () => {
  const [
    updatePolicy,
    {
      isError: isUpdatePolicySuccess,
      isLoading: isUpdatePolicyLoading,
      isSuccess: isUpdatePolicyError,
    },
  ] = useUpdateDataMutation();

  const {
    data,
    isError: isGetPolicyDetailsError,
    isLoading: isGetPolicyDetailsLoading,
    isSuccess: isGetPolicyDetailsSuccess,
  } = useGetDataQuery({
    url: "/policy",
    params: {},
    tag: "",
  });

  const initial: PolicyValidationSchemaType = data;

  const initialValues: PolicyValidationSchemaType = {
    id: initial?.id || "",
    policyDescription: initial?.policyDescription || "",
    policyTitle: initial?.policyTitle || "",
    policyType: initial?.policyType || "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: policyValidationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      updatePolicy({
        data: values,
        url: `/policy/${values?.id}`,
        invalidateTag: "",
      });
    },
  });

  return {
    data,
    formik,
    updatePolicy,
    isGetPolicyDetailsError,
    isGetPolicyDetailsLoading,
    isGetPolicyDetailsSuccess,
    isUpdatePolicySuccess,
    isUpdatePolicyLoading,
    isUpdatePolicyError,
  };
};

export default useUpdatePolicy;
