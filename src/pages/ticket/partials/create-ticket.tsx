import ExtendedForm from "@/components/extended-components/ExtendedForm";
import useCreateTicket from "../hooks/use-create-ticket";
import TicketForm from "./ticket-form";

const CreateTicket = () => {
  const { formik, isLoading } = useCreateTicket();
  return (
    <ExtendedForm formik={formik} isSubmitting={isLoading}>
      <TicketForm />
    </ExtendedForm>
  );
};

export default CreateTicket;
