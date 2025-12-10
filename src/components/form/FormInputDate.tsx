import React from "react";
import { ErrorMessage, useField } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface InputDateProps {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
}

const FormInputDate: React.FC<InputDateProps> = ({
  label,
  name,
  placeholder,
  required,
}) => {
  const [field, meta, helpers] = useField(name);

  const handleChange = (date: Date | null) => {
    if (date) {
      // Format the date to yyyy-MM-dd
      const formattedDate = date.toISOString().split("T")[0]; // Get only the date part
      helpers.setValue(formattedDate);
    } else {
      helpers.setValue(null); // If date is cleared, set it to null
    }
  };

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
    <div className="w-full">
      <label className="block mb-1 typography-label-text">
        {label}
        {required && <span className="text-red-600">*</span>}
      </label>
      <DatePicker
        selected={field.value ? new Date(field.value) : null}
        onChange={handleChange}
        onBlur={field.onBlur}
        placeholderText={placeholder}
        dateFormat="yyyy-MM-dd"
        className={`w-full p-1.5 border rounded-[10px] typography-label-text typography-placeholder ${getBorderClass()}`}
        wrapperClassName={`w-full`}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm"
      />
    </div>
  );
};

export default FormInputDate;
