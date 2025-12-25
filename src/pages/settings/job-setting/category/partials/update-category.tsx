import ExtendedForm from "@/components/extended-components/ExtendedForm";
import useUpdateCategory from "../hooks/use-update-category";
import CategoryForm from "./category-form";
import LoadingScreen from "@/components/reusable-component/LoadingScreen";

const UpdateCategory = () => {
  const { formik, isInitialLoading, isLoading } = useUpdateCategory();
  return (
    <ExtendedForm formik={formik} isSubmitting={isLoading}>
      {isInitialLoading ? <CategoryForm /> : <LoadingScreen />}
    </ExtendedForm>
  );
};

export default UpdateCategory;
