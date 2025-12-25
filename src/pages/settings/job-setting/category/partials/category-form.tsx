import FormInputSelect, { IOption } from "@/components/form/form-input-select";
import FormInputImage from "@/components/form/FormInputPhoto";
import FormInputText from "@/components/form/FormInputText";

const CategoryForm = () => {
  const categoryOption: IOption[] = [
    {
      label: "Information Technology",
      value: "Information Technology",
    },
    {
      label: "Healthcare & Medical",
      value: "Healthcare & Medical",
    },
    {
      label: "Manufacturing & Engineering",
      value: "Manufacturing & Engineering",
    },
    {
      label: "Construction",
      value: "Construction",
    },
    {
      label: "Retail & Hospitality",
      value: "Retail & Hospitality",
    },
    {
      label: "Professional Services",
      value: "Professional Services",
    },
    {
      label: "Administrative & Support",
      value: "Administrative & Support",
    },
  ];
  return (
    <div className="space-y-4">
      <FormInputSelect
        label="Industry"
        name="industry"
        options={categoryOption}
      />
      <FormInputText
        label="Category"
        name="category"
        placeholder="e.g. Finance & Accounting"
      />
      <FormInputImage label="Icon" name="category" />
    </div>
  );
};
export default CategoryForm;
