import ExtendedForm from "@/components/extended-components/ExtendedForm";
import SubCategoryForm from "./sub-category-form";
import useCreateSubCategory from "../hooks/use-create-sub-category";

const CreateSubCategory = () => {
  const { formik, isLoading } = useCreateSubCategory();
  return (
    <ExtendedForm formik={formik} isSubmitting={isLoading}>
      <SubCategoryForm />
    </ExtendedForm>
  );
};

export default CreateSubCategory;
