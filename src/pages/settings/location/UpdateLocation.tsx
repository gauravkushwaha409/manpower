import React from "react";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import PageHeader from "@/common/PageHeader";
import LocationForm from "./partials/LocationForm";
import useUpdateLocation from "./hooks/useUpdateLocation";

const UpdateLocation: React.FC = () => {
  const { formik } = useUpdateLocation();
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb Navone="Dashboard" Navtwo="Location" />
      <PageHeader title="Update Location" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <LocationForm />
      </ExtendedForm>
    </div>
  );
};

export default UpdateLocation;
