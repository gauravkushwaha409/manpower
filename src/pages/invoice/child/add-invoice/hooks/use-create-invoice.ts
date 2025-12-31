import { usePostDataMutation } from "@/api/api";
import { ApiResponse } from "@/api/api.error";
import { endpoints } from "@/api/endpoints";
import { PATH } from "@/constant/path";
import { apiTags } from "@/constant/tag";
import {
  InvoiceSchemaType,
  invoiceValidationSchema,
} from "@/pages/invoice/schema/invoice-schema";
import { handleResponse } from "@/utils/handleResponse";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const useCreateInvoice = () => {
  const [createInvoice, { isLoading }] = usePostDataMutation();
  const navigate = useNavigate();
  const initialValues: InvoiceSchemaType = {
    candidate_name: "",
    currency: "",
    due_date: "",
    exchange_rate_to_nrp: "",
    invoice_date: "",
    referance_no: "",
    products: [],
    tempProductSchema: {
      product: "",
      discount: 0,
      quantity: 0,
      rate: 0,
      tax: 0,
    },
  };

  const formik = useFormik({
    initialValues,
    validationSchema: invoiceValidationSchema,
    onSubmit: async (values, { setErrors, resetForm }) => {
      const response = (await createInvoice({
        url: endpoints.invoice.create,
        invalidateTag: [apiTags.invoice.list],
        data: values,
      })) as ApiResponse;

      handleResponse({
        response,
        setErrorCallBack: setErrors,
        handleOnSuccess: () => {
          navigate(PATH.invoice.index);
          resetForm();
        },
      });
    },
  });
  return { isLoading, formik };
};

export default useCreateInvoice;
