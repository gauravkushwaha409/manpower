import { useFormik } from "formik";

export default function useUpdateOrientationInstitute() {
  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {},
  });

  return { formik };
}
