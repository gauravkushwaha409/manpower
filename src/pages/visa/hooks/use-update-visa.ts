import { useUpdateDataMutation } from "@/api/api";
import { useFormik } from "formik";
import { apiTags } from "@/constant/tag";
import { endpoints } from "@/api/endpoints";
import { useUpdateModal } from "@/hooks/use-update-modal";
import { ApiResponse } from "@/api/api.error";
import { handleResponse } from "@/utils/handleResponse";
import useVisaDetails from "./use-visa-details";
import { visaSchemaType, visaValidationSchema } from "../schema/visa-schema";

const useUpdateVisa = () => {
  const [updateVisa, { isLoading }] = useUpdateDataMutation();
  const { handleCloseModal, updateId } = useUpdateModal();
  const { visaDetails, isLoading: isInitialLoading } = useVisaDetails({
    id: updateId,
  });

  const initialValues: visaSchemaType = {
    candidate_name: visaDetails?.data?.candidate_name || "",
    candidate_job: visaDetails?.data?.candidate_job || "",
    visa_type: visaDetails?.data?.visa_type || "",
    application_date: visaDetails?.data?.application_date || "",
    approval_date: visaDetails?.data?.approval_date || "",
    visa_expire: visaDetails?.data?.visa_expire || "",
    status: visaDetails?.data?.status || "",
    visa_file: visaDetails?.data?.visa_file || "",
  };

  const formik = useFormik<visaSchemaType>({
    initialValues,
    validationSchema: visaValidationSchema,
    enableReinitialize: true,
    onSubmit: async (values, { setErrors, resetForm }) => {
      const response = (await updateVisa({
        data: values,
        url: endpoints.visa.update.replace(":id", updateId),
        invalidateTag: [apiTags.visa.details, apiTags.visa.list],
      })) as ApiResponse;
      handleResponse({
        response,
        setErrorCallBack: setErrors,
        handleCloseModal: handleCloseModal,
        resetForm: resetForm,
      });
    },
  });

  return {
    formik,
    isLoading,
    isInitialLoading,
  };
};

export default useUpdateVisa;
