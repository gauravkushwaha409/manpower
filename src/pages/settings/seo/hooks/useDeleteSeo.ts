import { useDeleteDataMutation } from "@/api/api";

const useDeleteSeo = () => {
  const [deleteSeo, { isLoading, isError, isSuccess }] =
    useDeleteDataMutation();

  const handleDeleteSeo = async (id: number) => {
    try {
      await deleteSeo({
        url: `/seo/${id}`,
      });
    } catch (error) {
      console.error("Failed to delete seo:", error);
    }
  };

  return {
    handleDeleteSeo,
    isLoading,
    isError,
    isSuccess,
  };
};

export default useDeleteSeo;
