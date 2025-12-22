import React, { useState } from "react";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import PageHeader from "@/common/PageHeader";
import { PATH } from "@/constant/path";
import ExtendedMultiStepForm from "@/components/extended-components/ExtendedMultiStepForm";
import useUpdatePreApprovalDofe from "./hooks/useUpdatePreApprovalDofe";
import {
  PreApprovalFormStep1,
  PreApprovalFormStep2,
} from "../../partials/PreApprovalDofeForm";

const UpdatePreApprovalDofe: React.FC = () => {
  const [step, setStep] = useState(0);
  const update = useUpdatePreApprovalDofe();
  return (
    <div className="u-flex-child flex flex-col gap-4">
      <Breadcrumb
        items={[
          { label: "Dashboard", to: PATH.dashboard.dashboard },
          {
            label: "Pre Approval Dofe",
            to: PATH.preApprovalDofe.index,
          },
          {
            label: "Update",
          },
        ]}
      />
      <PageHeader title="Update Pre Approval Dofe" showAddButton={false} />
      <ExtendedMultiStepForm
        formik={update.formik}
        currentStep={step}
        onStepChange={() => setStep(step + 1)}
        steps={[
          {
            id: "pre-approval-step-1",
            title: "Step-1",
            content: <PreApprovalFormStep1 />,
          },
          {
            id: "pre-approval-step-2",
            title: "Step-2",
            content: <PreApprovalFormStep2 />,
          },
        ]}
      />
    </div>
  );
};

export default UpdatePreApprovalDofe;
