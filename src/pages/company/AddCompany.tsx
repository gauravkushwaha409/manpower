import React from "react";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import PageHeader from "@/common/PageHeader";
import useCreateIndustry from "./hooks/useCreateCompany";
import CompanyForm from "./partials/CompanyForm";
import { PATH } from "@/constant/path";

const AddCompany: React.FC = () => {
  const { formik } = useCreateIndustry();
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb
        items={[
          { label: "Dashboard" },
          {
            label: "Company",
            to: PATH.dashboard.company,
          },
          {
            label: "Add Company",
          },
        ]}
      />
      <PageHeader title="Add Company" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <CompanyForm />
      </ExtendedForm>
    </div>
  );
};

export default AddCompany;
