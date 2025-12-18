import { FormikProvider, FormikValues, FormikContextType } from "formik";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ExtendedButton from "./ExtendedButton";
import { useNavigate } from "react-router-dom";
import HorizontalDivider from "../reusable-component/HorizontalDivider";
import { ChevronLeft } from "lucide-react";

interface Step {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface MultiStepFormProps<T extends FormikValues> {
  formik: FormikContextType<T>;
  steps: Step[];
  currentStep: number;
  onStepChange: (stepIndex: number) => void;
  onClose?: () => void;
  submitText?: string;
  cancelText?: string;
  nextText?: string;
  prevText?: string;
  isSubmitting?: boolean;
  className?: string;
  showCancelBtn?: boolean;
  btnDisabled?: boolean;
  showStepIndicator?: boolean;
  allowStepSkip?: boolean;
}

export default function ExtendedMultiStepForm<T extends FormikValues>({
  formik,
  steps,
  currentStep,
  onStepChange,
  // onClose,
  submitText = "Submit",
  cancelText = "Cancel",
  nextText = "Next",
  prevText = "Previous",
  isSubmitting = false,
  className = "",
  showCancelBtn = true,
  btnDisabled = false,
  showStepIndicator = true,
  allowStepSkip = false,
}: MultiStepFormProps<T>) {
  const navigate = useNavigate();
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;

  const handleNext = async () => {
    formik.handleSubmit();
    if (!isLastStep) {
      onStepChange(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (!isFirstStep) {
      onStepChange(currentStep - 1);
    }
  };

  const handleStepClick = (stepIndex: number) => {
    if (allowStepSkip) {
      onStepChange(stepIndex);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLastStep) {
      formik.handleSubmit();
    } else {
      handleNext();
    }
  };

  return (
    <FormikProvider value={formik}>
      <form
        onSubmit={handleSubmit}
        className={cn(
          "space-y-6 bg-background-200 bg-white shadow-[0px_1px_22px_0px_rgba(0,0,0,0.04)] p-4 rounded-[0.5rem]",
          className
        )}
      >
        {/* Step Indicator */}
        {showStepIndicator && (
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={cn(
                    "flex items-center",
                    index < steps.length - 1 && "flex-1"
                  )}
                >
                  <div
                    className={cn(
                      "flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium transition-colors duration-200",
                      index <= currentStep
                        ? "bg-primary-400 text-white"
                        : "bg-gray-200 text-gray-500",
                      allowStepSkip && "cursor-pointer hover:bg-primary-300"
                    )}
                    onClick={() => handleStepClick(index)}
                  >
                    {index + 1}
                  </div>
                  <div className="ml-2 min-w-0">
                    <p
                      className={cn(
                        "text-sm font-medium truncate",
                        index <= currentStep
                          ? "text-primary-400"
                          : "text-gray-500"
                      )}
                    >
                      {step.title}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={cn(
                        "flex-1 h-0.5 mx-4 transition-colors duration-200",
                        index < currentStep ? "bg-primary-400" : "bg-gray-200"
                      )}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Current Step Content */}
        <div className="min-h-[300px]">{steps[currentStep]?.content}</div>

        <div className="px-4">
          <HorizontalDivider />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-10 w-full">
          <div className="flex gap-2">
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
          </div>

          <div className="flex gap-2">
            {!isFirstStep && (
              <Button
                type="button"
                variant="outline"
                className="mb-2 p-2 border-[1.5] border-gray-400 rounded-sm w-[110px] text-gray-600 hover:text-gray-600 cursor-pointer"
                onClick={handlePrevious}
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                {prevText}
              </Button>
            )}

            <ExtendedButton
              disabled={btnDisabled}
              type="submit"
              className="mr-2 mb-2 px-2 w-fit min-w-[110px] cursor-pointer"
              text={isLastStep ? submitText : nextText}
              isLoading={isSubmitting}
            />
          </div>
        </div>
      </form>
    </FormikProvider>
  );
}
