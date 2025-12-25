import ExtendedForm from "@/components/extended-components/ExtendedForm";
import IndustryForm from "@/pages/settings/job-setting/industry/partials/industry-form";
import useCreateIndustry from "../hooks/use-create-industry";

const CreateIndustry = () => {
  const createIndustry = useCreateIndustry();
  return (
    <ExtendedForm
      children={<IndustryForm />}
      formik={createIndustry?.formik}
      isSubmitting={createIndustry.isLoading}
    />
  );
};

export default CreateIndustry;
