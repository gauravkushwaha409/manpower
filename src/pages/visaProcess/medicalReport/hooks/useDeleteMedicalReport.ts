import { useDeleteDataMutation } from "@/api/api";

const useDeleteMedicalReport = () => {
  const [deleteMedicalReport, { isLoading, isError, isSuccess }] =
    useDeleteDataMutation();

  const handleDeleteMedicalReport = async (id: number) => {
    try {
      await deleteMedicalReport({
        url: `/medical-report/${id}`,
      });
    } catch (error) {
      console.error("Failed to delete medical report:", error);
    }
  };

  return {
    handleDeleteMedicalReport,
    isLoading,
    isError,
    isSuccess,
  };
};

export default useDeleteMedicalReport;
