import { useUpdateDataMutation } from "@/api/api";
import { useUpdateModal } from "@/hooks/use-update-modal";
import {
  insuranceSchemaType,
  insuranceValidationSchema,
} from "../schema/insurance-schema";
import { useFormik } from "formik";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { handleResponse } from "@/utils/handleResponse";
import { ApiResponse } from "@/api/api.error";
import useInsuranceDetails from "./use-insurance-details";

const useInsuranceUpdate = () => {
  const [updateInsurance, { isLoading }] = useUpdateDataMutation();
  const { handleCloseModal, updateId } = useUpdateModal();
  const { insuranceDetails, isLoading: isInitialLoading } = useInsuranceDetails(
    {
      id: updateId,
    }
  );

  const initialValues: insuranceSchemaType = {
    candidate_name: insuranceDetails?.data?.candidate_name || "",
    insurance_company: insuranceDetails?.data?.insurance_company || "",
    policy_no: insuranceDetails?.data?.policy_no || "",
    valid_from: insuranceDetails?.data?.valid_from || "",
    valid_to: insuranceDetails?.data?.valid_to || "",
    document: insuranceDetails?.data?.document || "",
  };

  const formik = useFormik<insuranceSchemaType>({
    initialValues,
    validationSchema: insuranceValidationSchema,
    enableReinitialize: true,
    onSubmit: async (values, { setErrors, resetForm }) => {
      const response = (await updateInsurance({
        data: values,
        url: endpoints.insurance.update.replace(":id", updateId ?? ""),
        invalidateTag: [apiTags.insurance.details, apiTags.insurance.list],
      })) as ApiResponse;
      handleResponse({
        response,
        setErrorCallBack: setErrors,
        handleOnSuccess: () => {
          resetForm();
          handleCloseModal()
        }
      });
    },
  });

  return {
    formik,
    isLoading,
    isInitialLoading,
  };
};

export default useInsuranceUpdate;
