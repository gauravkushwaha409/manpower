import { usePostDataMutation } from "@/api/api";
import { ApiResponse } from "@/api/api.error";
import { endpoints } from "@/api/endpoints";
import { PATH } from "@/constant/path";
import { apiTags } from "@/constant/tag";
import {
  ExpenseSchemaType,
  expenseValidationSchema,
} from "@/pages/expense/schema/expense-schema";
import { handleResponse } from "@/utils/handleResponse";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const useCreateExpense = () => {
  const [createExpense, { isLoading }] = usePostDataMutation();
  const navigate = useNavigate();
  //   ======================= Initial Values =============================
  const initialValues: ExpenseSchemaType = {
    candidate_name: "",
    supplier_invoice_reference_no: "",
    date: "",
    due_date: "",
    temp_expense: {
      account: "",
      amount: "",
      tax: false,
    },
    expenses: [],
    remarks: "",
  };
  // ======================== Formik Instance ================================
  const formik = useFormik({
    initialValues,
    validationSchema: expenseValidationSchema,
    onSubmit: async (values, { resetForm, setErrors }) => {
      const response = (await createExpense({
        url: endpoints.expense.create,
        data: values,
        invalidateTag: [apiTags.expense.list],
      })) as ApiResponse;

      handleResponse({
        response,
        setErrorCallBack: setErrors,
        handleOnSuccess: () => {
          resetForm();
          navigate(PATH.expense.index);
        },
      });
    },
  });

  return {
    formik,
    isLoading,
  };
};
export default useCreateExpense;
