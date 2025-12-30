import ExtendedForm from "@/components/extended-components/ExtendedForm";
import ModalWrapper from "@/components/shadcn/modal-wrapper";
import useInsuranceToShram from "../hooks/use-insurance-to-shram";
import useInsuranceToShramModal from "../hooks/use-insurance-to-shram-modal";

const InsuranceToShram = () => {
  const { isInsuranceToShram, handleCloseInsuranceToShram } =
    useInsuranceToShramModal();

  const { formik, isLoading } = useInsuranceToShram();

  return (
    <ModalWrapper
      className="xl:max-w-2xl"
      name="Move insurance candidate to shram"
      description="This will move the selected insurance candidate to shram"
      isOpen={isInsuranceToShram}
      onOpenChange={handleCloseInsuranceToShram}
    >
      <ExtendedForm formik={formik} isSubmitting={isLoading}>
        <div className="xl:max-w-2xl">{/*  */}</div>
      </ExtendedForm>
    </ModalWrapper>
  );
};

export default InsuranceToShram;
