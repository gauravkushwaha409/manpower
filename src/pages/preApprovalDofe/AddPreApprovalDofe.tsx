import React, { useState } from "react";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import PageHeader from "@/common/PageHeader";
import { PATH } from "@/constant/path";
import {
  PreApprovalFormStep1,
  PreApprovalFormStep2,
} from "./partials/PreApprovalDofeForm";
import useCreatePreApprovalDofe from "./hooks/useCreatePreApprovalDofe";
import ExtendedMultiStepForm from "@/components/extended-components/ExtendedMultiStepForm";

const AddPreApprovalDofe: React.FC = () => {
  const { formik } = useCreatePreApprovalDofe();
  const [step, setStep] = useState(0);

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
      <ExtendedMultiStepForm
        formik={formik}
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

export default AddPreApprovalDofe;
