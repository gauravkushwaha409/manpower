import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { FormikValues, useFormikContext } from "formik";

interface InputSwitchFieldProps<T extends FormikValues> {
  name: keyof T;
  title: string;
  isRequired?: boolean;
}

const InputSwitchField = <T extends FormikValues>({
  name,
  title,
  isRequired = true,
}: InputSwitchFieldProps<T>) => {
  const formik = useFormikContext<T>();
  const touched = formik.touched?.[name];
  const error = formik.errors?.[name];
  const value = Boolean(formik.values[name]);

  return (
    <div className="space-y-2">
      <Label
        htmlFor={String(name)}
        className="typography-paragraph-small font-medium text-text-500"
      >
        {title} {isRequired && <span className="text-error">*</span>}
      </Label>

      <div className="flex items-center space-x-4 mt-3">
        <Switch
          id={String(name)}
          name={String(name)}
          checked={value}
          onBlur={formik.handleBlur}
          onCheckedChange={(checked: boolean) =>
            formik.setFieldValue(name as string, checked)
          }
        />

        <Label
          htmlFor={String(name)}
          className="typography-paragraph-small font-medium text-text-500 -ml-2"
        >
          {value ? "Active" : "Inactive"}
        </Label>
      </div>

      {touched && error && (
        <p className="text-red-500 typography-paragraph-small">
          {error as string}
        </p>
      )}
    </div>
  );
};

export default InputSwitchField;