import React from "react";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import OrientationForm from "./OrientationForm";
import useCreateOrientation from "../hooks/useCreateOrientation";

interface IAddOrientationProps {
  isOpen: boolean;
  handleCloseModal: () => void;
}

const AddOrientation: React.FC<IAddOrientationProps> = ({
  handleCloseModal,
  isOpen,
}) => {
  const { formik } = useCreateOrientation();
  return (
    <Dialog open={isOpen} onOpenChange={handleCloseModal}>
      <DialogContent className="max-h-[80vh] overflow-y-auto scroll-none sm:max-w-[80vw] lg:max-w-[70vw] [&>button:hover]:cursor-pointer">
        <DialogHeader>
          <DialogTitle>Add Orientation</DialogTitle>
          <DialogDescription>
            Fill in the form to add a new orientation
          </DialogDescription>
        </DialogHeader>

        <ExtendedForm
          formik={formik}
          onClose={handleCloseModal}
          submitText="Add Orientation"
          cancelText="Cancel"
        >
          <OrientationForm />
        </ExtendedForm>
      </DialogContent>
    </Dialog>
  );
};

export default AddOrientation;
