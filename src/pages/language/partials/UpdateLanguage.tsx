import { Formik, FormikProps } from "formik";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import LanguageForm from "./LanguageForm";
import useUpdateLanguage from "../hooks/useUpdateLanguage";
import ExtendedForm from "@/components/input/extended-form";

interface IProps {
  isOpen: boolean;
  handleCloseModal: () => void;
  // formik: FormikProps<ILanguage>;
}

const UpdateLanguageModal: React.FC<IProps> = ({
  // formik,
  handleCloseModal,
  isOpen,
}) => {
  const { formik } = useUpdateLanguage();
  return (
    <Dialog open={isOpen} onOpenChange={handleCloseModal}>
      <DialogContent className="max-h-[80vh] overflow-y-auto scroll-none sm:max-w-[80vw] lg:max-w-[70vw] [&>button:hover]:cursor-pointer">
        <DialogHeader>
          <DialogTitle>Update Language</DialogTitle>
          <DialogDescription>
            Fill the form to update Language.
          </DialogDescription>
        </DialogHeader>
        {/* <LanguageForm formik={formik} isUpdate /> */}
        <ExtendedForm formik={formik}>
          <LanguageForm isUpdate />
        </ExtendedForm>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateLanguageModal;
