import { useDeleteDataMutation } from "@/api/api";

const useDeleteCountry = () => {
  const [deleteCountry, { isLoading, isError, isSuccess }] =
    useDeleteDataMutation();

  const handleDeleteCountry = async (id: number) => {
    try {
      await deleteCountry({
        url: `/country/${id}`,
      });
    } catch (error) {
      console.error("Failed to delete country:", error);
    }
  };

  return {
    handleDeleteCountry,
    isLoading,
    isError,
    isSuccess,
  };
};

export default useDeleteCountry;
