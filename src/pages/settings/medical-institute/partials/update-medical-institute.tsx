import ExtendedForm from "@/components/extended-components/ExtendedForm";
import { useFormik } from "formik";
import MedicalInstituteForm from "./medical-institute-form";

export default function UpdateMedicalInstitute() {
  const formik = useFormik({ initialValues: {}, onSubmit: () => {} });
  return (
    <ExtendedForm formik={formik}>
      <MedicalInstituteForm />
    </ExtendedForm>
  );
}
