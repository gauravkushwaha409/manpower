import FormInputSelect, { IOption } from "@/components/form/form-input-select";
import FormInputImage from "@/components/form/FormInputPhoto";
import FormInputText from "@/components/form/FormInputText";

const JobTitleForm = () => {
  const industryOption: IOption[] = [
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

  const categoryOption: IOption[] = [
    {
      label: "Finance & Accounting",
      value: "Finance & Accounting",
    },
    {
      label: "Legal",
      value: "Legal",
    },
    {
      label: "Office Administration",
      value: "Office Administration",
    },
    {
      label: "Customer Service",
      value: "Customer Service",
    },
    {
      label: "Warehouse",
      value: "Warehouse",
    },
    {
      label: "Logistics",
      value: "Logistics",
    },
    {
      label: "Hospitality",
      value: "Hospitality",
    },
    {
      label: "Retail",
      value: "Retail",
    },
    {
      label: "Labor",
      value: "Labor",
    },
  ];

  const subCategoryOption: IOption[] = [
    {
      label: "Frontend Developers",
      value: "Frontend Developers",
    },
    {
      label: "Backend Developers",
      value: "Backend Developers",
    },
    {
      label: "Mobile App Developers",
      value: "Mobile App Developers",
    },
    {
      label: "DevOps Engineers",
      value: "DevOps Engineers",
    },
    {
      label: "Network Administrators",
      value: "Network Administrators",
    },
    {
      label: "Cloud Engineers",
      value: "Cloud Engineers",
    },
    {
      label: "Registered Nurses",
      value: "Registered Nurses",
    },
    {
      label: "Pharmacists",
      value: "Pharmacists",
    },
    {
      label: "Lab Technicians",
      value: "Lab Technicians",
    },
  ];
  return (
    <div className="space-y-4">
      <FormInputSelect
        label="Industry"
        name="industry"
        options={industryOption}
      />
      <FormInputSelect
        label="Category"
        name="category"
        options={categoryOption}
      />
      <FormInputSelect
        label="Sub Category"
        name="sub_category"
        options={subCategoryOption}
      />
      <FormInputText
        label="Job Title"
        name="job_title"
        placeholder="e.g. Next Js Developer"
      />
      <FormInputImage label="Icon" name="category" />
    </div>
  );
};
export default JobTitleForm;
