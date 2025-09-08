import { useDeleteDataMutation } from "@/api/api";

const useDeletePreApplication = () => {
  const [deletePreApplication, { isLoading, isError, isSuccess }] =
    useDeleteDataMutation();

  const handleDeletePreApplication = async (id: number) => {
    try {
      await deletePreApplication({
        url: `/pre-application/${id}`,
      });
    } catch (error) {
      console.error("Failed to delete pre application:", error);
    }
  };

  return {
    handleDeletePreApplication,
    isLoading,
    isError,
    isSuccess,
  };
};

export default useDeletePreApplication;
