import React from "react";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import MedicalReportForm from "./MedicalReportForm";
import useCreateMedicalReport from "../hooks/useCreateMedicalReport";

interface IAddMedicalReportProps {
  isOpen: boolean;
  handleCloseModal: () => void;
}

const AddMedicalReport: React.FC<IAddMedicalReportProps> = ({
  handleCloseModal,
  isOpen,
}) => {
  const { formik } = useCreateMedicalReport();
  return (
    <Dialog open={isOpen} onOpenChange={handleCloseModal}>
      <DialogContent className="max-h-[80vh] overflow-y-auto scroll-none sm:max-w-[80vw] lg:max-w-[70vw] [&>button:hover]:cursor-pointer">
        <DialogHeader>
          <DialogTitle>Add Medical Report</DialogTitle>
          <DialogDescription>
            Fill in the form to add a new medical report
          </DialogDescription>
        </DialogHeader>

        <ExtendedForm
          formik={formik}
          onClose={handleCloseModal}
          submitText="Add Medical Report"
          cancelText="Cancel"
        >
          <MedicalReportForm />
        </ExtendedForm>
      </DialogContent>
    </Dialog>
  );
};

export default AddMedicalReport;
