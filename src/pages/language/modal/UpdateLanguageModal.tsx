import { FormikProps } from 'formik';
import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ILanguage } from '../interface/ILanguage';
import LanguageForm from '../partials/LanguageForm';

interface IProps {
    isOpen: boolean;
    handleCloseModal: () => void
    formik: FormikProps<ILanguage>
}

const UpdateLanguageModal: React.FC<IProps> = ({ formik, handleCloseModal, isOpen }) => {
    return (
        <Dialog open={isOpen} onOpenChange={handleCloseModal}>
            <DialogContent className="max-h-[80vh] overflow-y-auto scroll-none sm:max-w-[80vw] lg:max-w-[70vw] [&>button:hover]:cursor-pointer">
                <DialogHeader>
                    <DialogTitle>Update Language</DialogTitle>
                    <DialogDescription>
                        Fill the form to update Language.
                    </DialogDescription>
                </DialogHeader>
                <LanguageForm formik={formik} isUpdate />
            </DialogContent>
        </Dialog>
    )
}

export default UpdateLanguageModal