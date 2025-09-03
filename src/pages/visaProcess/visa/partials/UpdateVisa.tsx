import React from "react";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import VisaForm from "./VisaForm";
import useUpdateVisa from "../hooks/useUpdateVisa";

interface IUpdateEmbassyInterviewProps {
  isOpen: boolean;
  handleCloseModal: () => void;
}

const UpdateVisa: React.FC<IUpdateEmbassyInterviewProps> = ({
  handleCloseModal,
  isOpen,
}) => {
  const { formik } = useUpdateVisa();
  return (
    <Dialog open={isOpen} onOpenChange={handleCloseModal}>
      <DialogContent className="max-h-[80vh] overflow-y-auto scroll-none sm:max-w-[80vw] lg:max-w-[70vw] [&>button:hover]:cursor-pointer">
        <DialogHeader>
          <DialogTitle>Update Visa</DialogTitle>
          <DialogDescription>
            Edit the fields below to update the visa information.
          </DialogDescription>
        </DialogHeader>

        <ExtendedForm
          formik={formik}
          onClose={handleCloseModal}
          submitText="Update Visa"
          cancelText="Cancel"
        >
          <VisaForm />
        </ExtendedForm>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateVisa;
