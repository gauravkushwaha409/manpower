import { useDeleteDataMutation } from "@/api/api";

const useDeletePolicy = () => {
  const [deletePolicy, { isLoading, isError, isSuccess }] =
    useDeleteDataMutation();

  const handleDeletePolicy = async (id: number) => {
    try {
      await deletePolicy({
        url: `/policy/${id}`,
      });
    } catch (error) {
      console.error("Failed to delete policy:", error);
    }
  };

  return {
    handleDeletePolicy,
    isLoading,
    isError,
    isSuccess,
  };
};

export default useDeletePolicy;
