import InputDate from "@/components/form/form-input-date";
import InputSearchSelect from "@/components/form/form-input-select";
import InputText from "@/components/form/FormInputText";

const PaymentForm = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        <InputSearchSelect
          label="Candidate Name"
          name="candidate_name"
          options={[{ label: "Gaurav", value: "gaurav" }]}
        />
        <InputSearchSelect
          label="Country"
          name="country"
          options={[{ label: "Nepal", value: "nepal" }]}
        />
        <InputText label="Payment Amount" name="payment_amount" />
        <InputDate label="Payment Date" name="payment_date" />
        <InputSearchSelect
          label="Payment For"
          name="payment_for"
          options={[{ label: "Visa Process", value: "visa_process" }]}
        />
        <InputSearchSelect
          label="Payment Method"
          name="payment_method"
          options={[{ label: "Phone Pay", value: "online pay" }]}
        />
      </div>
    </>
  );
};

export default PaymentForm;
