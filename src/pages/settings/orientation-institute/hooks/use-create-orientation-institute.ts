import { useFormik } from "formik";

export default function useCreateOrientationInstitute() {
  const formik = useFormik({ initialValues: {}, onSubmit: () => {} });

  return { formik };
}
