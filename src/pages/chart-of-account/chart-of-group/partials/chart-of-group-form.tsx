import FormInputSelect, { IOption } from "@/components/form/form-input-select";
import FormInputTextArea from "@/components/form/form-input-text-area";
import FormInputText from "@/components/form/FormInputText";

const ChartOfGroupForm = () => {
  const underOption: IOption[] = [
    { label: "Purchase", value: "purchase" },
    { label: "Deposite Assets", value: "deposite-assets" },
    { label: "Land", value: "land" },
    { label: "Long Term Investment", value: "long-term-investment" },
  ];
  return (
    <div className="grid grid-cols-1 gap-4">
      <FormInputText label="Group Name" name="group_name" required />
      <FormInputSelect
        label="Under"
        name="under"
        options={underOption}
        required
      />
      <FormInputTextArea label="Description" name="description" />
    </div>
  );
};
export default ChartOfGroupForm;
