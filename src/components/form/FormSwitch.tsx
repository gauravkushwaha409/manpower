import { Switch } from "../ui/switch";
import { useField } from "formik";

interface InputSwitchFieldProps {
  name: string;
  title: string;
  isRequired?: boolean;
  activeText?: string;
  inActiveText?: string;
}

const FormSwitch = ({
  name,
  title,
  isRequired,
  activeText = "Active",
  inActiveText = "Inactive",
}: InputSwitchFieldProps) => {
  const [field, meta, helpers] = useField<boolean>(name);

  const value = Boolean(field.value);

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="typography-input-label">
        {title} {isRequired && <span className="text-error">*</span>}
      </label>

      <div className="flex items-center space-x-4 mt-3">
        <Switch
          id={name}
          checked={value}
          onBlur={() => helpers.setTouched(true)}
          onCheckedChange={(checked: boolean) => helpers.setValue(checked)}
        />

        <label htmlFor={name} className="typography-input-value -ml-2">
          {value ? activeText : inActiveText}
        </label>
      </div>

      {meta.touched && meta.error && (
        <p className="text-red-500 typography-paragraph-small">{meta.error}</p>
      )}
    </div>
  );
};

export default FormSwitch;
