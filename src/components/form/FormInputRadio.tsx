import React from "react";
import { ErrorMessage, useField } from "formik";

interface IRadioOption {
  label: string;
  value: string | number;
}

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  options: IRadioOption[];
  className?: string;
  labelClassName?: string;
  optionLabelClassName?: string;
  containerClassName?: string;
}

const FormInputRadio: React.FC<IProps> = ({
  name,
  label,
  options,
  labelClassName,
  className,
  optionLabelClassName,
  containerClassName,
  ...props
}) => {
  const [field, meta] = useField(name);

  const getBorderClass = () => {
    if (meta.touched && meta.error) {
      return "border-error";
    }
    if (meta.touched && !meta.error) {
      return "border-Black-100";
    }
    return "border-Black-200";
  };

  return (
    <div className={`flex flex-col gap-2 ${containerClassName}`}>
      {label && (
        <label
          className={`typography-p2-regular text-Black-500 ${labelClassName}`}
        >
          {label}
        </label>
      )}

      <div className="flex flex-col gap-3">
        {options.map((option) => (
          <div key={option.value} className="flex items-center gap-3">
            <input
              id={`${name}-${option.value}`}
              type="radio"
              className={`w-5 h-5 rounded-full border-2 bg-form-color focus:ring-0 ${getBorderClass()} ${className}`}
              {...field}
              value={option.value}
              checked={field.value === option.value}
              {...props}
            />
            <label
              htmlFor={`${name}-${option.value}`}
              className={`typography-p2-regular text-Black-500 ${optionLabelClassName}`}
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>

      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm"
      />
    </div>
  );
};

export default FormInputRadio;
