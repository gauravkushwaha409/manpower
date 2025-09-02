import React from "react";
import CountryForm from "./CountryForm";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import useCreateCountry from "../hooks/useCreateCountry";

interface IAddCountryProps {
  isOpen: boolean;
  handleCloseModal: () => void;
}

const AddCountry: React.FC<IAddCountryProps> = ({
  handleCloseModal,
  isOpen,
}) => {
  const { formik } = useCreateCountry();
  return (
    <Dialog open={isOpen} onOpenChange={handleCloseModal}>
      <DialogContent className="max-h-[80vh] overflow-y-auto scroll-none sm:max-w-[80vw] lg:max-w-[70vw] [&>button:hover]:cursor-pointer">
        <DialogHeader>
          <DialogTitle>Add Country</DialogTitle>
          <DialogDescription>
            Fill in the form to add a new country
          </DialogDescription>
        </DialogHeader>

        <ExtendedForm
          formik={formik}
          onClose={handleCloseModal}
          submitText="Add Country"
          cancelText="Cancel"
        >
          <CountryForm />
        </ExtendedForm>
      </DialogContent>
    </Dialog>
  );
};

export default AddCountry;
