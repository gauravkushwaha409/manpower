import { useFormik } from "formik";

export default function useCreateInsuranceCompany() {
  const formik = useFormik({ initialValues: {}, onSubmit: () => {} });

  return { formik };
}
