import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { FormikProps } from 'formik';
import React from 'react'
import { IJobVacancyTableData } from '../interface/IAddJobVacancies';
import JobVacancyForm from '../partials/JobVacancyForm';

interface IProps {
   isOpen: boolean;
   handleCloseModal: () => void
   formik: FormikProps<IJobVacancyTableData>
   step: number
   setStep: React.Dispatch<React.SetStateAction<number>>
}

const AddJobVacancyModal: React.FC<IProps> = ({ formik, handleCloseModal, isOpen, step, setStep }) => {
   return (
      <Dialog open={isOpen} onOpenChange={handleCloseModal}>
         <DialogContent className="max-h-[80vh] overflow-y-auto scroll-none sm:max-w-[425px] lg:max-w-[70vw] [&>button:hover]:cursor-pointer">
            <DialogHeader>
               <DialogTitle>Add Job Vacancy</DialogTitle>
               <DialogDescription>
                  Fill the form to add a Job Vacancy.
               </DialogDescription>
            </DialogHeader>
            <JobVacancyForm formik={formik} step={step} setStep={setStep} />
         </DialogContent>
      </Dialog>
   )
}

export default AddJobVacancyModal