import InputText from "@/components/form/FormInputText";

const IndustryForm = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        <InputText
          label="Industry"
          name="industry"
          placeholder="Enter Industry"
        />
      </div>
    </>
  );
};

export default IndustryForm;
