import { useUpdateDataMutation } from "@/api/api";
import { useFormik } from "formik";
import { apiTags } from "@/constant/tag";
import { endpoints } from "@/api/endpoints";
import { useUpdateModal } from "@/hooks/use-update-modal";
import { ApiResponse } from "@/api/api.error";
import { handleResponse } from "@/utils/handleResponse";
import useJobOfferDetails from "./use-job-offer-details";
import {
  JobOfferSchemaType,
  JobOfferValidationSchema,
} from "../schema/job-offer-schema";

const useUpdateJobOffer = () => {
  const [updateJobOffer, { isLoading }] = useUpdateDataMutation();
  const { handleCloseModal, updateId } = useUpdateModal();
  const { jobOfferDetails, isLoading: isInitialLoading } = useJobOfferDetails({
    id: updateId,
  });

  const initialValues: JobOfferSchemaType = {
    candidate_name: jobOfferDetails?.data?.candidate_name || "",
  };

  const formik = useFormik<JobOfferSchemaType>({
    initialValues,
    validationSchema: JobOfferValidationSchema,
    enableReinitialize: true,
    onSubmit: async (values, { setErrors, resetForm }) => {
      const response = (await updateJobOffer({
        data: values,
        url: endpoints.jobOffer.update.replace(":id", updateId ?? ""),
        invalidateTag: [apiTags.jobOffer.details, apiTags.jobOffer.list],
      })) as ApiResponse;
      handleResponse({
        response,
        setErrorCallBack: setErrors,
        handleOnSuccess: () => {
          resetForm();
          handleCloseModal();
        },
      });
    },
  });

  return {
    formik,
    isLoading,
    isInitialLoading,
  };
};

export default useUpdateJobOffer;
