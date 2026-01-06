import { useUpdateDataMutation } from "@/api/api";
import { useFormik } from "formik";
import { apiTags } from "@/constant/tag";
import { endpoints } from "@/api/endpoints";
import { useUpdateModal } from "@/hooks/use-update-modal";
import { ApiResponse } from "@/api/api.error";
import { handleResponse } from "@/utils/handleResponse";
import useOrientationDetails from "./use-orientation-details";
import {
  orientationSchemaType,
  orientationValidationSchema,
} from "../schema/orientation-schema";
import React from "react";

const useUpdateOrientation = () => {
  const [updateOrientation, { isLoading }] = useUpdateDataMutation();
  const update = useUpdateModal();
  const { orientationDetails, isLoading: isInitialLoading } =
    useOrientationDetails({
      id: update.updateId,
    });

  const initialValues: orientationSchemaType = {
    candidate_name: orientationDetails?.data?.candidate_name || "",
    candidate_job: orientationDetails?.data?.candidate_name || "",
    employer_name: orientationDetails?.data?.employer_name || "",
    institute_name: orientationDetails?.data?.institute_name || "",
    orientation_date: orientationDetails?.data?.orientation_date || "",
    orientation_location: orientationDetails?.data?.orientation_location || "",
    orientation_status:
      orientationDetails?.data?.orientation_status || "schedule",
  };

  const formik = useFormik<orientationSchemaType>({
    initialValues,
    validationSchema: orientationValidationSchema,
    enableReinitialize: true,
    onSubmit: async (values, { setErrors, resetForm }) => {
      const response = (await updateOrientation({
        data: values,
        url: endpoints.orientation.update.replace(":id", update.updateId ?? ""),
        invalidateTag: [apiTags.orientation.details, apiTags.orientation.list],
      })) as ApiResponse;
      handleResponse({
        response,
        setErrorCallBack: setErrors,
        handleOnSuccess: React.useCallback(() => {
          resetForm();
          update.handleCloseModal();
        }, []),
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
