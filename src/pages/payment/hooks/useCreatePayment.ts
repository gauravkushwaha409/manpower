import { useFormik } from "formik";
import { usePostDataMutation } from "@/api/api";
import {
  paymentValidationSchema,
  PaymentValidationSchemaType,
} from "../schema/paymentValidationSchema";

const useCreatePayment = () => {
  const [
    createPayment,
    {
      isError: isPaymentError,
      isLoading: isPaymentLoading,
      isSuccess: isPaymentSuccess,
    },
  ] = usePostDataMutation();

  const initialValues: PaymentValidationSchemaType = {
    id: "",
    candidateName: "",
    country: "",
    payment: 1000,
    payment_date: new Date(),
    payment_for: "",
    payment_image: "",
    payment_method: "",
    total_payment: "",
  };

  const formik = useFormik<PaymentValidationSchemaType>({
    initialValues,
    validationSchema: paymentValidationSchema,
    onSubmit: async (values) => {
      await createPayment({
        url: "/industry",
        data: values,
        invalidateTag: "",
      });
    },
  });

  return {
    formik,
    isPaymentError,
    isPaymentLoading,
    isPaymentSuccess,
  };
};

export default useCreatePayment;
