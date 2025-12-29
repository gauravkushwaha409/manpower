import { useUpdateDataMutation } from "@/api/api";
import { useFormik } from "formik";
import { apiTags } from "@/constant/tag";
import { endpoints } from "@/api/endpoints";
import { useUpdateModal } from "@/hooks/update-modal";
import { ApiResponse } from "@/api/api.error";
import { handleResponse } from "@/utils/handleResponse";
import useOrientationDetails from "./use-orientation-details";
import {
  orientationSchemaType,
  orientationValidationSchema,
} from "../schema/orientation-schema";

const useUpdateOrientation = () => {
  const [updateOrientation, { isLoading }] = useUpdateDataMutation();
  const { handleCloseModal, updateId } = useUpdateModal();
  const { orientationDetails, isLoading: isInitialLoading } =
    useOrientationDetails({
      id: updateId,
    });

  const initialValues: orientationSchemaType = {
    candidate_name: orientationDetails?.data?.candidate_name || "",
  };

  const formik = useFormik<orientationSchemaType>({
    initialValues,
    validationSchema: orientationValidationSchema,
    enableReinitialize: true,
    onSubmit: async (values, { setErrors, resetForm }) => {
      const response = (await updateOrientation({
        data: values,
        url: endpoints.orientation.update.replace(":id", updateId),
        invalidateTag: [apiTags.orientation.details, apiTags.orientation.list],
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

export default useUpdateOrientation;
