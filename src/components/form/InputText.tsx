import React from "react";
import { ErrorMessage, useField } from "formik";

interface IInputText extends React.InputHTMLAttributes<HTMLInputElement> {
   name: string;
   label: string;
   className?: string;
   labelClassName?: string;
}

const InputText: React.FC<IInputText> = ({
   name,
   label,
   labelClassName,
   className,
   ...props


}) => {
   const [field, meta] = useField(name);


   const getBorderClass = () => {
      if (meta.touched && meta.error) {
         return 'border-error';
      }
      if (meta.touched && !meta.error) {
         return 'border-Black-100';
      }
      return 'border-Black-200';
   };

   return (
      <div className={`flex flex-col gap-2`}>
         <label className={`typography-p2-regular text-Black-500 ${labelClassName}`} htmlFor={name}>
            {label}
         </label>
         <input
            id={name}
            type="text"
            className={`w-full p-3 bg-form-color typography-p2-medium text-Black-500 rounded-lg border ${className} ${getBorderClass()}`}
            {...field}
            {...props}
         />
         <ErrorMessage name={name} component="div" className="text-red-500 text-sm" />
      </div >
   );
};

export default InputText