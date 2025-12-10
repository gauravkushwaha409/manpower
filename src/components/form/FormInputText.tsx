import React from "react";
import { ErrorMessage, useField } from "formik";

interface IInputText extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  className?: string;
  labelClassName?: string;
}

const FormInputText: React.FC<IInputText> = ({
  name,
  label,
  labelClassName,
  className,
  ...props
}) => {
  const [field, meta] = useField(name);

  const getBorderClass = () => {
    if (meta.touched && meta.error) {
      return "border-error";
    }
    if (meta.touched && !meta.error) {
      return "border-gray-300";
    }
    return "border-gray-200";
  };

  return (
    <div className={`flex flex-col gap-2`}>
      <label
        className={`typography-label-text text-gray-800 ${labelClassName}`}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        id={name}
        type="text"
        className={`w-full px-4 py-2 typography-label-text text-gray-900 rounded-[10px] border ${className} ${getBorderClass()}`}
        {...field}
        {...props}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm"
      />
    </div>
  );
};

export default FormInputText;
