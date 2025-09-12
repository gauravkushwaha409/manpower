import React from "react";
import InputText from "@/components/form/InputText";

const ChangePasswordForm: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <InputText
        placeholder="Enter old password"
        label="Old Password"
        name="oldPassword"
      />
      <InputText
        placeholder="Enter new password"
        label="New Password"
        name="newPassword"
      />

      <InputText
        label="Confirm Password"
        name="confirmPassword"
        placeholder="Enter your password"
      />
    </div>
  );
};

export default ChangePasswordForm;
