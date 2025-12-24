import ExtendedMultiStepForm from "@/components/extended-components/ExtendedMultiStepForm";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import { PATH } from "@/constant/path";
import { useUpdateCandidate } from "./hooks/update-candidate";
import {
  CandidateFormStep1,
  CandidateFormStep2,
  CandidateFormStep3,
} from "../../partials/candidate-form";

const UpdateCandidate = () => {
  const { formik, setStep, step } = useUpdateCandidate();
  return (
    <div className="u-flex-child flex flex-col gap-4">
      <Breadcrumb
        items={[
          { label: "Dashboard", to: PATH.dashboard.dashboard },
          {
            label: "Candidate",
            to: PATH.candidate.index,
          },
          {
            label: "Update",
          },
        ]}
      />
      <ExtendedMultiStepForm
        formik={formik}
        currentStep={step}
        onStepChange={(step: number) => setStep(step)}
        steps={[
          {
            id: "candidate-step-1",
            title: "Step-1",
            content: <CandidateFormStep1 />,
          },
          {
            id: "candidate-step-2",
            title: "Step-2",
            content: <CandidateFormStep2 />,
          },
          {
            id: "candidate-step-3",
            title: "Step-3",
            content: <CandidateFormStep3 />,
          },
        ]}
      />
    </div>
  );
};

export default UpdateCandidate;
