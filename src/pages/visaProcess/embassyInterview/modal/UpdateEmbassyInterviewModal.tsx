import React from "react";
import ExtendedForm from "@/components/extended-components/extended-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import useUpdateEmbassyInterview from "../hooks/useUpdateEmbassyInterview";
import EmbassyInterviewForm from "../partials/EmbassyInterviewForm";

interface IProps {
  isOpen: boolean;
  handleCloseModal: () => void;
}

const UpdateEmbassyInterviewModal: React.FC<IProps> = ({
  handleCloseModal,
  isOpen,
}) => {
  const { formik } = useUpdateEmbassyInterview();
  return (
    <Dialog open={isOpen} onOpenChange={handleCloseModal}>
      <DialogContent className="max-h-[80vh] overflow-y-auto scroll-none sm:max-w-[80vw] lg:max-w-[70vw] [&>button:hover]:cursor-pointer">
        <DialogHeader>
          <DialogTitle>Update Embassy Interview</DialogTitle>
          <DialogDescription>
            Edit the fields below to update the embassy interview information.
          </DialogDescription>
        </DialogHeader>

        <ExtendedForm
          formik={formik}
          onClose={handleCloseModal}
          submitText="Update Embassy Interview"
          cancelText="Cancel"
        >
          <EmbassyInterviewForm />
        </ExtendedForm>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateEmbassyInterviewModal;
