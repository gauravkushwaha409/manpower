import { useUpdateDataMutation } from "@/api/api";
import { useFormik } from "formik";
import { apiTags } from "@/constant/tag";
import { endpoints } from "@/api/endpoints";
import { useUpdateModal } from "@/hooks/use-update-modal";
import { ApiResponse } from "@/api/api.error";
import { handleResponse } from "@/utils/handleResponse";
import useMedicalDetails from "./use-medical-details";
import {
  medicalSchemaType,
  medicalValidationSchema,
} from "../schema/medical-schema";

const useUpdateMedical = () => {
  const [updateMedical, { isLoading }] = useUpdateDataMutation();
  const { handleCloseModal, updateId } = useUpdateModal();
  const { medicalDetails, isLoading: isInitialLoading } = useMedicalDetails({
    id: updateId,
  });

  const initialValues: medicalSchemaType = {
    candidate_name: medicalDetails?.data?.candidate_name || "",
  };

  const formik = useFormik<medicalSchemaType>({
    initialValues,
    validationSchema: medicalValidationSchema,
    enableReinitialize: true,
    onSubmit: async (values, { setErrors, resetForm }) => {
      const response = (await updateMedical({
        data: values,
        url: endpoints.medical.update.replace(":id", updateId),
        invalidateTag: [apiTags.medical.details, apiTags.medical.list],
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

export default useUpdateMedical;
