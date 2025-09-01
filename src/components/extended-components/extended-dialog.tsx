import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import React from "react";

interface ExtendedDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const ExtendedDialog = ({
  open,
  onOpenChange,
  title,
  children,
  className,
}: ExtendedDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "p-6 min-w-[630px] max-h-[650px] overflow-auto",
          className
        )}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{children}</DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default ExtendedDialog;
