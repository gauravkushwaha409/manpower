import React from "react";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import PageHeader from "@/common/PageHeader";
import useCreatePreApplication from "./hooks/useCreatePreApplication";
import PreApplicationForm from "./partials/PreApplicationForm";
import { PATH } from "@/constant/path";

const AddPreApplication: React.FC = () => {
  const { formik } = useCreatePreApplication();
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb
        items={[
          { label: "Dashboard" },
          {
            label: "Pre Application",
            to: PATH.dashboard.preApplication,
          },
          {
            label: "Add Pre Application",
          },
        ]}
      />
      <PageHeader title="Add Pre Application" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <PreApplicationForm />
      </ExtendedForm>
    </div>
  );
};

export default AddPreApplication;
