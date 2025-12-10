import React from "react";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import PageHeader from "@/common/PageHeader";
import CompanyForm from "./partials/CompanyForm";
import useUpdateCompany from "./hooks/useUpdateCompany";
import { PATH } from "@/constant/path";

const UpdateCompany: React.FC = () => {
  const { formik } = useUpdateCompany();
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
            label: "Update Company",
          },
        ]}
      />
      <PageHeader title="Update Company" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <CompanyForm />
      </ExtendedForm>
    </div>
  );
};

export default UpdateCompany;
