import { useDeleteDataMutation } from "@/api/api";

const useDeletePayment = () => {
  const [deletePayment, { isLoading, isError, isSuccess }] =
    useDeleteDataMutation();

  const handleDeletePayment = async (id: number) => {
    try {
      await deletePayment({
        url: `/payment/${id}`,
      });
    } catch (error) {
      console.error("Failed to delete payment:", error);
    }
  };

  return {
    handleDeletePayment,
    isLoading,
    isError,
    isSuccess,
  };
};

export default useDeletePayment;
