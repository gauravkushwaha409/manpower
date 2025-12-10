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
  const [field, meta, helpers] = useField(name);

  const getBorderClass = () => {
    if (meta.touched && meta.error) {
      return "border-error";
    }
    if (meta.touched && !meta.error) {
      return "#d1d5dc";
    }
    return "#e5e7eb";
  };

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
            border: `1px solid ${getBorderClass()}`,
            borderColor: "#e5e7eb",
            borderRadius: "10px",
            fontFamily: "Inter",
            outline: "none",
            boxShadow: state.isFocused ? "0 0 0 1px #6a7282" : "none",
            "&:hover": {
              borderColor: getBorderClass(),
            },
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
