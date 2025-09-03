import React from "react";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import VisaForm from "./MedicalReportForm";
import useUpdateMedicalReport from "../hooks/useUpdateMedicalReport";

interface IUpdateMedicalReportProps {
  isOpen: boolean;
  handleCloseModal: () => void;
}

const UpdateMedicalReport: React.FC<IUpdateMedicalReportProps> = ({
  handleCloseModal,
  isOpen,
}) => {
  const { formik } = useUpdateMedicalReport();
  return (
    <Dialog open={isOpen} onOpenChange={handleCloseModal}>
      <DialogContent className="max-h-[80vh] overflow-y-auto scroll-none sm:max-w-[80vw] lg:max-w-[70vw] [&>button:hover]:cursor-pointer">
        <DialogHeader>
          <DialogTitle>Update Medical Report</DialogTitle>
          <DialogDescription>
            Edit the fields below to update the medical report information.
          </DialogDescription>
        </DialogHeader>

        <ExtendedForm
          formik={formik}
          onClose={handleCloseModal}
          submitText="Update Medical Report"
          cancelText="Cancel"
        >
          <VisaForm />
        </ExtendedForm>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateMedicalReport;
