import { useDeleteDataMutation } from "@/api/api";

const useDeleteVisa = () => {
  const [deleteVisa, { isLoading, isError, isSuccess }] =
    useDeleteDataMutation();

  const handleDeleteVisa = async (id: number) => {
    try {
      await deleteVisa({
        url: `/visa/${id}`,
      });
    } catch (error) {
      console.error("Failed to delete visa:", error);
    }
  };

  return {
    handleDeleteVisa,
    isLoading,
    isError,
    isSuccess,
  };
};

export default useDeleteVisa;
