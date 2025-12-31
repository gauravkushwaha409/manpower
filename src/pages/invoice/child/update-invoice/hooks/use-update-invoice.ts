import {
  InvoiceSchemaType,
  invoiceValidationSchema,
} from "@/pages/invoice/schema/invoice-schema";
import { useNavigate, useParams } from "react-router-dom";
import useInvoiceDetails from "./use-invoice-details";
import { useFormik } from "formik";
import { useUpdateDataMutation } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { ApiResponse } from "@/api/api.error";
import { handleResponse } from "@/utils/handleResponse";
import { PATH } from "@/constant/path";

const useUpdateInvoice = () => {
  const { id } = useParams<{ id: string }>();
  const [updateInvoice, { isLoading }] = useUpdateDataMutation();
  const navigate = useNavigate();
  const { data, isLoading: isInitialLoading } = useInvoiceDetails({
    id: id ?? "",
  });
  const initialValues: InvoiceSchemaType = {
    candidate_name: data?.data?.candidate_name || "",
    invoice_date: data?.data?.invoice_date || "",
    referance_no: data?.data?.referance_no || "",
    due_date: data?.data?.due_date || "",
    products: [...data?.data?.products],
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
    enableReinitialize: true,
    onSubmit: async (values, { setErrors, resetForm }) => {
      const response = (await updateInvoice({
        url: endpoints.invoice.update.replace(":id", id ?? ""),
        invalidateTag: [apiTags.invoice.list, apiTags.invoice.details],
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

  return { formik, isLoading, isInitialLoading };
};

export default useUpdateInvoice;
