import PageHeader from "@/common/PageHeader";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import useUpdateCandidate from "./hooks/useUpdateCandidate";
import { useState } from "react";
import ExtendedMultiStepForm from "@/components/extended-components/ExtendedMultiStepForm";
import { CandidateValidationSchemaType } from "./schema/candidateValidationSchema";
import BasicInformation from "./partials/BasicInformation";
import SkillEducation from "./partials/SkillEducation";
import Documents from "./partials/Documents";

const UpdateCandidate = () => {
  const [step, setStep] = useState<number>(0);
  const updateCandidate = useUpdateCandidate({ setStep, step });
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb Navone="Dashboard" Navtwo="Company" />
      <PageHeader title="Update Company" showAddButton={false} />
      <ExtendedMultiStepForm<CandidateValidationSchemaType>
        formik={updateCandidate.updateCandidateFormik}
        currentStep={step}
        onStepChange={(step) => { setStep(step) }}
        steps={[
          {
            content: <BasicInformation />,
            id: "basic_details",
            title: "Basic Details",
          },
          {
            content: <SkillEducation />,
            id: "skill_and_education",
            title: "Skill and Education"
          },
          {
            content: <Documents />,
            id: "documents",
            title: "Documents"
          },
        ]}

      />
    </div>
  );
};

export default UpdateCandidate;
