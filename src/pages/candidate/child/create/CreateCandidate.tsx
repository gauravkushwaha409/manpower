import ExtendedMultiStepForm from "@/components/extended-components/ExtendedMultiStepForm";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import { PATH } from "@/constant/path";
import { useCreateCandidate } from "./hooks/use-create-candidate";
import {
  CandidateFormStep1,
  CandidateFormStep2,
  CandidateFormStep3,
  CandidateFormStep4,
} from "../../partials/candidate-form";

const CreateCandidate = () => {
  const { formik, step, setStep } = useCreateCandidate();
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
            label: "Create",
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
          {
            id: "candidate-step-4",
            title: "Step-4",
            content: <CandidateFormStep4 />,
          },
        ]}
      />
    </div>
  );
};

export default CreateCandidate;
