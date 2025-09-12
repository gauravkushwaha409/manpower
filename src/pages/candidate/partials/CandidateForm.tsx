 import React from "react";
import Documents from "./Documents";
import SkillEducation from "./SkillEducation";
import BasicInformation from "./BasicInformation";

interface IProps {
  step: number;
}
const CandidateForm: React.FC<IProps> = ({ step }) => {
  return (
    <div className="space-y-4 gird grid-cols-2">
      {step === 0 && <BasicInformation />}
      {step === 1 && <SkillEducation />}
      {step === 2 && <Documents />}
    </div>
  );
};

export default CandidateForm;
