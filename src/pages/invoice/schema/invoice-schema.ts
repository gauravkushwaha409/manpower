import * as yup from "yup";

const REQUIRED_MESSAGE = "this field is required";

// ============================== Product List Item Schema =====================
const productListItemSchema = yup.object({
  product: yup.string().required(),
  quantity: yup
    .string()
    .required()
    .test(
      "is-valid-number",
      "Amount must be a valid number",
      (value) => value !== undefined && value !== "" && !isNaN(Number(value))
    ),
  rate: yup
    .string()
    .required()
    .test(
      "is-valid-number",
      "Amount must be a valid number",
      (value) => value !== undefined && value !== "" && !isNaN(Number(value))
    ),
  discount: yup
    .string()
    .required()
    .test(
      "is-valid-number",
      "Amount must be a valid number",
      (value) => value !== undefined && value !== "" && !isNaN(Number(value))
    ),
  discount_amount: yup.string().required(),
  tax: yup.boolean().required(),
  tax_amount: yup.string().required(),
});
// ==================== Temporary Store the Product Validation Schema =========================
const tempProduct = yup.object({
  product: yup.string().required(REQUIRED_MESSAGE),
  quantity: yup.string().required(REQUIRED_MESSAGE),
  rate: yup.string().required(REQUIRED_MESSAGE),
  discount: yup.string().required(REQUIRED_MESSAGE),
  tax: yup.boolean().required(REQUIRED_MESSAGE),
});
// =============== Invoice Validation Schema =====================
const invoiceSchema = yup.object({
  candidate_name: yup.string().required(REQUIRED_MESSAGE),
  referance_no: yup.string().required(REQUIRED_MESSAGE),
  invoice_date: yup.string().required(REQUIRED_MESSAGE),
  due_date: yup.string().required(REQUIRED_MESSAGE),
  tempProduct: tempProduct,
  products: yup
    .array()
    .of(productListItemSchema)
    .min(1, REQUIRED_MESSAGE)
    .required(REQUIRED_MESSAGE),
  edit_index: yup.number().required().nullable(),
});

export type InvoiceSchemaType = yup.InferType<typeof invoiceSchema>;
export type InvoiceProductSchemaType = yup.InferType<
  typeof productListItemSchema
>;

export const invoiceValidationSchema = invoiceSchema;
