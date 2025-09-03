import React from 'react';
import useCreateNewPasswordForm from '../hooks/useCreateNewPasswordForm';
import ExtendedForm from '@/components/input/extended-form';
import NewPassForm from '../partials/PassForm';

const NewPassModal: React.FC = () => {
  const { formik } = useCreateNewPasswordForm();

  return (
    <div className="bg-[#ffffff] mb-1 px-10 pt-1 lg:pb-10 rounded-lg w-full h-full">
      <div className="mt-10 lg:mt-20 ml">
        <p className="text-center typography-h3">Set New Password</p>
        <p className="mt-2 text-Black-200 text-center typography-p2-regular">
          Enter at least 8 Character to continue
        </p>
      </div>
      {/* Reset form */}
      <div className="pt-10 w-full h-fit">
        <ExtendedForm formik={formik}>
          <NewPassForm />
        </ExtendedForm>
      </div>
    </div>
  );
};

export default NewPassModal;
