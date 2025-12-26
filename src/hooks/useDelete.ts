import { useDeleteDataMutation } from "@/api/api";
import useDisclosure from "@/hooks/useDisclousre";
import { showSuccessMessage } from "@/utils/toast";
import useStringState from "@/utils/useStringState";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useUpdateSearchParams } from "./updateSearchParams";

interface IProps {
  endpoints?: string;
  invalidates?: string[];
}

export const useDelete = ({ endpoints, invalidates }: IProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const updateSearchParams = useUpdateSearchParams();
  const [deleteEntry, { isLoading }] = useDeleteDataMutation();
  const deleteState = useDisclosure(false);
  const deleteIdState = useStringState();
  useEffect(() => {
    const deleteIdParams = searchParams.get("delete_id");
    const deleteParams = searchParams.get("delete");
    if (deleteParams === "active") deleteState.open();
    if (deleteIdParams) deleteIdState.setValue(deleteIdParams);
  }, [searchParams]);

  const handleCancel = () => {
    searchParams.delete("delete");
    searchParams.delete("delete_id");
    setSearchParams(searchParams, { replace: true });
    deleteState.close();
  };

  const handleDelete = async () => {
    if (!endpoints) throw new Error("Endpoint not defined");
    const response = (await deleteEntry({
      url:
        endpoints?.replace(":id", deleteIdState.values) ||
        "endpoint_not_defined",
      invalidateTag: [...invalidates!],
    })) as { data: { message: string } };
    if (response?.data?.message) showSuccessMessage(response?.data?.message);
  };

  const handleOpenModal = (id: string) =>
    updateSearchParams({
      delete: "active",
      delete_id: id,
    });
  return {
    handleCancel,
    isOpen: deleteState.isOpen,
    deleteId: deleteIdState.values,
    handleDelete,
    isLoading,
    handleOpenModal,
  };
};
