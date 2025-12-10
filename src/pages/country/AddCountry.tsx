import React from "react";
import CountryForm from "./partials/CountryForm";
import useCreateCountry from "./hooks/useCreateCountry";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import PageHeader from "@/common/PageHeader";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import { PATH } from "@/constant/path";

const AddCountry: React.FC = () => {
  const { formik } = useCreateCountry();
  return (
    <div className="flex flex-col gap-4">
       <Breadcrumb
        items={[
          { label: "Dashboard" },
          {
            label: "Country",
            to: PATH.dashboard.country,
          },
          {
            label: "Add Country",
          },
        ]}
      />
      <PageHeader title="Add Country" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <CountryForm />
      </ExtendedForm>
    </div>
  );
};

export default AddCountry;
