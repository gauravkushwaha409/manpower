import { FormikProps } from 'formik';
import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import LanguageForm from '../partials/LanguageForm';
import {ILanguage} from "@/pages/language/interface/ILanguage.ts";

interface IProps {
    isOpen: boolean;
    handleCloseModal: () => void
    formik: FormikProps<ILanguage>
}

const AddLanguageModal: React.FC<IProps> = ({ formik, handleCloseModal, isOpen }) => {
    return (
        <Dialog open={isOpen} onOpenChange={handleCloseModal}>
            <DialogContent className="max-h-[80vh] overflow-y-auto scroll-none sm:max-w-[80vw] lg:max-w-[50vw] [&>button:hover]:cursor-pointer">
                <DialogHeader>
                    <DialogTitle>Add Language</DialogTitle>
                    <DialogDescription>
                        Fill the form to add a new Language.
                    </DialogDescription>
                </DialogHeader>
                <LanguageForm formik={formik} />
            </DialogContent>
        </Dialog>
    )
}

export default AddLanguageModal