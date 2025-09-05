import InputText from '@/components/form/InputText.tsx';
import TextEditor from '@/components/form/TextEditor';

const JobCategoryForm = () => {
  return (
    <>
      <div className="gap-5 grid grid-cols-1">
        <InputText label="Title" name="title" placeholder="Enter Job Title" />
        <TextEditor label="Description" name="description" />
      </div>
    </>
  );
};

export default JobCategoryForm;
