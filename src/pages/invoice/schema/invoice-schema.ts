import * as yup from "yup";

const REQUIRED_MESSAGE = "this field is required";

const productListItemSchema = yup.object({
  product: yup.string().notRequired(),
  quantity: yup.number().notRequired(),
  rate: yup.number().notRequired(),
  discount: yup.number().notRequired(),
  tax: yup.number().notRequired(),
});
const tempProductSchema = yup.object({
  product: yup.string().required(REQUIRED_MESSAGE),
  quantity: yup.number().typeError("Invalid number").required(REQUIRED_MESSAGE),
  rate: yup.number().typeError("Invalid number").required(REQUIRED_MESSAGE),
  discount: yup.number().typeError("Invalid number").required(REQUIRED_MESSAGE),
  tax: yup.number().typeError("Invalid number").required(REQUIRED_MESSAGE),
});
const invoiceSchema = yup.object({
  candidate_name: yup.string().required(REQUIRED_MESSAGE),
  referance_no: yup.string().required(REQUIRED_MESSAGE),
  invoice_date: yup.string().required(REQUIRED_MESSAGE),
  due_date: yup.string().required(REQUIRED_MESSAGE),
  tempProductSchema,
  products: yup
    .array()
    .of(productListItemSchema)
    .min(1, REQUIRED_MESSAGE)
    .required(REQUIRED_MESSAGE),
});

export type InvoiceSchemaType = yup.InferType<typeof invoiceSchema>;
export type InvoiceProductSchemaType = yup.InferType<
  typeof productListItemSchema
>;

export const invoiceValidationSchema = invoiceSchema;
