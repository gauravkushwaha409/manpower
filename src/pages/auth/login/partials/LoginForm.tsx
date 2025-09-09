import React from "react";
import InputText from "@/components/form/InputText";

const LoginForm: React.FC = () => {
  return (
    <div className="h-full w-full p-6">
      <div className="flex flex-col items-center justify-center mb-6">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <p className="text-gray-600">
          Please enter your credentials to continue.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        {/* Email */}
        <div className="w-full max-w-md mx-auto mb-4">
          <InputText
            placeholder="Enter your email"
            label="Email"
            name="email"
          />
        </div>
        {/* Password */}
        <div className="w-full max-w-md mx-auto mb-4">
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
