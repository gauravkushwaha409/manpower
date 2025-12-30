import ExtendedForm from "@/components/extended-components/ExtendedForm";
import ModalWrapper from "@/components/shadcn/modal-wrapper";
import useMedicalToVisaModal from "../hooks/use-medical-to-visa-modal";
import useMedicalToVisa from "../hooks/use-medical-to-visa";
import FormInputSelect from "@/components/form/form-input-select";
import { visaStatusOption } from "@/pages/visa/partials/visa-form";

const MedicalToVisa = () => {
  const { handleCloseMedicalToVisa, isMedicalToVisaOpen } =
    useMedicalToVisaModal();
  const { formik, isLoading } = useMedicalToVisa();
  return (
    <ModalWrapper
      className="xl:max-w-2xl"
      name="Move medical candidate to visa"
      description="This will move the selected medical candidate to visa"
      isOpen={isMedicalToVisaOpen}
      onOpenChange={handleCloseMedicalToVisa}
    >
      <ExtendedForm formik={formik} isSubmitting={isLoading}>
        <div className="grid grid-cols-1 gap-4">
          <FormInputSelect
            label="Visa Status"
            name="status"
            options={visaStatusOption}
          />
        </div>
      </ExtendedForm>
    </ModalWrapper>
  );
};

export default MedicalToVisa;
