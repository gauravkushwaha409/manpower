import React from "react";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import PageHeader from "@/common/PageHeader";
import CompanyForm from "../../partials/CompanyForm";
import { PATH } from "@/constant/path";
import useUpdateCompany from "./hooks/use-update-company";

const UpdateCompany: React.FC = () => {
  const { formik } = useUpdateCompany();
  return (
    <div className="u-flex-child">
      <Breadcrumb
        items={[
          { label: "Dashboard" },
          {
            label: "Company",
            to: PATH.company.index,
          },
          {
            label: "Update Company",
          },
        ]}
      />
      <PageHeader title="Update Company" />
      <ExtendedForm formik={formik}>
        <CompanyForm />
      </ExtendedForm>
    </div>
  );
};

export default UpdateCompany;
