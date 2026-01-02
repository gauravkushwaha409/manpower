import { useNavigate, useParams } from "react-router-dom";
import useQuickPaymentDetails from "./use-quick-payment-details";
import {
  QuickPaymentSchema,
  quickPaymentValidationSchema,
} from "@/pages/quick-payment/schema/quick-payment-schema";
import { useUpdateDataMutation } from "@/api/api";
import { useFormik } from "formik";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { handleResponse } from "@/utils/handleResponse";
import { ApiResponse } from "@/api/api.error";
import { PATH } from "@/constant/path";

const useUpdateQuickPayment = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [updateQuickPayment, { isLoading }] = useUpdateDataMutation();
  const quickPaymentDetails = useQuickPaymentDetails({
    id: id ?? "",
  });

  const initialValues: QuickPaymentSchema = {
    date: "",
    paid_from: "",
    payments: [],
    reference: "",
    temp_payment: {
      account: "",
      amount: "",
      description: "",
    },
    edit_index: null,
  };

  const formik = useFormik<QuickPaymentSchema>({
    initialValues,
    validationSchema: quickPaymentValidationSchema,
    enableReinitialize: true,
    onSubmit: async (values, { setErrors, resetForm }) => {
      const response = (await updateQuickPayment({
        data: values,
        url: endpoints.quickPayment.update.replace(":id", id ?? ""),
        invalidateTag: [
          apiTags.quickPayment.list,
          apiTags.quickPayment.details,
        ],
      })) as ApiResponse;

      handleResponse({
        response,
        setErrorCallBack: setErrors,
        handleOnSuccess: () => {
          resetForm();
          navigate(PATH.quickPayment.index);
        },
      });
    },
  });

  return {
    formik,
    isLoading,
    isInitialLoading: quickPaymentDetails?.isLoading,
  };
};

export default useUpdateQuickPayment;
