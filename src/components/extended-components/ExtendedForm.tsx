import { FormikProvider, FormikValues, FormikContextType } from "formik";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import HorizontalDivider from "../reusable-component/HorizontalDivider";
import { Loader } from "lucide-react";

interface ExtendedFormProps<T extends FormikValues> {
  formik: FormikContextType<T>;
  onClose?: () => void;
  children: React.ReactNode;
  submitText?: string;
  cancelText?: string;
  isSubmitting?: boolean;
  className?: string;
  showCancelBtn?: boolean;
  btnDisabled?: boolean;
}

export default function ExtendedForm<T extends FormikValues>({
  formik,
  children,
  submitText = "Submit",
  cancelText = "Cancel",
  isSubmitting = false,
  className = "",
  showCancelBtn = true,
  btnDisabled = false,
}: ExtendedFormProps<T>) {
  const navigate = useNavigate();
  return (
    <FormikProvider value={formik}>
      <form
        onSubmit={formik.handleSubmit}
        className={cn(
          "space-y-6 bg-background-200 bg-white shadow-[0px_1px_22px_0px_rgba(0,0,0,0.04)] p-4 rounded-xl",
          className
        )}
      >
        {children}

        <div className="px-4">
          <HorizontalDivider />
        </div>

        <div className="flex justify-end gap-2 mt-10 w-full">
          {showCancelBtn && (
            <FormButton
              text={cancelText}
              variant="cancel"
              onClick={() => {
                formik.setErrors({});
                navigate(-1);
              }}
            />
          )}
          <FormButton
            disabled={btnDisabled}
            text={submitText}
            isLoading={isSubmitting}
            variant="submit"
          />
        </div>
      </form>
    </FormikProvider>
  );
}

type ButtonVariant = "submit" | "cancel" | "previous";

interface ButtonProps {
  text: string;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  variant: ButtonVariant;
}
const FormButton = ({
  text,
  isLoading = false,
  disabled = false,
  onClick,
  variant,
}: ButtonProps) => {
  const baseClasses =
    "px-3 py-1 flex items-center gap-x-2 typo-mid-bd-reg rounded-4xl transition-colors";

  const variantClasses: Record<ButtonVariant, string> = {
    submit: "bg-secondary-500 text-white hover:bg-secondary-700",
    previous:
      "border border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-white",
    cancel: "bg-red-500 text-white hover:bg-red-700",
  };

  const isDisabled = disabled || isLoading;

  return (
    <button
      type={variant === "submit" ? "submit" : "button"}
      disabled={isDisabled}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onClick?.();
      }}
      className={cn(
        baseClasses,
        variantClasses[variant],
        isDisabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
      )}
    >
      {isLoading && <Loader />}
      {text}
    </button>
  );
};
