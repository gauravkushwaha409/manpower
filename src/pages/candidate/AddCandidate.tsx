import PageHeader from "@/common/PageHeader";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import useCreateCandidate from "./hooks/useCreateCandidate";
import { useState } from "react";
import { CandidateValidationSchemaType } from "./schema/candidateValidationSchema";
import ExtendedMultiStepForm from "@/components/extended-components/ExtendedMultiStepForm";
import BasicInformation from "./partials/BasicInformation";
import SkillEducation from "./partials/SkillEducation";
import Documents from "./partials/Documents";
import { PATH } from "@/constant/path";

const AddCandidate = () => {
  const [step, setStep] = useState<number>(0);
  const createCandidate = useCreateCandidate({ step, setStep });
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb
        items={[
          { label: "Dashboard" },
          {
            label: "Candidate",
            to: PATH.dashboard.candidate,
          },
          {
            label: "Add Candidate",
          },
        ]}
      />
      <PageHeader title="Create Candidate" showAddButton={false} />
      <ExtendedMultiStepForm<CandidateValidationSchemaType>
        formik={createCandidate.formik}
        currentStep={step}
        onStepChange={(step) => {
          setStep(step);
        }}
        steps={[
          {
            content: <BasicInformation />,
            id: "basic_details",
            title: "Basic Details",
          },
          {
            content: <SkillEducation />,
            id: "skill_and_education",
            title: "Skill and Education",
          },
          {
            content: <Documents />,
            id: "documents",
            title: "Documents",
          },
        ]}
      />
    </div>
  );
};

export default AddCandidate;
