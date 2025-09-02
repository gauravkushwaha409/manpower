import React from "react";
import { ErrorMessage, useField } from "formik";

interface ICheckbox extends React.InputHTMLAttributes<HTMLInputElement> {
   name: string;
   label: string;
   className?: string;
   labelClassName?: string;
   containerClassName?: string;
}

const InputCheckbox: React.FC<ICheckbox> = ({
   name,
   label,
   labelClassName = "",
   className = "",
   containerClassName = "",
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
         <div className="flex items-center gap-3">
            <input
               id={name}
               type="checkbox"
               className={`w-5 h-5 rounded border-2 bg-form-color focus:ring-0 ${getBorderClass()} ${className}`}
               {...field}
               {...props}
            />
            <label
               className={`typography-p2-regular text-Black-500 ${labelClassName}`}
               htmlFor={name}
            >
               {label}
            </label>
         </div>
         <ErrorMessage
            name={name}
            component="div"
            className="text-red-500 text-sm"
         />
      </div>
   );
};

export default InputCheckbox;