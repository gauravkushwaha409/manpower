import { useDeleteDataMutation } from "@/api/api";

const useDeleteLocation = () => {
  const [deleteLocation, { isLoading, isError, isSuccess }] =
    useDeleteDataMutation();

  const handleDeleteLocation = async (id: number) => {
    try {
      await deleteLocation({
        url: `/location/${id}`,
      });
    } catch (error) {
      console.error("Failed to delete location:", error);
    }
  };

  return {
    handleDeleteLocation,
    isLoading,
    isError,
    isSuccess,
  };
};

export default useDeleteLocation;
