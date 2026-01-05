import { useFormik } from "formik";

export default function useUpdateMedicalInstitute() {
  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {},
  });

  return { formik };
}
