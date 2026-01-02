import { useUpdateDataMutation } from "@/api/api";
import { useFormik } from "formik";
import { apiTags } from "@/constant/tag";
import { endpoints } from "@/api/endpoints";
import { useUpdateModal } from "@/hooks/use-update-modal";
import { ApiResponse } from "@/api/api.error";
import { handleResponse } from "@/utils/handleResponse";
import useInterviewDetails from "./use-interview-details";
import {
  InterviewSchemaType,
  InterviewValidationSchema,
} from "../schema/interview-schema";

const useUpdateInterview = () => {
  const [updateCountry, { isLoading }] = useUpdateDataMutation();
  const { handleCloseModal, updateId } = useUpdateModal();
  const { interviewDetails, isLoading: isInitialLoading } = useInterviewDetails(
    {
      id: updateId,
    }
  );

  const initialValues: InterviewSchemaType = {
    candidate_name: interviewDetails?.data?.candidate_name || "",
    candidate_job: interviewDetails?.data?.candidate_job || "",
    employer_name: interviewDetails?.data?.employer_name || "",
    interview_date: interviewDetails?.data?.interview_date || "",
    interview_location: interviewDetails?.data?.interview_location || "",
    interview_mode: interviewDetails?.data?.interview_mode || "offline",
    remarks: interviewDetails?.data?.remarks || "",
    result: interviewDetails?.data?.result || "pending",
  };

  const formik = useFormik<InterviewSchemaType>({
    initialValues,
    validationSchema: InterviewValidationSchema,
    enableReinitialize: true,
    onSubmit: async (values, { setErrors, resetForm }) => {
      const response = (await updateCountry({
        data: values,
        url: endpoints.interview.update.replace(":id", updateId),
        invalidateTag: [apiTags.interview.details, apiTags.interview.list],
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

export default useUpdateInterview;
