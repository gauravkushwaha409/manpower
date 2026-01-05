import { useFormik } from "formik";

export default function useCreateRole() {
  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {},
  });

  return { formik };
}
