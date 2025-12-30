import ModalWrapper from "@/components/shadcn/modal-wrapper";
import useMoveToJobOfferModal from "../hooks/use-move-to-job-offer-modal";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import FormInputSelect from "@/components/form/form-input-select";
import FormInputDate from "@/components/form/form-input-date";
import useMoveToJobOffer from "../hooks/use-move-to-job-offer";

const MoveToJobOffer = () => {
  const { isMoveToJobOfferOpen, handleCloseMoveToJobOffer } =
    useMoveToJobOfferModal();
  const { formik, isLoading } = useMoveToJobOffer();
  return (
    <ModalWrapper
      name="Move interview candidate to job offer"
      description="This action will move the selected interview candidate to job offer"
      isOpen={isMoveToJobOfferOpen}
      onOpenChange={handleCloseMoveToJobOffer}
    >
      <ExtendedForm formik={formik} isSubmitting={isLoading}>
        <div className="grid grid-cols-1 gap-4">
          <FormInputSelect
            label="Candidate Job"
            name="candidate_job"
            options={[]}
          />
          <FormInputDate label="Offer Date" name="offer_date" />
          <FormInputDate label="Joining Date" name="joining_date" />
        </div>
      </ExtendedForm>
    </ModalWrapper>
  );
};
export default MoveToJobOffer;
