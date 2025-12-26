import React from "react";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import useCreateIndustry from "./hooks/use-create-comapny";
import CompanyForm from "../../partials/CompanyForm";
import { PATH } from "@/constant/path";

const CreateCompany: React.FC = () => {
  const { formik } = useCreateIndustry();
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
            label: "Create",
          },
        ]}
      />
      <ExtendedForm formik={formik}>
        <CompanyForm />
      </ExtendedForm>
    </div>
  );
};

export default CreateCompany;
