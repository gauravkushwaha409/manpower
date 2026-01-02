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
    due_date: "",
    invoice_date: "",
    referance_no: "",
    products: [],
    tempProduct: {
      product: "",
      discount: "",
      quantity: "",
      rate: "",
      tax: false,
    },
    edit_index: null,
  };

  const formik = useFormik<InvoiceSchemaType>({
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
