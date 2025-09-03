import { useDeleteDataMutation } from "@/api/api";

const useDeleteDOFE = () => {
  const [deleteDOFE, { isLoading, isError, isSuccess }] =
    useDeleteDataMutation();

  const handleDeleteDOFE = async (id: number) => {
    try {
      await deleteDOFE({
        url: `/visa/${id}`,
      });
    } catch (error) {
      console.error("Failed to delete dofe:", error);
    }
  };

  return {
    handleDeleteDOFE,
    isLoading,
    isError,
    isSuccess,
  };
};

export default useDeleteDOFE;
