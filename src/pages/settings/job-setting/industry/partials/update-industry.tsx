import ExtendedForm from "@/components/extended-components/ExtendedForm";
import IndustryForm from "@/pages/settings/job-setting/industry/partials/IndustryForm";
import useUpdateIndustry from "../hooks/update-industry";

const UpdateIndustry = () => {
  const updateIndustry = useUpdateIndustry();
  return (
    <ExtendedForm children={<IndustryForm />} formik={updateIndustry?.formik} />
  );
};

export default UpdateIndustry;
