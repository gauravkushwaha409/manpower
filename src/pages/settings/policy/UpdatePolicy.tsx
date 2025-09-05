import React from "react";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import PageHeader from "@/common/PageHeader";
import useUpdatePolicy from "./hooks/useUpdatePolicy";
import PolicyForm from "./partials/PolicyForm";

const UpdatePolicy: React.FC = () => {
  const { formik } = useUpdatePolicy();
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb Navone="Dashboard" Navtwo="Policy" />
      <PageHeader title="Update Policy" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <PolicyForm />
      </ExtendedForm>
    </div>
  );
};

export default UpdatePolicy;
