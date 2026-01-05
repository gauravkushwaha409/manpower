import { useFormik } from "formik";

export default function useCreateMedicalInstitute() {
  const formik = useFormik({ initialValues: {}, onSubmit: () => {} });

  return { formik };
}
