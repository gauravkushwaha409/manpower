import { usePostDataMutation } from "@/api/api";
import { useAddModal } from "@/hooks/add-modal";
import {
  JobOfferSchemaType,
  JobOfferValidationSchema,
} from "../schema/job-offer-schema";
import { useFormik } from "formik";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { ApiResponse } from "@/api/api.error";
import { handleResponse } from "@/utils/handleResponse";

const useCreateJobOffer = () => {
  const [createJobOffer, { isLoading }] = usePostDataMutation();
  const { handleCloseModal } = useAddModal();
  const initialValues: JobOfferSchemaType = {
    candidate_name: "",
  };

  const formik = useFormik<JobOfferSchemaType>({
    initialValues,
    validationSchema: JobOfferValidationSchema,
    onSubmit: async (values, { setErrors, resetForm }) => {
      const response = (await createJobOffer({
        url: endpoints.jobOffer.create,
        data: values,
        invalidateTag: [apiTags.jobOffer.list],
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
  };
};

export default useCreateJobOffer;
