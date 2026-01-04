import { useFormik } from "formik";

export default function useCreateUser() {
  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {},
  });

  return { formik };
}
