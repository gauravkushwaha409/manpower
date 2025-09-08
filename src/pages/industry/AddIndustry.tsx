import React from "react";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import PageHeader from "@/common/PageHeader";
import useCreateIndustry from "./hooks/useCreateIndustry";
import IndustryForm from "./partials/IndustryForm";

const AddIndustry: React.FC = () => {
  const { formik } = useCreateIndustry();
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb Navone="Dashboard" Navtwo="Industry" />
      <PageHeader title="Update Industry" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <IndustryForm />
      </ExtendedForm>
    </div>
  );
};

export default AddIndustry;
