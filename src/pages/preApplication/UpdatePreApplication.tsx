import React from "react";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import PageHeader from "@/common/PageHeader";
import PreApplicationForm from "./partials/PreApplicationForm";
import useUpdatePreApplication from "./hooks/useUpdatePreApplication";
import { PATH } from "@/constant/path";

const UpdatePreApplication: React.FC = () => {
  const { formik } = useUpdatePreApplication();
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
            label: "Update Pre Application",
          },
        ]}
      />
      <PageHeader title="Update Pre Application" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <PreApplicationForm />
      </ExtendedForm>
    </div>
  );
};

export default UpdatePreApplication;
