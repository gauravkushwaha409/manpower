import ExtendedForm from "@/components/extended-components/ExtendedForm";
import ModalWrapper from "@/components/shadcn/modal-wrapper";
import useVisaToOrientationModal from "../hooks/use-visa-to-orientation-modal";
import useVisaToOrientation from "../hooks/use-visa-to-orientation";
import FormInputText from "@/components/form/FormInputText";
import FormInputDate from "@/components/form/form-input-date";

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
        <div className="xl:max-w-2xl grid grid-cols-1 gap-4">
          <FormInputText label="Institute Name" name="instute_name" />
          <FormInputDate label="Orientation Date" name="orientation_date" />
        </div>
      </ExtendedForm>
    </ModalWrapper>
  );
};

export default VisaToOrientation;
