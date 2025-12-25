import handleErrors, { ApiResponse, SetErrorCallback } from "@/api/api.error";
import { showErrorMessage, showSuccessMessage } from "./toast";
import { NavigateFunction } from "react-router-dom";

interface IProps {
  response: ApiResponse;
  redirectUrl?: string;
  setErrorCallBack: SetErrorCallback;
  navigate?: NavigateFunction;
  handleCloseModal?: () => void;
  resetForm?: () => void;
}

export const handleResponse = ({
  response,
  redirectUrl,
  setErrorCallBack,
  navigate,
  handleCloseModal,
  resetForm,
}: IProps) => {
  if (response?.data?.message) {
    showSuccessMessage(response?.data?.message);
    handleCloseModal?.();
    redirectUrl && navigate?.(redirectUrl);
    resetForm?.();
  }

  // show error message
  if (response?.error?.data?.message && !response?.error?.data?.errors) {
    showErrorMessage(response?.error?.data?.message);
    return;
  }

  // show field error
  if (response?.error?.data?.errors) {
    handleErrors(response, setErrorCallBack);
    return;
  }
};
