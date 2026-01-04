import * as yup from "yup";

const MESSAGE = "This field is required";

export const CHEQUE_ISSUED_STATUS = [
  "pending",
  "deposited",
  "cleared",
  "bounced",
  "cancelled",
] as const;
export type ChequeIssuedStatusType = (typeof CHEQUE_ISSUED_STATUS)[number];

const chequeIssuedSchema = yup.object().shape({
  account: yup.string().trim().required(MESSAGE),
  payee_name: yup.string().trim().required(MESSAGE),
  bank_account: yup.string().trim().required(MESSAGE),
  cheque_number: yup.string().trim().required(MESSAGE),
  cheque_date: yup.string().trim().required(MESSAGE),
  issued_date: yup.string().trim().required(MESSAGE),
  amount: yup.string().trim().required(MESSAGE),
  status: yup
    .mixed<ChequeIssuedStatusType>()
    .oneOf<ChequeIssuedStatusType>(CHEQUE_ISSUED_STATUS)
    .nullable(),
  // .required(MESSAGE),
});

export type ChequeIssuedSchemaType = yup.InferType<typeof chequeIssuedSchema>;
