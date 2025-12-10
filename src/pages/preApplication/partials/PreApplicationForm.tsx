import { InputFile } from "@/components/form/InputFile";
import InputText from "@/components/form/FormInputText";
import TextEditor from "@/components/form/TextEditor";

const PreApplicationForm = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-5">
        <InputText
          label="Industry"
          name="industry"
          placeholder="Enter Industry"
        />{" "}
        <InputText label="Title" name="title" placeholder="Enter title" />
        <div className="flex flex-col gap-2">
          <label className="typography-p2-regular">Description</label>
          <TextEditor name="description" label="Description" />
        </div>
        <InputFile label="Documents" name="document" />
      </div>
    </>
  );
};

export default PreApplicationForm;
