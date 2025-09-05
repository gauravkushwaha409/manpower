import React from 'react';
import InputText from '@/components/form/InputText';
import { InputSearchSelect } from '@/components/form/InputSelect';
import InputDate from '@/components/form/InputDate';

const JobOfferForm: React.FC = () => {
  return (
    <div className="gap-5 grid grid-cols-2">
      <InputSearchSelect
        label="Candidate Name"
        name="candidate_name"
        options={[{ label: 'Gaurav', value: 'gaurav' }]}
      />
      <InputSearchSelect
        label="Job Vacancy"
        name="job_vacancy"
        options={[{ label: 'React Developer', value: 'react' }]}
      />
      <InputText label="Salary Offered" name="salary_offered" />
      <InputDate label="Offer Date" name="offer_date" />
      <InputDate label="Start Date" name="start_date" />
      <InputSearchSelect
        label="Status"
        name="status"
        options={[{ label: 'Peending', value: 'peending' }]}
      />
    </div>
  );
};

export default JobOfferForm;
