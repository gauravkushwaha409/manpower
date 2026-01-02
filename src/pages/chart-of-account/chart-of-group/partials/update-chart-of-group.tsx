import ExtendedForm from "@/components/extended-components/ExtendedForm";
import useUpdateChartOfAccount from "../hooks/use-update-chart-of-group";
import ChartOfAccountForm from "./chart-of-group-form";

const UpdateChartOfGroup = () => {
  const chartOfGroup = useUpdateChartOfAccount();
  return (
    <ExtendedForm
      formik={chartOfGroup.formik}
      isSubmitting={chartOfGroup.isLoading}
    >
      <ChartOfAccountForm />
    </ExtendedForm>
  );
};

export default UpdateChartOfGroup;
