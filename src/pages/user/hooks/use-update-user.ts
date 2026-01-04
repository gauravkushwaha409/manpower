import { useFormik } from "formik";

export default function useUpdateUser() {
  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {},
  });

  return { formik };
}
