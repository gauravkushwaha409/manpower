import InputSearchSelect from "@/components/form/form-input-select";
import InputText from "@/components/form/FormInputText";
import TextEditor from "@/components/form/TextEditor";

const seoOptions = [{ label: "Home", value: "home" }];

const SeoForm = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-5">
        <InputSearchSelect
          options={seoOptions}
          label="SEO Type"
          name="seoType"
          placeholder="Enter SEO Type"
        />
        <InputText
          label="Meta Title"
          name="meta_title"
          placeholder="Enter Meta Title"
        />
        <TextEditor label="Meta Description" name="meta_description" />
        <InputText
          label="Og Title"
          name="og_title"
          placeholder="Enter Og Title"
        />
        <TextEditor label="Og Description" name="og_description" />
      </div>
    </>
  );
};

export default SeoForm;
