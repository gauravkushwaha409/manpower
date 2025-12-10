import React from "react";
import InputText from "@/components/form/FormInputText";

const ChangePasswordForm: React.FC = () => {
  return (
    <div className="gap-5 grid grid-cols-2">
      <InputText
        placeholder="Enter current password"
        label="Current Password"
        name="currentPassword"
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
