import FormInputSelect from "@/components/form/form-input-select";
import FormInputText from "@/components/form/FormInputText";

const DocumentForm = () => {
  return (
    <div className="space-y-4">
      <FormInputSelect
        label="Country"
        name="country"
        options={[
          { label: "Nepal", value: "nepal" },
          { label: "Dubai", value: "dubai" },
          { label: "Saudi Arab", value: "saudi" },
          { label: "Qatar", value: "qatar" },
        ]}
      />
      <FormInputText
        label="Document"
        name="document"
        placeholder="e.g. Passport"
      />
    </div>
  );
};
export default DocumentForm;
