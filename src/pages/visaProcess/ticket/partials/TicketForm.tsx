import InputText from "@/components/form/InputText.tsx";
import { InputSearchSelect } from "@/components/form/InputSelect.tsx";
import InputDate from "@/components/form/InputDate";

const TicketForm = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-5">
          <InputSearchSelect
            label="Candidate Name"
            name="candidate_name"
            options={[{ label: "Gaurav", value: "gaurav" }]}
            placeholder="Choose the Candidate Name"
          />
          <InputText
            label="Flight Number"
            name="flight_number"
            placeholder="Enter The Flight Number"
          />
          <InputText
            label="Airline Name"
            name="airline_name"
            placeholder="Enter The Airline Name"
          />
          <InputText
            label="Ticket No."
            name="ticket_no"
            placeholder="Enter The Ticket Number"
          />
          <InputText
            label="Departure Airport"
            name="departure_airport"
            placeholder="Enter The Departure Airport"
          />
          <InputText
            label="Arrival Airport"
            name="arrival_airport"
            placeholder="Enter The Arrival Airport"
          />
          <InputDate label="Enter The Departure Date" name="departure_date" />
          <InputSearchSelect
            label="Status"
            name="status"
            options={[{ label: "Pending", value: "pending" }]}
            placeholder="Choose The Status"
          />
        </div>
      </div>
    </>
  );
};

export default TicketForm;
