import React from "react";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import PageHeader from "@/common/PageHeader";
import PreApplicationForm from "./partials/PreApplicationForm";
import useUpdatePreApplication from "./hooks/useUpdatePreApplication";

const UpdatePreApplication: React.FC = () => {
  const { formik } = useUpdatePreApplication();
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb Navone="Dashboard" Navtwo="Pre Application" />
      <PageHeader title="Update Pre Application" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <PreApplicationForm />
      </ExtendedForm>
    </div>
  );
};

export default UpdatePreApplication;
