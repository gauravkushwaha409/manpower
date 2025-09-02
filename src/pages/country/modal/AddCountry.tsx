import { FormikProps } from "formik";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import CountryForm from "../partials/CountryForm";

interface IProps {
  isOpen: boolean;
  handleCloseModal: () => void;
}

const AddCountryModal: React.FC<IProps> = ({ handleCloseModal, isOpen }) => {
  return (
    <Dialog open={isOpen} onOpenChange={handleCloseModal}>
      <DialogContent className="max-h-[80vh] overflow-y-auto scroll-none sm:max-w-[80vw] lg:max-w-[70vw] [&>button:hover]:cursor-pointer">
        <DialogHeader>
          <DialogTitle>Add Country</DialogTitle>
          <DialogDescription>
            Fill the form to add a new Country.
          </DialogDescription>
        </DialogHeader>
        <CountryForm />
        {/* button   */}
        <div className="mt-8 flex items-center justify-end">
          <button
            type="submit"
            className="typography-button-text px-5 py-3 bg-Blue-400 rounded-lg"
          >
            Add Country
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddCountryModal;
