import React from "react";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import useCreateVisa from "../hooks/useCreateVisa";
import VisaForm from "./VisaForm";

interface IAddVisaProps {
  isOpen: boolean;
  handleCloseModal: () => void;
}

const AddVisa: React.FC<IAddVisaProps> = ({ handleCloseModal, isOpen }) => {
  const { formik } = useCreateVisa();
  return (
    <Dialog open={isOpen} onOpenChange={handleCloseModal}>
      <DialogContent className="max-h-[80vh] overflow-y-auto scroll-none sm:max-w-[80vw] lg:max-w-[70vw] [&>button:hover]:cursor-pointer">
        <DialogHeader>
          <DialogTitle>Add Visa</DialogTitle>
          <DialogDescription>
            Fill in the form to add a new visa
          </DialogDescription>
        </DialogHeader>

        <ExtendedForm
          formik={formik}
          onClose={handleCloseModal}
          submitText="Add Visa"
          cancelText="Cancel"
        >
          <VisaForm />
        </ExtendedForm>
      </DialogContent>
    </Dialog>
  );
};

export default AddVisa;
