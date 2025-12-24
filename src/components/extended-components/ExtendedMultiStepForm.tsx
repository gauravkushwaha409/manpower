import { FormikProvider, FormikValues, FormikContextType } from "formik";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import HorizontalDivider from "../reusable-component/HorizontalDivider";
import { Loader } from "lucide-react";
import React from "react";

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
  submitText = "Submit",
  cancelText = "Cancel",
  nextText = "Next",
  prevText = "Previous",
  isSubmitting = false,
  className = "",
  showCancelBtn = true,
  showStepIndicator = true,
  allowStepSkip = false,
}: MultiStepFormProps<T>) {
  const navigate = useNavigate();
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;

  // handle Next click
  const handleNext = async () => {
    formik.handleSubmit();
    if (!isLastStep) {
      onStepChange(currentStep + 1);
    }
  };

  // handle previous
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

  const handleSubmit = () => {
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
          "space-y-6 bg-background-200 bg-white shadow-[0px_1px_22px_0px_rgba(0,0,0,0.04)] p-4 rounded-xl",
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
        <div className="min-h-75">{steps[currentStep]?.content}</div>

        <div className="px-4">
          <HorizontalDivider />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-10 w-full">
          <Button
            variant="previous"
            disabled={isFirstStep}
            onClick={handlePrevious}
            text={prevText}
          />
          <div className="flex items-center gap-x-2">
            {showCancelBtn && (
              <Button
                variant="cancel"
                text={cancelText}
                onClick={() => {
                  formik.setErrors({});
                  navigate(-1);
                }}
              />
            )}
            <Button
              variant="submit"
              isLoading={isSubmitting}
              disabled={isSubmitting}
              text={isLastStep ? submitText : nextText}
              onClick={handleSubmit}
            />
          </div>
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

const Button = ({
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
