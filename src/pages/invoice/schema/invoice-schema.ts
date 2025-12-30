import * as yup from "yup";

const REQUIRED_MESSAGE = "this field is required";

const invoiceSchema = yup.object({
  id: yup.string().required(REQUIRED_MESSAGE),
  candidate_name: yup.string().required(REQUIRED_MESSAGE),
  referance_no: yup.string().required(REQUIRED_MESSAGE),
  invoice_date: yup.string().required(REQUIRED_MESSAGE),
  due_date: yup.string().required(REQUIRED_MESSAGE),
  currency: yup.string().required(REQUIRED_MESSAGE),
  exchange_rate_to_nrp: yup.string().required(REQUIRED_MESSAGE),
  products: yup
    .array()
    .of(
      yup.object({
        product: yup.string().required(REQUIRED_MESSAGE),
        quantity: yup.string().required(REQUIRED_MESSAGE),
        rate: yup.string().required(REQUIRED_MESSAGE),
        discount: yup.string().required(REQUIRED_MESSAGE),
        tax: yup.string().required(REQUIRED_MESSAGE),
      })
    )
    .min(1, REQUIRED_MESSAGE)
    .required(REQUIRED_MESSAGE),
});

export type InvoiceSchemaType = yup.InferType<typeof invoiceSchema>;
