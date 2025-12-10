import React from "react";
import InputText from "@/components/form/FormInputText";

const LanguageForm: React.FC = () => {
  return (
    <div className="gap-5 grid grid-cols-1">
      <InputText
        label="Language"
        name="language"
        placeholder="Enter Language Name"
      />
    </div>
  );
};
export default LanguageForm;
