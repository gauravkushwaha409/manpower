import { useFormik } from "formik";

export default function useCreateSupplier() {
  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {},
  });
  return { formik };
}
