import { useField, useFormikContext } from "formik";
import { ComponentProps, useEffect, useRef, useState } from "react";
import uploadIcon from "../../assets/icons/upload.svg";
import { MdClose } from "react-icons/md";

interface IInputFile extends ComponentProps<"input"> {
   name: string;
   label: string;
   labelClassName?: string;
   dropAreaClassName?: string;
}

export const InputFile: React.FC<IInputFile> = ({
   name,
   label,
   className,
   required,
}) => {
   const [field, meta] = useField(name);
   const { setFieldValue } = useFormikContext();
   const fileInputRef = useRef<HTMLInputElement>(null);
   const [previewUrl, setPreviewUrl] = useState<string | null>(null);
   const [uploadedFile, setUploadedFile] = useState<File | null>(null);

   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
         setFieldValue(name, file);
         setUploadedFile(file);
         setPreviewUrl(URL.createObjectURL(file));
      }
   };

   const handleDeleteFile = () => {
      setFieldValue(name, null);
      setUploadedFile(null);
      setPreviewUrl(null);
      if (fileInputRef.current) {
         fileInputRef.current.value = "";
      }
   };
   useEffect(() => {
      if (field?.value) {
         if (field.value instanceof File) {
            setPreviewUrl(URL.createObjectURL(field.value));
            setUploadedFile(field.value);
         } else if (typeof field.value === "string") {
            setPreviewUrl(field.value);
         }
      }
   }, [field.value]);

   return (
      <div className={`flex flex-col gap-2 `}>
         <label htmlFor={name}>
            {label}
            {required && <span className="text-red-600">*</span>}
         </label>

         <label
            htmlFor={name}
            className={`w-full h-auto border border-dashed rounded-lg border-Black-100 px-2.5 py-5 bg-Black-100/20 ${className}`}
         >
            <div className="flex flex-col items-center gap-1 cursor-pointer">
               <img src={uploadIcon} alt="Upload" />
               <p className="typography-caption-c1 text-Black-200">
                  Drag and Drop or{" "}
                  <span className="text-primary underline">Choose file</span> to
                  upload
               </p>
               <p className="typography-caption-c3 text-Black-200">
                  SVG, PNG, JPG or GIF (max.10MB)
               </p>
            </div>
         </label>

         <input
            accept="image/*"
            id={name}
            type="file"
            className="hidden"
            onChange={handleFileChange}
            ref={fileInputRef}
         />

         {(uploadedFile || previewUrl) && (
            <div className="flex items-center justify-between mt-4">
               <div className="flex flex-col items-start gap-1">
                  {previewUrl && (
                     <img src={previewUrl} alt="Preview" className={`w-12`} />
                  )}
                  <p className="typography-caption-c2 text-Black-200">
                     {uploadedFile?.name}
                  </p>
               </div>
               <div onClick={handleDeleteFile} className="px-4 py-2 cursor-pointer">
                  <MdClose />
               </div>
            </div>
         )}

         {meta.touched && meta.error && (
            <p className={`text-red-500 italic`}>{meta.error}</p>
         )}
      </div>
   );
};
