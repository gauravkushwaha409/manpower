import { FormikProvider, FormikValues, FormikContextType } from 'formik';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import ExtendedButton from './ExtendedButton';
import { useNavigate } from 'react-router-dom';
import HorizontalDivider from '../reusable-component/HorizontalDivider';

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
  submitText = 'Save',
  cancelText = 'Cancel',
  isSubmitting = false,
  className = '',
  showCancelBtn = true,
  btnDisabled = false,
}: ExtendedFormProps<T>) {
  const navigate = useNavigate();
  return (
    <FormikProvider value={formik}>
      <form
        onSubmit={formik.handleSubmit}
        className={cn(
          'space-y-6 bg-background-200 bg-white shadow-[0px_1px_22px_0px_rgba(0,0,0,0.04)] p-4 rounded-[0.5rem]',
          className
        )}
      >
        {children}

        <div className="px-4">
          <HorizontalDivider />
        </div>

        <div className="flex justify-end gap-2 mt-10 w-full">
          {showCancelBtn && (
            <Button
              type="button"
              className="mb-2 p-2 border-[1.5] border-primary-400 rounded-sm w-[110px] text-primary-400 hover:text-primary-400 cursor-pointer"
              variant="outline"
              onClick={() => {
                formik.setErrors({});
                navigate(-1);
              }}
            >
              {cancelText}
            </Button>
          )}
          <ExtendedButton
            disabled={btnDisabled}
            type="submit"
            className="mr-2 mb-2 px-2 w-fit min-w-[110px] cursor-pointer"
            text={submitText}
            isLoading={isSubmitting}
          />
        </div>
      </form>
    </FormikProvider>
  );
}
