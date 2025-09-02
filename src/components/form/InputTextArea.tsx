import { useField } from "formik";
import { ComponentProps } from "react";

interface ITextArea extends ComponentProps<"textarea"> {
   name: string;
   label: string;
   placeholder?: string;
   labelClassName?: string;
   textareaClassName?: string;
   errorClassName?: string;
   rows?: number;
   required?: boolean;
}

const InputTextArea: React.FC<ITextArea> = ({
   name,
   label,
   placeholder,
   className,
   rows = 4,
   required,
   ...props
}) => {
   const [field, meta] = useField(name);

   return (
      <div className={`flex flex-col gap-2`}>
         <label htmlFor={name}>
            {label}
            {required && <span className="text-red-600">*</span>}
         </label>
         <textarea
            id={name}
            className={`w-full p-3 bg-form-color typography-p2-medium text-Black-500 rounded-lg border ${className} `}
            placeholder={placeholder}
            rows={rows}
            {...field}
            {...props}
         />
         {meta.touched && meta.error && (
            <p className={`text-red-500 italic`}>{meta.error}</p>
         )}
      </div>
   );
};
export default InputTextArea;
