import ExtendedForm from "@/components/extended-components/ExtendedForm";
import ModalWrapper from "@/components/shadcn/modal-wrapper";
import useShramToTicket from "../hooks/use-shram-to-ticket";
import useShramToTicketModal from "../hooks/use-shram-to-ticket-modal";
import FormInputText from "@/components/form/FormInputText";
import FormInputDate from "@/components/form/form-input-date";

const ShramToTicket = () => {
  const { isShramToTicket, handleCloseShramToTicket } = useShramToTicketModal();

  const { formik, isLoading } = useShramToTicket();

  return (
    <ModalWrapper
      className="xl:max-w-2xl"
      name="Move shram candidate to ticket"
      description="This will move the selected shram candidate to ticket"
      isOpen={isShramToTicket}
      onOpenChange={handleCloseShramToTicket}
    >
      <ExtendedForm formik={formik} isSubmitting={isLoading}>
        <div className="xl:max-w-2xl">
          <FormInputText label="Airline Name" name="airline_name" />
          <FormInputText label="Flight Number" name="flight_no" />
          <FormInputDate label="Departure Date" name="departure_date" />
        </div>
      </ExtendedForm>
    </ModalWrapper>
  );
};

export default ShramToTicket;
