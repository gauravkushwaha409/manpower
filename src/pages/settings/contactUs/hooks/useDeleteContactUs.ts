import { useDeleteDataMutation } from "@/api/api";

const useDeleteContactUs = () => {
  const [deleteContactUs, { isLoading, isError, isSuccess }] =
    useDeleteDataMutation();

  const handleDeleteContactUs = async (id: number) => {
    try {
      await deleteContactUs({
        url: `/contact-us/${id}`,
      });
    } catch (error) {
      console.error("Failed to delete contact:", error);
    }
  };

  return {
    handleDeleteContactUs,
    isLoading,
    isError,
    isSuccess,
  };
};

export default useDeleteContactUs;
