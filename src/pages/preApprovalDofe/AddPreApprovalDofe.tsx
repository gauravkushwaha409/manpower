import React from "react";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import PageHeader from "@/common/PageHeader";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import { PATH } from "@/constant/path";
import PreApprovalDofeForm from "./partials/PreApprovalDofeForm";
import useCreatePreApprovalDofe from "./hooks/useCreatePreApprovalDofe";

const AddPreApprovalDofe: React.FC = () => {
  const { formik } = useCreatePreApprovalDofe();
  // console.error(formik.errors);

  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb
        items={[
          { label: "Dashboard", to: PATH.dashboard.dashboard },
          {
            label: "Pre Approval Dofe",
            to: PATH.dashboard.preApprovalDofe,
          },
          {
            label: "Add Pre Approval Dofe",
          },
        ]}
      />
      <PageHeader title="Add Pre Approval Dofe" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <PreApprovalDofeForm  />
      </ExtendedForm>
    </div>
  );
};

export default AddPreApprovalDofe;
