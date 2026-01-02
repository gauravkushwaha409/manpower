import ExtendedForm from "@/components/extended-components/ExtendedForm";
import useUpdateChartOfAccount from "../hooks/use-update-chart-of-account";
import ChartOfAccountForm from "./chart-of-account-form";

const UpdateChartOfAccount = () => {
  const chartOfAccount = useUpdateChartOfAccount();
  return (
    <ExtendedForm
      formik={chartOfAccount.formik}
      isSubmitting={chartOfAccount.isLoading}
    >
      <ChartOfAccountForm />
    </ExtendedForm>
  );
};

export default UpdateChartOfAccount;
