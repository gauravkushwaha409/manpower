import React from "react";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import PageHeader from "@/common/PageHeader";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import useCreatePolicy from "./hooks/useCreatePolicy";
import PolicyForm from "./partials/PolicyForm";

const AddPolicy: React.FC = () => {
  const { formik } = useCreatePolicy();

  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb Navone="Dashboard" Navtwo="Policy" />
      <PageHeader title="Add Policy" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <PolicyForm />
      </ExtendedForm>
    </div>
  );
};

export default AddPolicy;
