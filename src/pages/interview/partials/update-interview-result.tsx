import { interviewResultOption } from "./interview-form";
import FormInputSelect from "@/components/form/form-input-select";
import useInterviewResult from "../hooks/use-update-interview-result";
import ExtendedForm from "@/components/extended-components/ExtendedForm";

const UpdateInterviewResult = () => {
  const { formik } = useInterviewResult();
  return (
    <ExtendedForm formik={formik}>
      <FormInputSelect
        label="Result"
        name="result"
        options={interviewResultOption}
      />
    </ExtendedForm>
  );
};

export default UpdateInterviewResult;
