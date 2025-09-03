import { useDeleteDataMutation } from "@/api/api";

const useDeleteEmbassyInterview = () => {
  const [deleteEmbassyInterview, { isLoading, isError, isSuccess }] =
    useDeleteDataMutation();

  const handleDeleteEmbassyInterview = async (id: number) => {
    try {
      await deleteEmbassyInterview({
        url: `/embassy-interview/${id}`,
      });
    } catch (error) {
      console.error("Failed to delete country:", error);
    }
  };

  return {
    handleDeleteEmbassyInterview,
    isLoading,
    isError,
    isSuccess,
  };
};

export default useDeleteEmbassyInterview;
