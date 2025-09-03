import React from "react";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import VisaForm from "./TicketForm";
import useUpdateVisa from "../hooks/useUpdateTicket";

interface IUpdateTicketProps {
  isOpen: boolean;
  handleCloseModal: () => void;
}

const UpdateTicket: React.FC<IUpdateTicketProps> = ({
  handleCloseModal,
  isOpen,
}) => {
  const { formik } = useUpdateVisa();
  return (
    <Dialog open={isOpen} onOpenChange={handleCloseModal}>
      <DialogContent className="max-h-[80vh] overflow-y-auto scroll-none sm:max-w-[80vw] lg:max-w-[70vw] [&>button:hover]:cursor-pointer">
        <DialogHeader>
          <DialogTitle>Update Ticket</DialogTitle>
          <DialogDescription>
            Edit the fields below to update the ticket information.
          </DialogDescription>
        </DialogHeader>

        <ExtendedForm
          formik={formik}
          onClose={handleCloseModal}
          submitText="Update Ticket"
          cancelText="Cancel"
        >
          <VisaForm />
        </ExtendedForm>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateTicket;
