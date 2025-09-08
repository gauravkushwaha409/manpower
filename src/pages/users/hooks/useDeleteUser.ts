import { useDeleteDataMutation } from "@/api/api";

const useDeleteUser = () => {
  const [deleteUser, { isLoading, isError, isSuccess }] =
    useDeleteDataMutation();

  const handleDeleteUser = async (id: number) => {
    try {
      await deleteUser({
        url: `/user/${id}`,
      });
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };

  return {
    handleDeleteUser,
    isLoading,
    isError,
    isSuccess,
  };
};

export default useDeleteUser;
