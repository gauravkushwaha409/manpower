import InputText from '@/components/form/InputText.tsx';
import { InputSearchSelect } from '@/components/form/InputSelect.tsx';
import InputDate from '@/components/form/InputDate';

const EmbassyInterviewForm = () => {
  return (
    <>
      <div className="flex flex-col gap-5 p-2">
        <InputText
          label="Candidate Name"
          name="candidate_name"
          placeholder="Enter Canidate Name"
        />
        <div className="gap-5 grid grid-cols-2">
          <InputText
            label="Embassy Name"
            name="embassy_name"
            placeholder="Enter Embassy Name"
          />
          <InputDate
            label="Interview Date"
            name="interview_date"
            placeholder="Enter Interview Date"
          />
          <InputText
            label="Visa Number"
            name="visa_number"
            placeholder="Enter Visa Number"
          />
          <InputSearchSelect
            label="Status"
            name="status"
            options={[{ label: 'Schedule', value: 'schedule' }]}
          />
        </div>
      </div>
    </>
  );
};

export default EmbassyInterviewForm;
