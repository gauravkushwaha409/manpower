import { useDeleteDataMutation } from "@/api/api";
import handleErrors, { ApiResponse } from "@/api/api.error";
import { endpoints } from "@/api/endpoints";
// import { apiTags } from "@/constant/tag";
import { showErrorMessage, showSuccessMessage } from "@/utils/toast";

const useDeletePreApprovalDofe = () => {
  const [deletePreApprovalDofe, { isLoading, isError, isSuccess }] =
    useDeleteDataMutation();

  const handleDelete = async (id: string) => {
    try {
      const response = await deletePreApprovalDofe({
        url: endpoints.preApprovalDofe.delete.replace("id", id),
      });

      if ("error" in response && response.error) {
        handleErrors(response as ApiResponse, (errors) => {
          if (errors.general) {
            showErrorMessage(errors.general);
          } else {
            Object.entries(errors).forEach(([field, msg]) => {
              showErrorMessage(`${field}: ${msg}`);
            });
          }
        });
        return;
      }

      if (response?.data?.status === "success") {
        showSuccessMessage(response.data.message);
      }
    } catch {
      showErrorMessage("Error While Deleting Pre Approval Dofe");
    }
  };

  return {
    handleDelete,
    isLoading,
    isError,
    isSuccess,
  };
};

export default useDeletePreApprovalDofe;
