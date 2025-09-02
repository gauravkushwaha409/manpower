import React from "react";
import InputText from "@/components/form/InputText.tsx";

interface IProps {
  isUpdate?: boolean;
}

const LanguageForm: React.FC<IProps> = ({ isUpdate }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5">
        <InputText
          label="Language"
          name="language"
          placeholder="Enter Language Name"
        />
      </div>
      <div className="mt-8 flex items-center justify-end">
        <button
          type="submit"
          className="typography-button-text px-5 py-3 bg-Blue-400 rounded-lg"
        >
          {isUpdate ? "Update Language" : "Add Language"}
        </button>
      </div>
    </div>
  );
};
export default LanguageForm;
