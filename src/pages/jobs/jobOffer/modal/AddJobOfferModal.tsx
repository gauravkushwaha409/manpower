import { FormikProps } from 'formik';
import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { IJobOffer } from '../interface/IJobOffer';
import JobOfferForm from '../partials/JobOfferForm';


interface IProps {
   isOpen: boolean;
   handleCloseModal: () => void
   formik: FormikProps<IJobOffer>
}

const AddJobOfferModal: React.FC<IProps> = ({ formik, handleCloseModal, isOpen }) => {
   return (
      <Dialog open={isOpen} onOpenChange={handleCloseModal}>
         <DialogContent className="max-h-[80vh] overflow-y-auto scroll-none sm:max-w-[80vw] lg:max-w-[70vw] [&>button:hover]:cursor-pointer">
            <DialogHeader>
               <DialogTitle>Add Job Offer</DialogTitle>
               <DialogDescription>
                  Fill the form to add a new Job Offer.
               </DialogDescription>
            </DialogHeader>
            <JobOfferForm formik={formik} />
         </DialogContent>
      </Dialog>
   )
}

export default AddJobOfferModal