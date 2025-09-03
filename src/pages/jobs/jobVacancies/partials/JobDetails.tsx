import React from 'react';
import plusGreenIcon from '../../../../assets/icons/plus_green.svg';
import { useFormikContext } from 'formik';
import { IJobVacancyTableData } from '../interface/IAddJobVacancies';
import InputText from '@/components/form/InputText';
import { InputSearchSelect } from '@/components/form/InputSelect';
import InputTextArea from '@/components/form/InputTextArea';

const JobDetails: React.FC = () => {

   const formik = useFormikContext<Omit<IJobVacancyTableData, "id">>();


   const addMoreVacancies = () => {
      const newField = {
         jobTitle: '',
         job_category: '',
         maleWorkers: '',
         femaleWorkers: '',
         workCountry: '',
         workCity: '',
         jobDescription: '',
         contractDuration: '',
         probationPeriod: '',
         overtime: '',
         dailyWorkingHours: '',
         weeklyWorkingHours: '',
         basicSalary: '',
         overtimeAllowance: '',
         foodAccommodation: '',
         medicalInsurance: '',
         annualLeave: '',
         otherBenefits: '',
      }

      formik.setFieldValue('job_vaccancies', [...formik.values.job_vaccancies, newField]);
   };

   const removeVacancies = (index: number) => {
      const job_vaccancies = [...formik.values.job_vaccancies];
      job_vaccancies.splice(index, 1);
      formik.setFieldValue('job_vaccancies', job_vaccancies);
   };

   return (
      <div>
         {formik.values.job_vaccancies.map((_, index) => (
            <div key={index} className='mt-4'>
               <div className='flex flex-col gap-5'>
                  <div className='grid grid-cols-2 gap-5'>
                     {/* Job Title */}
                     <InputText label='Job Title' name='job_title' placeholder='Enter Job Title' />
                     <InputSearchSelect label='Job Category' name='job_category' placeholder='Enter Job Category' options={[{ label: "Nepal", value: "nepal" }, { label: "India", value: "india" }]} />
                     <InputText label='Male Worker' name='male_workers' placeholder='Enter the number of male worker' />
                     <InputText label='Female Worker' name='female_workers' placeholder='Enter the number of female worker' />
                     <InputSearchSelect label='Country' name='work_country' placeholder='Chose Your Country' options={[{ label: "Nepal", value: "nepal" }, { label: "India", value: "india" }]} />
                     <InputText label='Work City' name='work_city' placeholder='Enter Your Work City' />
                     <InputTextArea label='Job Description' name='job_description' placeholder='Write Your Job Description' />
                     <InputText label='Enter Contact Duration' name='contract_duration' placeholder='Enter Your Contact Duration' />
                     <InputText label='Probation Period' name='probation_period' placeholder='Enter Your Probation Period' />
                     <InputText label='Overtime' name='overtime' placeholder='Enter Overtime hours' />
                     <InputText label='Daily Working Hours' name='daily_working_hours' placeholder='Enter Daily Working Hours' />
                     <InputText label='Weekly Working Hours' name='weekly_working_hours' placeholder='Enter Weekly Working Hours' />
                     <InputText label='Basic Salary' name='basic_salary' placeholder='Enter Basic Salary' />
                     <InputText label='Overtime Allowance' name='overtime_allowance' placeholder='Enter Overtime Allowance' />
                     <InputText label='Food & Accomodation' name='food_accommodation' placeholder='Enter Food and Accomodation' />
                     <InputText label='Medical Insurance' name='medical_insurance' placeholder='Enter Medical Issurance' />
                     <InputText label='Annual Leave' name='annual_leave' placeholder='Enter Anual Leave' />
                     <InputText label='Other Benefits' name='other_benefits' placeholder='Other Benefits' />
                  </div>
               </div>

               {/* Add/Remove Buttons */}
               <div className='mt-3 flex items-center gap-5'>
                  <div>
                     <button
                        type="button"
                        onClick={addMoreVacancies}
                        className='typography-caption-c1 text-primary py-3 px-2.5 flex items-center gap-2 border border-primary rounded-lg cursor-pointer'
                     >
                        <span className='typography-caption-c1 text-primary'>Add More Vacancies</span>
                        <img src={plusGreenIcon} alt="Add" />
                     </button>
                  </div>
                  {index > 0 && (
                     <div>
                        <button
                           type="button"
                           onClick={() => removeVacancies(index)}
                           className="typography-caption-c1 text-error py-3 px-2.5 flex items-center gap-2 border border-error rounded-lg cursor-pointer"
                           aria-label="Remove vacancy"
                        >
                           Remove Vacancy
                        </button>
                     </div>
                  )}
               </div>
            </div>
         ))}
      </div>
   );
};

export default JobDetails;