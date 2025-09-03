import React from "react";
import NewPassForm from "../partials/PassForm";
import useCreateNewPasswordForm from "../hooks/useCreateNewPasswordForm";
import ExtendedForm from "@/components/input/extended-form";

const NewPassModal: React.FC = () => {
  const { formik } = useCreateNewPasswordForm();

  return (
    <div className="h-full w-full bg-[#ffffff] pt-1 px-10 mb-1 lg:pb-10 rounded-lg">
      <div className="mt-10 lg:mt-20 ml">
        <p className="text-center typography-h3">Set New Password</p>
        <p className="typography-p2-regular text-Black-200 text-center mt-2">
          Enter at least 8 Character to continue
        </p>
      </div>
      {/* Reset form */}
      <div className="w-full h-fit pt-10">
        <ExtendedForm formik={formik}>
          <NewPassForm />
        </ExtendedForm>
      </div>
    </div>
  );
};

export default NewPassModal;
