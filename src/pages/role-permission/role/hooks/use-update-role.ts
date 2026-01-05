import { useFormik } from "formik";

export default function useUpdateRole() {
  const formik = useFormik({ initialValues: {}, onSubmit: () => {} });
  return { formik };
}
