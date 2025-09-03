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
}) => {
  const [field, meta, helpers] = useField(name);

  // Find the currently selected value
  const selectedOption =
    options?.find((opt) => opt.value === field.value) || null;

  const getBorderClass = () => {
    if (meta.touched && meta.error) {
      return "!border-error";
    }
    if (meta.touched && !meta.error) {
      return "!border-Black-100";
    }
    return "!border-Black-200";
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label
        className={`typography-p2-regular text-Black-500 ${labelClassName}`}
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
        placeholder={`Select ${label}`}
        isSearchable
        isDisabled={disabled}
        classNames={{
          control: () => `
                  !p-1.5 !border !rounded-lg !bg-form-color 
                  typography-p2-medium text-Black-500 
                  ${getBorderClass()}
               `,
          placeholder: () => "typography-p2-medium text-Black-200",
          input: () => "typography-p2-medium text-Black-500",
          option: () => "typography-p2-medium",
          singleValue: () => "typography-p2-medium text-Black-500",
        }}
      />

      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm"
      />
    </div>
  );
};
