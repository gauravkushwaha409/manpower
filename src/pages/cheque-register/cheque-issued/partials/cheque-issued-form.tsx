import FormInputDate from "@/components/form/form-input-date";
import FormInputSelect from "@/components/form/form-input-select";
import FormInputText from "@/components/form/FormInputText";
import { chequeOptions } from "../../cheque-received/partials/cheque-received-form";

const ChequeIssuedForm = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <FormInputSelect
        label="Supplier/Account"
        name="supplier_account"
        options={[]}
      />
      <FormInputText label="Payee Name" name="payee_name" />
      <FormInputSelect label="Bank Account" name="bank_account" options={[]} />
      <FormInputText label="Cheque No." name="cheque_no" />
      <FormInputDate label="Cheque Date" name="cheque_date" />
      <FormInputDate label="Issued Date" name="issued_date" />
      <FormInputText label="Amount" name="amount" />
      <FormInputSelect label="Status" name="status" options={chequeOptions} />
    </div>
  );
};

export default ChequeIssuedForm;
