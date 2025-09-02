import { FormikProps, FormikProvider } from 'formik'
import React from 'react'
import { IJobVacancyTableData } from '../interface/IAddJobVacancies'
import CompanyDetails from './CompanyDetails'
import JobDetails from './JobDetails'
import Recruitement from './RecruitmentProcess'
import Documentation from './Documentation'

interface IProps {
   formik: FormikProps<IJobVacancyTableData>
   step: number
   setStep: React.Dispatch<React.SetStateAction<number>>
   isUpdate?: boolean

}

const JobVacancyForm: React.FC<IProps> = ({ formik, step, isUpdate }) => {
   return (
      <FormikProvider value={formik}>
         <form onSubmit={formik.handleSubmit}>
            {step === 0 && <CompanyDetails />}
            {step === 1 && <JobDetails />}
            {step === 2 && <Recruitement />}
            {step === 3 && <Documentation />}

            {/* Button */}
            <div className='mt-8 flex items-center justify-end'>
               <button
                  type='submit'
                  className='typography-button-text px-5 py-3 bg-Blue-400 rounded-lg'
               >
                  {isUpdate ? 'Update Candidate' : 'Add Candidate'}
               </button>
            </div>
         </form>
      </FormikProvider>
   )
}

export default JobVacancyForm