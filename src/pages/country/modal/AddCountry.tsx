import { FormikProps } from "formik";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ICountry } from "../interface/ICountry";
import CountryForm from "../partials/CountryForm";

interface IProps {
  isOpen: boolean;
  handleCloseModal: () => void;
  formik: FormikProps<ICountry>;
}

const AddCountryModal: React.FC<IProps> = ({
  formik,
  handleCloseModal,
  isOpen,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={handleCloseModal}>
      <DialogContent className="max-h-[80vh] overflow-y-auto scroll-none sm:max-w-[80vw] lg:max-w-[70vw] [&>button:hover]:cursor-pointer">
        <DialogHeader>
          <DialogTitle>Add Country</DialogTitle>
          <DialogDescription>
            Fill the form to add a new Country.
          </DialogDescription>
        </DialogHeader>
        <CountryForm formik={formik} />
      </DialogContent>
    </Dialog>
  );
};

export default AddCountryModal;
