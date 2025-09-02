import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface ButtonProps {
  text?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  className?: string;
  type?: "button" | "submit";
  isLoading?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  loadingText?: string;
}
const ExtendedButton = ({
  text = "",
  variant = "default",
  className,
  type,
  isLoading,
  onClick,
  disabled,
  loadingText,
}: ButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "typography-button-text px-5 py-3 bg-Blue-400 rounded-lg text-white",
        {
          "opacity-80": isLoading,
        },
        className
      )}
      type={type || "button"}
      variant={variant}
      disabled={isLoading || disabled}
      aria-busy={isLoading}
    >
      {isLoading ? (
        <span className="flex space-x-1 ">
          <Loader2 className="animate-spin mr-1" /> {loadingText}
        </span>
      ) : (
        text
      )}
    </Button>
  );
};

export default ExtendedButton;
