import React from "react";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import PageHeader from "@/common/PageHeader";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import LocationForm from "./partials/LocationForm";
import useCreateLocation from "./hooks/useCreateLocation";

const AddLocation: React.FC = () => {
  const { formik } = useCreateLocation();
  
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb Navone="Dashboard" Navtwo="Location" />
      <PageHeader title="Add Location" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <LocationForm />
      </ExtendedForm>
    </div>
  );
};

export default AddLocation;
