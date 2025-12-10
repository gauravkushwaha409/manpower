import React from "react";
import InputText from "@/components/form/FormInputText";

const ResetPasswordForm: React.FC = () => {
  return (
    <div className="h-full w-full p-6">
      <div className="flex flex-col items-center justify-center mb-6">
        <h1 className="text-2xl font-bold mb-4">Set New Password</h1>
        <p className="text-gray-600">
          Enter at least 8 characters long password to continue.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        {/* Email */}
        <div className="w-full max-w-md mx-auto mb-4">
          <InputText
            placeholder="Enter new password"
            label="New Password"
            name="newPassword"
          />
        </div>
        {/* Password */}
        <div className="w-full max-w-md mx-auto mb-4">
          <InputText
            label="Confirm Password"
            name="confirmPassword"
            placeholder="Enter your password"
          />
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
