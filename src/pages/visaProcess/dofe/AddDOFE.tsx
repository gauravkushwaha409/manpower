import React from "react";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import useCreateDOFE from "./hooks/useCreateDOFE";
import DOFEForm from "./partials/DOFEForm";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import PageHeader from "@/common/PageHeader";

const AddDOFE: React.FC = () => {
  const { formik } = useCreateDOFE();
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb
        Navone="Dashboard"
        Navtwo="Department of Foreign Employment (DOFE)"
      />
      <PageHeader
        title="Add Department of Foreign Employment (DOFE)"
        showAddButton={false}
      />
      <ExtendedForm formik={formik}>
        <DOFEForm />
      </ExtendedForm>
    </div>
  );
};

export default AddDOFE;
