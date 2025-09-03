import React from "react";
import passwordIcon from "../../../assets/icons/login_password.svg";
// import useCreateNewPasswordForm from "../hooks/useCreateNewPasswordForm";
// import ExtendedForm from "@/components/input/extended-form";

const NewPassForm: React.FC = () => {
  return (
    <div className="h-full w-full  ">
      <div className="flex flex-col items-center justify-center gap-3 lg:gap-6">
        {/* New Password */}
        <div className="w-3/4 mx-auto relative mb-8 ">
          <input
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`typography-p1-regular text-Black-200 w-full h-14 rounded-lg border pl-12 pr-4 py-4 ${
              formik.touched.password && formik.errors.password
                ? "border-error"
                : formik.touched.password && !formik.errors.password
                ? "border-Black-100"
                : "border-Black-200"
            }`}
            placeholder="Enter new password"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <img
              src={passwordIcon}
              alt=""
              className="w-4 h-4" // Standard icon size
            />
          </div>
          {formik.touched.password && formik.errors.password && (
            <p className="typography-p2-regular text-red-500 absolute -bottom-6 left-0">
              {formik.errors.password}
            </p>
          )}
        </div>
        {/* Re-type New Password */}
        <div className="w-3/4 mx-auto relative mb-8">
          <input
            type="password"
            id="rePassword"
            name="rePassword"
            value={formik.values.rePassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`typography-p1-regular text-Black-200 w-full h-14 rounded-lg border pl-12 pr-4 py-4 ${
              formik.touched.rePassword && formik.errors.rePassword
                ? "border-error"
                : formik.touched.rePassword && !formik.errors.rePassword
                ? "border-Black-100"
                : "border-Black-200"
            }`}
            placeholder="Re-enter new password"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <img
              src={passwordIcon}
              alt=""
              className="w-4 h-4"
              aria-hidden="true"
            />
          </div>
          {formik.touched.rePassword && formik.errors.rePassword && (
            <p className="typography-p2-regular text-red-500 absolute -bottom-6 left-0">
              {formik.errors.rePassword}
            </p>
          )}
        </div>

        {/* Sign In button */}
        <div className="w-3/4 mx-auto mt-5">
          <button
            type="submit"
            className="paragraph-p2-medium w-full h-11 mx-auto text-white bg-primary rounded-lg"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPassForm;
