import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import LanguageForm from "./LanguageForm";
import useCreateLanguage from "@/pages/language/hooks/useCreateLanguage.ts";

import ExtendedForm from "@/components/input/extended-form";

interface IProps {
  isOpen: boolean;
  handleCloseModal: () => void;
}

const AddLanguageModal: React.FC<IProps> = ({ handleCloseModal, isOpen }) => {
  const { formik } = useCreateLanguage();
  return (
    <Dialog open={isOpen} onOpenChange={handleCloseModal}>
      <DialogContent className="max-h-[80vh] overflow-y-auto scroll-none sm:max-w-[80vw] lg:max-w-[50vw] [&>button:hover]:cursor-pointer">
        <DialogHeader>
          <DialogTitle>Add Language</DialogTitle>
          <DialogDescription>
            Fill the form to add a new Language.
          </DialogDescription>
        </DialogHeader>
        <ExtendedForm formik={formik}>
          <LanguageForm />
        </ExtendedForm>
      </DialogContent>
    </Dialog>
  );
};

export default AddLanguageModal;
