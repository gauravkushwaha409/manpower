import ExtendedForm from "@/components/extended-components/ExtendedForm";
import useCreateOrientationInstitute from "../hooks/use-create-orientation-institute";
import OrientationInstituteForm from "./orientation-institute-form";

export default function CreateOrientationInstitute() {
  const OrientationInstitute = useCreateOrientationInstitute();
  return (
    <ExtendedForm formik={OrientationInstitute.formik}>
      <OrientationInstituteForm />
    </ExtendedForm>
  );
}
