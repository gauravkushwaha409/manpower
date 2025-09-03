import { FormikProps } from 'formik';
import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import JobApplicantForm from '../partials/JobApplicantForm';
import { IJobApplicant } from '../interface/IJobApplicant';

interface IProps {
   isOpen: boolean;
   handleCloseModal: () => void
   formik: FormikProps<IJobApplicant>
}

const UpdateJobApplicantModal: React.FC<IProps> = ({ formik, handleCloseModal, isOpen }) => {
   return (
      <Dialog open={isOpen} onOpenChange={handleCloseModal}>
         <DialogContent className="max-h-[80vh] overflow-y-auto scroll-none sm:max-w-[80vw] lg:max-w-[70vw] [&>button:hover]:cursor-pointer">
            <DialogHeader>
               <DialogTitle>Update Job Applicant</DialogTitle>
               <DialogDescription>
                  Fill the form to update Job Applicant.
               </DialogDescription>
            </DialogHeader>
            <JobApplicantForm formik={formik} isUpdate />
         </DialogContent>
      </Dialog>
   )
}

export default UpdateJobApplicantModal