import ExtendedForm from "@/components/extended-components/ExtendedForm";
import useCreateInsuranceCompany from "../hooks/use-create-insurance-company";
import InsuranceCompanyForm from "./insurance-company-form";

export default function CreateInsuranceCompany() {
  const insuranceCompany = useCreateInsuranceCompany();
  return (
    <ExtendedForm formik={insuranceCompany.formik}>
      <InsuranceCompanyForm />
    </ExtendedForm>
  );
}
