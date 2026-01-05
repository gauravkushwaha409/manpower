import ExtendedForm from "@/components/extended-components/ExtendedForm";
import useCreateMedicalInstitute from "../hooks/use-create-medical-institute";
import MedicalInstituteForm from "./medical-institute-form";

export default function CreateMedicalInstitute() {
  const medicalInstitute = useCreateMedicalInstitute();
  return (
    <ExtendedForm formik={medicalInstitute.formik}>
      <MedicalInstituteForm />
    </ExtendedForm>
  );
}
