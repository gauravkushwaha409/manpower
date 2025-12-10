import { useField } from "formik";
import Select from "react-select";
import { ComponentProps } from "react";
import { ErrorMessage } from "formik";

interface IReactSelect extends ComponentProps<"input"> {
  name: string;
  label: string;
  options: { value: string | boolean; label: string }[];
  className?: string;
  labelClassName?: string;
}

export const InputSearchSelect: React.FC<IReactSelect> = ({
  name,
  label,
  options,
  className,
  labelClassName,
  disabled,
  placeholder,
}) => {
  const [field, , helpers] = useField(name);

  // Find the currently selected value
  const selectedOption =
    options?.find((opt) => opt.value === field.value) || null;

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label
        className={`typography-label-text text-gray-800 ${labelClassName}`}
        htmlFor={name}
      >
        {label}
      </label>

      <Select
        id={name}
        instanceId={name}
        options={options}
        value={selectedOption}
        onChange={(option) => helpers.setValue((option as any)?.value)}
        onBlur={() => helpers.setTouched(true)}
        placeholder={placeholder}
        isSearchable
        isDisabled={disabled}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? "#d1d5dc" : "e5e7eb",
            outline: "",
            borderRadius: "10px",
            fontFamily: "Inter",
          }),
        }}
      />

      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm border-gray-200"
      />
    </div>
  );
};
