import { FormikProvider, FormikValues, FormikContextType } from "formik";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ExtendedButton from "./extended-button";

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
  onClose,
  children,
  submitText = "Submit",
  cancelText = "Cancel",
  isSubmitting = false,
  className = "",
  showCancelBtn = true,
  btnDisabled = false,
}: ExtendedFormProps<T>) {
  return (
    <FormikProvider value={formik}>
      <form
        onSubmit={formik.handleSubmit}
        className={cn(
          "space-y-6 bg-background-200 rounded-[0.5rem] shadow-[0px_1px_22px_0px_rgba(0,0,0,0.04)]",
          className
        )}
      >
        {children}

        <div className="flex justify-end gap-5 mt-10 w-full">
          {showCancelBtn && (
            <Button
              type="button"
              className="p-[1.25rem] rounded-lg typography-paragraph-small font-medium cursor-pointer w-[110px]"
              variant="outline"
              onClick={() => {
                formik.setErrors({});
                onClose?.();
              }}
            >
              {cancelText}
            </Button>
          )}

          <ExtendedButton
            disabled={btnDisabled}
            type="submit"
            className="min-w-[110px] w-fit  p-[1.25rem]"
            text={submitText}
            isLoading={isSubmitting}
          />
        </div>
      </form>
    </FormikProvider>
  );
}
