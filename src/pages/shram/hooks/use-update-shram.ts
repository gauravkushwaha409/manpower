import { useUpdateDataMutation } from "@/api/api";
import { useFormik } from "formik";
import { apiTags } from "@/constant/tag";
import { endpoints } from "@/api/endpoints";
import { useUpdateModal } from "@/hooks/use-update-modal";
import { ApiResponse } from "@/api/api.error";
import { handleResponse } from "@/utils/handleResponse";
import useShramDetails from "./use-shram-details";
import { shramSchemaType, shramValidationSchema } from "../schema/shram-schema";

const useUpdateShram = () => {
  const [updateShram, { isLoading }] = useUpdateDataMutation();
  const { handleCloseModal, updateId } = useUpdateModal();
  const { shramDetails, isLoading: isInitialLoading } = useShramDetails({
    id: updateId,
  });

  const initialValues: shramSchemaType = {
    candidate_name: shramDetails?.data?.candidate_name || "",
    candidate_job: shramDetails?.data?.candidate_job || "",
    employer_name: shramDetails?.data?.employer_name || "",
    ols_reference_number: shramDetails?.data?.ols_reference_number || "",
    approval_date: shramDetails?.data?.approval_date || "",
    approval_file: shramDetails?.data?.approval_file || "",
  };

  const formik = useFormik<shramSchemaType>({
    initialValues,
    validationSchema: shramValidationSchema,
    enableReinitialize: true,
    onSubmit: async (values, { setErrors, resetForm }) => {
      const response = (await updateShram({
        data: values,
        url: endpoints.shram.update.replace(":id", updateId ?? ""),
        invalidateTag: [apiTags.shram.details, apiTags.shram.list],
      })) as ApiResponse;
      handleResponse({
        response,
        setErrorCallBack: setErrors,
        handleOnSuccess: () => {
          resetForm()
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

export default useUpdateShram;
