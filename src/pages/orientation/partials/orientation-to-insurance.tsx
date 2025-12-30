import ExtendedForm from "@/components/extended-components/ExtendedForm";
import ModalWrapper from "@/components/shadcn/modal-wrapper";
import useVisaToOrientation from "../hooks/use-orientation-to-insurance";
import useOrientationToShramModal from "../hooks/use-orientation-to-insurance-modal";

const OrientationToInsurance = () => {
  const { isOrientationToInsurance, handleCloseOrientationToInsurance } =
    useOrientationToShramModal();
  const { formik, isLoading } = useVisaToOrientation();
  return (
    <ModalWrapper
      className="xl:max-w-2xl"
      name="Move orientation candidate to insurance"
      description="This will move the selected orientation candidate to insurance"
      isOpen={isOrientationToInsurance}
      onOpenChange={handleCloseOrientationToInsurance}
    >
      <ExtendedForm formik={formik} isSubmitting={isLoading}>
        <div className="xl:max-w-2xl">{/*  */}</div>
      </ExtendedForm>
    </ModalWrapper>
  );
};

export default OrientationToInsurance;
