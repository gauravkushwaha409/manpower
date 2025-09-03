import { FormikProps, FormikProvider } from 'formik'
import React from 'react'
import InputText from '@/components/form/InputText'
import { InputSearchSelect } from '@/components/form/InputSelect'
import { IJobOffer } from '../interface/IJobOffer'
import InputDate from '@/components/form/InputDate'

interface IProps {
   formik: FormikProps<IJobOffer>
   isUpdate?: boolean
}

const JobOfferForm: React.FC<IProps> = ({ formik, isUpdate }) => {
   return (
      <FormikProvider value={formik}>
         <form onSubmit={formik.handleSubmit} className="space-y-4 gird grid-cols-2">
            <div className='grid grid-cols-2 gap-5'>
               <InputSearchSelect label='Candidate Name' name='candidate_name' options={[{ label: "Gaurav", value: "gaurav" }]} />
               <InputSearchSelect label='Job Vacancy' name='job_vacancy' options={[{ label: "React Developer", value: "react" }]} />
               <InputText label='Salary Offered' name='salary_offered' />
               <InputDate label='Offer Date' name='offer_date' />
               <InputDate label='Start Date' name='start_date' />
               <InputSearchSelect label='Status' name='status' options={[{ label: "Peending", value: "peending" }]} />
            </div>
            {/* Button */}
            <div className='mt-8 flex items-center justify-end'>
               <button
                  type='submit'
                  className='typography-button-text px-5 py-3 bg-Blue-400 rounded-lg'
               >
                  {isUpdate ? 'Update Job Offer' : 'Add Job Offer'}
               </button>
            </div>
         </form>
      </FormikProvider >
   )
}

export default JobOfferForm