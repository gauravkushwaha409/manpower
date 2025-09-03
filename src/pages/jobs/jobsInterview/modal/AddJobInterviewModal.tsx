import { FormikProps } from 'formik';
import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { IJobInterview } from '../interface/IJobInterview';
import JobInterviewForm from '../partial/JobInterviewForm';


interface IProps {
   isOpen: boolean;
   handleCloseModal: () => void
   formik: FormikProps<IJobInterview>
}

const AddJobInterviewModal: React.FC<IProps> = ({ formik, handleCloseModal, isOpen }) => {
   return (
      <Dialog open={isOpen} onOpenChange={handleCloseModal}>
         <DialogContent className="max-h-[80vh] overflow-y-auto scroll-none sm:max-w-[80vw] lg:max-w-[70vw] [&>button:hover]:cursor-pointer">
            <DialogHeader>
               <DialogTitle>Add Job Interview</DialogTitle>
               <DialogDescription>
                  Fill the form to add a new Job Interview.
               </DialogDescription>
            </DialogHeader>
            <JobInterviewForm formik={formik} />
         </DialogContent>
      </Dialog>
   )
}

export default AddJobInterviewModal