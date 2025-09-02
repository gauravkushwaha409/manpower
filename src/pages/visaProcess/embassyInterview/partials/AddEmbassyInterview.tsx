import React from "react";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import useCreateEmbassyInterview from "../hooks/useCreateEmbassyInterview";
import EmbassyInterviewForm from "./EmbassyInterviewForm";

interface IAddEmbassyInterviewProps {
  isOpen: boolean;
  handleCloseModal: () => void;
}

const AddEmbassyInterview: React.FC<IAddEmbassyInterviewProps> = ({
  handleCloseModal,
  isOpen,
}) => {
  const { formik } = useCreateEmbassyInterview();
  return (
    <Dialog open={isOpen} onOpenChange={handleCloseModal}>
      <DialogContent className="max-h-[80vh] overflow-y-auto scroll-none sm:max-w-[80vw] lg:max-w-[70vw] [&>button:hover]:cursor-pointer">
        <DialogHeader>
          <DialogTitle>Add Embassy Interview</DialogTitle>
          <DialogDescription>
            Fill in the form to add a new embassy interview.
          </DialogDescription>
        </DialogHeader>

        <ExtendedForm
          formik={formik}
          onClose={handleCloseModal}
          submitText="Add Embassy Interview"
          cancelText="Cancel"
        >
          <EmbassyInterviewForm />
        </ExtendedForm>
      </DialogContent>
    </Dialog>
  );
};

export default AddEmbassyInterview;
