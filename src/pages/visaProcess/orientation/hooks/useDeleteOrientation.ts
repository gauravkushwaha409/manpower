import { useDeleteDataMutation } from "@/api/api";

const useDeleteOrientation = () => {
  const [deleteOrientation, { isLoading, isError, isSuccess }] =
    useDeleteDataMutation();

  const handleDeleteOrientation = async (id: number) => {
    try {
      await deleteOrientation({
        url: `/orientation/${id}`,
      });
    } catch (error) {
      console.error("Failed to delete orientation:", error);
    }
  };

  return {
    handleDeleteOrientation,
    isLoading,
    isError,
    isSuccess,
  };
};

export default useDeleteOrientation;
