import ExtendedForm from "@/components/extended-components/ExtendedForm";
import ModalWrapper from "@/components/shadcn/modal-wrapper";
import useVisaToOrientationModal from "../hooks/use-visa-to-orientation-modal";
import useVisaToOrientation from "../hooks/use-visa-to-orientation";

const VisaToOrientation = () => {
  const { isVisaToOrientation, handleCloseVisaToOrientation } =
    useVisaToOrientationModal();
  const { formik, isLoading } = useVisaToOrientation();
  return (
    <ModalWrapper
      className="xl:max-w-2xl"
      name="Move visa candidate to orientation"
      description="This will move the selected visa candidate to orientation"
      isOpen={isVisaToOrientation}
      onOpenChange={handleCloseVisaToOrientation}
    >
      <ExtendedForm formik={formik} isSubmitting={isLoading}>
        <div className="xl:max-w-2xl">{/*  */}</div>
      </ExtendedForm>
    </ModalWrapper>
  );
};

export default VisaToOrientation;
