import { useGetDataQuery, useUpdateDataMutation } from "@/api/api";
import { useFormik } from "formik";
import {
  paymentValidationSchema,
  PaymentValidationSchemaType,
} from "../schema/paymentValidationSchema";

const useUpdateCompany = () => {
  const [
    updatePayment,
    {
      isError: isUpdatePaymentError,
      isLoading: isUpdatePaymentLoading,
      isSuccess: isUpdatePaymentSuccess,
    },
  ] = useUpdateDataMutation();

  const {
    data,
    isError: isGetPaymentDetailsError,
    isLoading: isGetPaymentDetailsLoading,
    isSuccess: isGetPaymentDetailsSuccess,
  } = useGetDataQuery({
    url: "",
    params: {},
    tag: "",
  });

  const initial: PaymentValidationSchemaType = data;

  const initialValues: PaymentValidationSchemaType = {
    id: initial?.id || "",
    candidateName: initial?.candidateName || "",
    payment: initial?.payment,
    country: initial?.country || "",
    payment_date: initial?.payment_date || "",
    payment_for: initial?.payment_for || "",
    payment_image: initial?.payment_image || "",
    payment_method: initial?.payment_method || "",
    total_payment: initial?.total_payment || "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: paymentValidationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      updatePayment({
        data: values,
        url: `/company/${values.id}`,
        invalidateTag: "",
      });
    },
  });

  return {
    data,
    formik,
    isGetPaymentDetailsError,
    isGetPaymentDetailsLoading,
    isGetPaymentDetailsSuccess,
    isUpdatePaymentSuccess,
    isUpdatePaymentLoading,
    isUpdatePaymentError,
  };
};

export default useUpdateCompany;
