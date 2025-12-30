import ModalWrapper from "@/components/shadcn/modal-wrapper";
import useJobOfferToMedical from "../hooks/use-job-offer-to-medical";
import useJobOfferToMedicalModal from "../hooks/use-job-offer-to-medical-modal";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import FormInputSelect from "@/components/form/form-input-select";
import { medicalStatusOption } from "@/pages/medical/partials/medical-form";

const JobOfferToMedical = () => {
  const { isJobOfferToMedicalOpen, handleCloseJobOfferToMedical } =
    useJobOfferToMedicalModal();
  const { formik, isLoading } = useJobOfferToMedical();
  return (
    <ModalWrapper
      className="xl:max-w-2xl"
      name="Move candidate to interview"
      description="This will move the selected job offer candidate to medical"
      isOpen={isJobOfferToMedicalOpen}
      onOpenChange={handleCloseJobOfferToMedical}
    >
      <ExtendedForm formik={formik} isSubmitting={isLoading}>
        <div className="grid grid-cols-1 gap-4">
          <FormInputSelect
            label="Status"
            name="status"
            options={medicalStatusOption}
          />
        </div>
      </ExtendedForm>
    </ModalWrapper>
  );
};
export default JobOfferToMedical;
