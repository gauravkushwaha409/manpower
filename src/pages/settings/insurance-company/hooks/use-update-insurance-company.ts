import { useFormik } from "formik";

export default function useUpdateInsuranceCompany() {
  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {},
  });

  return { formik };
}
