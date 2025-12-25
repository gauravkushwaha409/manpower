import ExtendedForm from "@/components/extended-components/ExtendedForm";
import IndustryForm from "@/pages/settings/job-setting/industry/partials/industry-form";
import useUpdateIndustry from "../hooks/use-update-industry";

const UpdateIndustry = () => {
  const updateIndustry = useUpdateIndustry();
  return (
    <ExtendedForm children={<IndustryForm />} formik={updateIndustry?.formik} />
  );
};

export default UpdateIndustry;
