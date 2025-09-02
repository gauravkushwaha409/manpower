import { FormikProps } from 'formik';
import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import JobCategoryForm from "@/pages/jobs/jobCategory/partials/JobCategoryForm.tsx";
import {IJobCategory} from "@/pages/jobs/jobCategory/interface/IJobCategory.ts";

interface IProps {
   isOpen: boolean;
   handleCloseModal: () => void
   formik: FormikProps<IJobCategory>
}

const UpdateJobCategoryModal: React.FC<IProps> = ({ formik, handleCloseModal, isOpen }) => {
   return (
      <Dialog open={isOpen} onOpenChange={handleCloseModal}>
         <DialogContent className="max-h-[80vh] overflow-y-auto scroll-none sm:max-w-[425px] lg:max-w-[70vw] [&>button:hover]:cursor-pointer">
            <DialogHeader>
               <DialogTitle>Update Job Categories</DialogTitle>
               <DialogDescription>
                  Fill the form to update Job Categories.
               </DialogDescription>
            </DialogHeader>
            <JobCategoryForm formik={formik} isUpdate />
         </DialogContent>
      </Dialog>
   )
}

export default UpdateJobCategoryModal