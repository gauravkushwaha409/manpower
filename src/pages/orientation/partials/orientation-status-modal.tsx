import ModalWrapper from "@/components/shadcn/modal-wrapper";
import useUpdateOrientationStatus from "../hooks/use-update-orientation-status";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import FormInputSelect from "@/components/form/form-input-select";
import { orientationStatusOption } from "./orientation-form";
import useUpdateOrientationStatusModal from "../hooks/use-update-orientation-status-modal";

const OrientationStatusModal = () => {
  const { formik, isLoading } = useUpdateOrientationStatus();
  const { isOrientationStatusModalOpen, handleCloseOrientationStatusModal } =
    useUpdateOrientationStatusModal();
  return (
    <ModalWrapper
      className="xl:max-w-xl pb-12"
      name="Update orientation status"
      description="This action will update the orientation status of candidate"
      isOpen={isOrientationStatusModalOpen}
      onOpenChange={handleCloseOrientationStatusModal}
    >
      <ExtendedForm formik={formik} isSubmitting={isLoading}>
        <FormInputSelect
          label="Orientation Status"
          name="orientation_status"
          options={orientationStatusOption}
        />
      </ExtendedForm>
    </ModalWrapper>
  );
};
export default OrientationStatusModal;
