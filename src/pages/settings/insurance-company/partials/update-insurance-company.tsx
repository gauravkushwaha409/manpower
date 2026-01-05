import ExtendedForm from "@/components/extended-components/ExtendedForm";
import { useFormik } from "formik";
import InsuranceCompanyForm from "./insurance-company-form";

export default function UpdateInsuranceCompany() {
  const formik = useFormik({ initialValues: {}, onSubmit: () => {} });
  return (
    <ExtendedForm formik={formik}>
      <InsuranceCompanyForm />
    </ExtendedForm>
  );
}
