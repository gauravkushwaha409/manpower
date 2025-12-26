import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Trash2 } from "lucide-react";
import React from "react";

interface IProps {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm?: () => void;
  primaryMessage?: string;
  secondaryMessage?: string;
}

const DeleteModal: React.FC<IProps> = ({
  isOpen,
  onCancel,
  onConfirm,
  primaryMessage,
  secondaryMessage,
}) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={onCancel}>
      <AlertDialogContent className="max-w-md border-0 bg-white p-0 shadow-2xl dark:bg-zinc-900">
        {/* Icon Section */}
        <div className="flex justify-center pt-8">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-red-100 to-red-50 dark:from-red-950 dark:to-red-900">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-red-500 to-red-600 shadow-lg shadow-red-500/30">
              <Trash2 className="h-6 w-6 text-white" strokeWidth={2.5} />
            </div>
          </div>
        </div>

        {/* Header Section */}
        <AlertDialogHeader className="px-8 pb-2 pt-6 text-center">
          <AlertDialogTitle className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            {primaryMessage ?? "Are you absolutely sure?"}
          </AlertDialogTitle>
          <AlertDialogDescription className="mt-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            {secondaryMessage ??
              "This action cannot be undone. This will permanently delete your data from our servers."}
          </AlertDialogDescription>
        </AlertDialogHeader>

        {/* Footer Section */}
        <AlertDialogFooter className="flex gap-3 border-t border-zinc-100 bg-zinc-50/50 px-8 py-5 dark:border-zinc-800 dark:bg-zinc-900/50 sm:flex-row sm:justify-center">
          <AlertDialogCancel
            onClick={onCancel}
            className="flex-1 rounded-xl border-zinc-200 bg-white px-6 py-2.5 font-medium text-zinc-700 shadow-sm transition-all duration-200 hover:bg-zinc-50 hover:shadow dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 sm:flex-none"
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            className="flex-1 rounded-xl bg-linear-to-r from-red-500 to-red-600 px-6 py-2.5 font-medium text-white shadow-lg shadow-red-500/25 transition-all duration-200 hover:from-red-600 hover:to-red-700 hover:shadow-xl hover:shadow-red-500/30 sm:flex-none"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteModal;
