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
import useUpdateCountry from "../hooks/useUpdateCountry";

interface IUpdateCountryProps {
  isOpen: boolean;
  handleCloseModal: () => void;
}

const UpdateCountry: React.FC<IUpdateCountryProps> = ({
  handleCloseModal,
  isOpen,
}) => {
  const { formik } = useUpdateCountry();
  return (
    <Dialog open={isOpen} onOpenChange={handleCloseModal}>
      <DialogContent className="max-h-[80vh] overflow-y-auto scroll-none sm:max-w-[80vw] lg:max-w-[70vw] [&>button:hover]:cursor-pointer">
        <DialogHeader>
          <DialogTitle>Update Country</DialogTitle>
          <DialogDescription>
            Edit the fields below to update the country information.
          </DialogDescription>
        </DialogHeader>

        <ExtendedForm
          formik={formik}
          onClose={handleCloseModal}
          submitText="Update Country"
          cancelText="Cancel"
        >
          <CountryForm />
        </ExtendedForm>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateCountry;
