import { useFormik } from "formik";

export default function useUpdateSupplier() {
  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {},
  });

  return { formik };
}
