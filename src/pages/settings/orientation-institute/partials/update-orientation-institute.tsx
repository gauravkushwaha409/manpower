import ExtendedForm from "@/components/extended-components/ExtendedForm";
import { useFormik } from "formik";
import OrientationInstituteForm from "./orientation-institute-form";

export default function UpdateOrientationInstitute() {
  const formik = useFormik({ initialValues: {}, onSubmit: () => {} });
  return (
    <ExtendedForm formik={formik}>
      <OrientationInstituteForm />
    </ExtendedForm>
  );
}
