import FormInputDate from "@/components/form/form-input-date";
import FormInputSelect, { IOption } from "@/components/form/form-input-select";
import FormInputText from "@/components/form/FormInputText";
import { ChequeIssuedStatusType } from "../../cheque-issued/schema/cheque-issued-schema";

export const chequeOptions: IOption<ChequeIssuedStatusType>[] = [
  { label: "Cancelled", value: "cancelled" },
  { label: "Bounced", value: "bounced" },
  { label: "Cleared", value: "cleared" },
  { label: "Deposited", value: "deposited" },
  { label: "Pending", value: "pending" },
];

const ChequeReceivedForm = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <FormInputSelect
        label="Customer/Account"
        name="customer_account"
        options={[{ label: "Cash Customer", value: "cash-customer" }]}
      />
      <FormInputSelect
        label="Customer/Account"
        name="customer_account"
        options={[{ label: "Cash Customer", value: "cash-customer" }]}
      />
      <FormInputText label="Cheque Number" name="chequq_number" />
      <div className="grid grid-cols-2 gap-4">
        <FormInputDate label="Cheque Date" name="cheque_date" />
        <FormInputDate label="Received Date" name="received_date" />
        <FormInputText label="Amount" name="amount" />
        <FormInputSelect label="Status" name="status" options={chequeOptions} />
      </div>
    </div>
  );
};

export default ChequeReceivedForm;
