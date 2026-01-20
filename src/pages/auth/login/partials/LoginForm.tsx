import React from "react";
import InputText from "@/components/form/FormInputText";

const LoginForm: React.FC = () => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col justify-center items-center mb-6">
        <h1 className="mb-4 font-bold text-xl">Login</h1>
        <p className="text-gray-600 text-xs">
          Please enter your credentials to continue.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        {/* Email */}
        <div className="mx-auto mb-4 w-full max-w-md">
          <InputText
            placeholder="Enter your email"
            label="Email"
            name="email"
          />
        </div>
        {/* Password */}
        <div className="mx-auto mb-4 w-full max-w-md">
          <InputText
            label="Password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
