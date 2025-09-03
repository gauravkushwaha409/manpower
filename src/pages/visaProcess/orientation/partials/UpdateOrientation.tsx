import React from "react";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import VisaForm from "./OrientationForm";
import useUpdateOrientation from "../hooks/useUpdateOrientation";

interface IUpdateOrientationProps {
  isOpen: boolean;
  handleCloseModal: () => void;
}

const UpdateOrientation: React.FC<IUpdateOrientationProps> = ({
  handleCloseModal,
  isOpen,
}) => {
  const { formik } = useUpdateOrientation();
  return (
    <Dialog open={isOpen} onOpenChange={handleCloseModal}>
      <DialogContent className="max-h-[80vh] overflow-y-auto scroll-none sm:max-w-[80vw] lg:max-w-[70vw] [&>button:hover]:cursor-pointer">
        <DialogHeader>
          <DialogTitle>Update Orientation</DialogTitle>
          <DialogDescription>
            Edit the fields below to update the orientation information.
          </DialogDescription>
        </DialogHeader>

        <ExtendedForm
          formik={formik}
          onClose={handleCloseModal}
          submitText="Update Orientation"
          cancelText="Cancel"
        >
          <VisaForm />
        </ExtendedForm>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateOrientation;
