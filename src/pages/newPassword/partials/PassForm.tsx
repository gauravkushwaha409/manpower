import React from 'react';
import passwordIcon from '../../../assets/icons/login_password.svg';
// import useCreateNewPasswordForm from "../hooks/useCreateNewPasswordForm";
// import ExtendedForm from "@/components/input/extended-form";

const NewPassForm: React.FC = () => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col justify-center items-center gap-3 lg:gap-6">
        {/* New Password */}
        <div className="relative mx-auto mb-8 w-3/4">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter new password"
          />
          <div className="left-0 absolute inset-y-0 flex items-center pl-4 pointer-events-none">
            <img src={passwordIcon} alt="" className="w-4 h-4" />
          </div>
        </div>
        {/* Re-type New Password */}
        <div className="relative mx-auto mb-8 w-3/4">
          <input
            type="password"
            id="rePassword"
            name="rePassword"
            placeholder="Re-enter new password"
          />
          <div className="left-0 absolute inset-y-0 flex items-center pl-4 pointer-events-none">
            <img
              src={passwordIcon}
              alt=""
              className="w-4 h-4"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Sign In button */}
        <div className="mx-auto mt-5 w-3/4">
          <button
            type="submit"
            className="bg-primary mx-auto rounded-lg w-full h-11 text-white paragraph-p2-medium"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPassForm;
