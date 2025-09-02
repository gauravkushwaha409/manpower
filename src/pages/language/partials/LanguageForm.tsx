import React from "react";
import {FormikProps, FormikProvider} from "formik";
import InputText from "@/components/form/InputText.tsx";
import {ILanguage} from "@/pages/language/interface/ILanguage.ts";

interface IProps {
    formik: FormikProps<ILanguage>
    isUpdate?: boolean
}

const LanguageForm:React.FC<IProps> = ({formik,isUpdate}) => {
    return (
        <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit} className="space-y-4 gird grid-cols-2">

                <div className='flex flex-col gap-5'>
                    <div className='grid grid-cols-1 gap-5'>
                        <InputText label='Language' name='language' placeholder='Enter Language Name' />
                    </div>
                    <div className='mt-8 flex items-center justify-end'>
                        <button
                            type='submit'
                            className='typography-button-text px-5 py-3 bg-Blue-400 rounded-lg'
                        >
                            {isUpdate ? 'Update Language' : 'Add Language'}
                        </button>
                    </div>
                </div>
            </form>
        </FormikProvider>
    )

}
export default LanguageForm;