import FormInputDate from "@/components/form/form-input-date";
import FormInputSelect, { IOption } from "@/components/form/form-input-select";
import FormInputPdf from "@/components/form/FormInputPdf";
import FormInputText from "@/components/form/FormInputText";

const TicketForm = () => {
  const candidateName: IOption[] = [
    { label: "Gaurav Singh", value: "gaurav-singh" },
    { label: "Aditya Roshan", value: "aditya-roshan" },
  ];

  return (
    <div className="grid grid-cols-1 gap-4">
      <FormInputSelect
        label="Candidate Name"
        name="candidate_name"
        options={candidateName}
      />
      <FormInputText label="Airline Name" name="airline_name" />
      <FormInputText label="Flight Number" name="flight_no" />
      <FormInputDate label="Departure Date" name="departure_date" />
      <FormInputPdf label="Ticket File" name="ticket_file" />
    </div>
  );
};
export default TicketForm;
