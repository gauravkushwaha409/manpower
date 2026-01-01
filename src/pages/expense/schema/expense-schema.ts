import * as Yup from "yup";

const temp_account = Yup.object({
  account: Yup.string().required("This field is required"),
  amount: Yup.number().required("This field is required"),
  tax: Yup.boolean().required("This field is required"),
});
const accounts = Yup.object({
  account: Yup.string().required("This field is required"),
  amount: Yup.number().required("This field is required"),
  tax: Yup.boolean().required("This field is required"),
});

// =================== Expense Schema =========================
const expenseSchema = Yup.object({
  candidate_name: Yup.string().required("This field is required"),
  supplier_invoice_reference_no: Yup.string().required(
    "This field is required"
  ),
  date: Yup.string().required("This field is required"),
  due_date: Yup.string().required("This field is required"),
  accounts: Yup.array().of(accounts).required("This is required"),
  remarks: Yup.string().required("This field is required"),
  temp_account,
  editing_index: Yup.number().nullable().optional(),
});

export const expenseValidationSchema = expenseSchema;
export type ExpenseSchemaType = Yup.InferType<typeof expenseSchema>;
export type ExpenseAccountSchema = Yup.InferType<typeof accounts>;
