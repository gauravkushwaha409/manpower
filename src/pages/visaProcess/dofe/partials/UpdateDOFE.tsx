import React from "react";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import VisaForm from "./DOFEForm";
import useUpdateDOFE from "../hooks/useUpdateDOFE";

interface IUpdateDOFEProps {
  isOpen: boolean;
  handleCloseModal: () => void;
}

const UpdateDOFE: React.FC<IUpdateDOFEProps> = ({
  handleCloseModal,
  isOpen,
}) => {
  const { formik } = useUpdateDOFE();
  return (
    <Dialog open={isOpen} onOpenChange={handleCloseModal}>
      <DialogContent className="max-h-[80vh] overflow-y-auto scroll-none sm:max-w-[80vw] lg:max-w-[70vw] [&>button:hover]:cursor-pointer">
        <DialogHeader>
          <DialogTitle>Update DOFE</DialogTitle>
          <DialogDescription>
            Edit the fields below to update the DOFE information.
          </DialogDescription>
        </DialogHeader>

        <ExtendedForm
          formik={formik}
          onClose={handleCloseModal}
          submitText="Update DOFE"
          cancelText="Cancel"
        >
          <VisaForm />
        </ExtendedForm>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateDOFE;
