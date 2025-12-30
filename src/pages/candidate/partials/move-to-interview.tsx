import ModalWrapper from "@/components/shadcn/modal-wrapper";
import useMoveToInterview, {
  useMoveToInterviewModal,
} from "../hooks/use-move-to-interview";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import FormInputDate from "@/components/form/form-input-date";
import FormInputSelect from "@/components/form/form-input-select";
import { interviewModeOption } from "@/pages/interview/partials/interview-form";
import FormInputText from "@/components/form/FormInputText";

const MoveToInterview = () => {
  const { isMoveToInterviewOpen, handleCloseMoveToInterview } =
    useMoveToInterviewModal();
  const { formik } = useMoveToInterview();
  return (
    <ModalWrapper
      isOpen={isMoveToInterviewOpen}
      name="Move candidate to interview"
      description="This will move the selected candidate to interview"
      className="xl:max-w-5xl"
      onOpenChange={handleCloseMoveToInterview}
    >
      <ExtendedForm formik={formik}>
        <div className="grid grid-cols-1 gap-4">
          <FormInputDate name="interview_modal" label="Interview Date" />
          <FormInputSelect
            label="Interview Mode"
            name="interview_mode"
            options={interviewModeOption}
          />
          <FormInputText label="Interview Location" name="interview_location" />
          <FormInputText label="Interviewer Name" name="interviewer_name" />
        </div>
      </ExtendedForm>
    </ModalWrapper>
  );
};

export default MoveToInterview;
