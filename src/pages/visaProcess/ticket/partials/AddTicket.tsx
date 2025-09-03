import React from "react";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import TicketForm from "./TicketForm";
import useCreateTicket from "../hooks/useCreateTicket";

interface IAddTicketProps {
  isOpen: boolean;
  handleCloseModal: () => void;
}

const AddTicket: React.FC<IAddTicketProps> = ({ handleCloseModal, isOpen }) => {
  const { formik } = useCreateTicket();
  return (
    <Dialog open={isOpen} onOpenChange={handleCloseModal}>
      <DialogContent className="max-h-[80vh] overflow-y-auto scroll-none sm:max-w-[80vw] lg:max-w-[70vw] [&>button:hover]:cursor-pointer">
        <DialogHeader>
          <DialogTitle>Add Ticket</DialogTitle>
          <DialogDescription>
            Fill in the form to add a new ticket
          </DialogDescription>
        </DialogHeader>

        <ExtendedForm
          formik={formik}
          onClose={handleCloseModal}
          submitText="Add Ticket"
          cancelText="Cancel"
        >
          <TicketForm />
        </ExtendedForm>
      </DialogContent>
    </Dialog>
  );
};

export default AddTicket;
