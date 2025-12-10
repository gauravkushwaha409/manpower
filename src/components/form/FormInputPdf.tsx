import { useField, useFormikContext } from "formik";
import { ComponentProps, useRef, useState, useEffect } from "react";
import { CircleX, FileText } from "lucide-react";

interface IPdfUpload extends ComponentProps<"input"> {
  name: string;
  label: string;
  labelClassName?: string;
  className?: string;
  required?: boolean;
}

const FormInputPdf: React.FC<IPdfUpload> = ({
  name,
  label,
  className,
  labelClassName,
  required,
}) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  /** Handle file selection */
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadedFile(file);
    setFieldValue(name, file);
  };

  /** Remove the uploaded file */
  const handleDeleteFile = () => {
    setUploadedFile(null);
    setFieldValue(name, null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  /** Sync initial Formik value */
  useEffect(() => {
    if (field.value instanceof File) {
      setUploadedFile(field.value);
    }
  }, [field.value]);

  return (
    <div className="flex flex-col gap-2">
      {/* Label */}
      <label
        className={`typography-label-text ${labelClassName}`}
        htmlFor={name}
      >
        {label}
        {required && <span className="text-red-600">*</span>}
      </label>

      {/* File container */}
      <div
        className={`relative flex items-center justify-between w-full border rounded-[10px] cursor-pointer px-3 py-2 bg-white ${className}`}
        onClick={() => fileInputRef.current?.click()}
      >
        {/* Upload placeholder */}
        {!uploadedFile && (
          <p className="text-gray-600 text-sm">
            Click to upload PDF (max 10MB)
          </p>
        )}

        {/* Uploaded file */}
        {uploadedFile && (
          <div className="flex items-center justify-between w-full">
            {/* PDF icon */}
            <div className="flex items-center gap-2">
              <FileText className="w-6 h-6" />
              {/* <img src={pdfIcon} alt="PDF" /> */}
              <p className="truncate text-gray-800">{uploadedFile.name}</p>
            </div>

            {/* Delete button */}
            <button
              type="button"
              onClick={handleDeleteFile}
              className="ml-2 flex-shrink-0 p-1 rounded-full hover:bg-gray-100"
            >
              <CircleX size={16} className="text-red-500" />
            </button>
          </div>
        )}
      </div>

      {/* Hidden file input */}
      <input
        id={name}
        type="file"
        accept="application/pdf"
        className="hidden"
        onChange={handleFileChange}
        ref={fileInputRef}
      />

      {/* Validation error */}
      {meta.touched && meta.error && (
        <p className="text-red-500 text-sm italic">{meta.error}</p>
      )}
    </div>
  );
};

export default FormInputPdf;
