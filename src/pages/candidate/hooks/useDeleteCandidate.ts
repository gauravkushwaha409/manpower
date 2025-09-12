import { useDeleteDataMutation } from "@/api/api";

const useDeleteCandidate = () => {
  const [deleteCandidate, { isLoading, isError, isSuccess }] =
    useDeleteDataMutation();

  const handleDeleteCandidate = async (id: number) => {
    try {
      await deleteCandidate({
        url: `/candidate/${id}`,
      });
    } catch (error) {
      console.error("Failed to delete candidate:", error);
    }
  };

  return {
    handleDeleteCandidate,
    isLoading,
    isError,
    isSuccess,
  };
};

export default useDeleteCandidate;
