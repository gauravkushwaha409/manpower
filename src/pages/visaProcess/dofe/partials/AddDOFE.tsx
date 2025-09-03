import React from "react";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import useCreateDOFE from "../hooks/useCreateDOFE";
import DOFEForm from "./DOFEForm";

interface IAddDOFEProps {
  isOpen: boolean;
  handleCloseModal: () => void;
}

const AddDOFE: React.FC<IAddDOFEProps> = ({ handleCloseModal, isOpen }) => {
  const { formik } = useCreateDOFE();
  return (
    <Dialog open={isOpen} onOpenChange={handleCloseModal}>
      <DialogContent className="max-h-[80vh] overflow-y-auto scroll-none sm:max-w-[80vw] lg:max-w-[70vw] [&>button:hover]:cursor-pointer">
        <DialogHeader>
          <DialogTitle>Add DOFE</DialogTitle>
          <DialogDescription>
            Fill in the form to add a new DOFE
          </DialogDescription>
        </DialogHeader>

        <ExtendedForm
          formik={formik}
          onClose={handleCloseModal}
          submitText="Add DOFE"
          cancelText="Cancel"
        >
          <DOFEForm />
        </ExtendedForm>
      </DialogContent>
    </Dialog>
  );
};

export default AddDOFE;
