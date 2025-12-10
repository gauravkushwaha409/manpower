import React from "react";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import PageHeader from "@/common/PageHeader";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import { PATH } from "@/constant/path";
import { useParams } from "react-router-dom";
import PreApprovalDofeForm from "./partials/PreApprovalDofeForm";
import useUpdatePreApprovalDofe from "./hooks/useUpdatePreApprovalDofe";

const UpdatePreApprovalDofe: React.FC = () => {
  const { id } = useParams();
  const { formik } = useUpdatePreApprovalDofe({
    updateId: id || "",
  });
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
            label: "Update Pre Approval Dofe",
          },
        ]}
      />
      <PageHeader title="Update Pre Approval Dofe" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <PreApprovalDofeForm />
      </ExtendedForm>
    </div>
  );
};

export default UpdatePreApprovalDofe;
