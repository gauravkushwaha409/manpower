import { InputSearchSelect } from "@/components/form/InputSelect";
import InputText from "@/components/form/InputText.tsx";
import TextEditor from "@/components/form/TextEditor";

const policyOptions = [{ label: "Terms Policy", value: "terms" }];

const PolicyForm = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-5">
        <InputSearchSelect
          options={policyOptions}
          label="Policy Type"
          name="policyType"
          placeholder="Enter Policy Type"
        />
        <InputText
          label="Policy Title"
          name="policyTitle"
          placeholder="Enter Policy Title"
        />
        <TextEditor label="Policy Description" name="policyDescription" />
      </div>
    </>
  );
};

export default PolicyForm;
