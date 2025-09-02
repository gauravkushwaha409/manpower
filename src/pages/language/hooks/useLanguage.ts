import { useGetDataQuery } from "@/api/api";
import { useState } from "react";

const useLanguage = () => {
    const [addLanguage, setAddLanguage] = useState<boolean>(false);
    const [updateLanguage, setUpdateLanguage] = useState<string>("");
    const [deleteLanguage, setDeleteLanguage] = useState<string>("");

    const { data, isError: isGetLanguageError, isLoading: isGetLanguageLoading, isSuccess: isGetLanguageSuccess } = useGetDataQuery({ url: "", params: {}, tag: "" });

    // Handle Open Add Language Modal
    const handleOpenAddModal = () => {
        setAddLanguage(true);
    };

    // Handle Close Add Language Modal
    const handleCloseAddModal = () => {
        setAddLanguage(false);
    };

    // handle close update modal
    const handleCloseUpdateModal = () => {
        setUpdateLanguage("");
    };

    // handle Close Delete Modal
    const handleCloseDeleteModal = () => {
        setDeleteLanguage("");
    };

    const handleDeleteLanguage = () => {
        alert("Language Deleted Successfully" + deleteLanguage);
        setDeleteLanguage("");
    };

    return {
        data,
        addLanguage,
        setAddLanguage,
        updateLanguage,
        setUpdateLanguage,
        deleteLanguage,
        setDeleteLanguage,
        isGetLanguageSuccess,
        isGetLanguageLoading,
        isGetLanguageError,
        handleOpenAddModal,
        handleCloseAddModal,
        handleDeleteLanguage,
        handleCloseDeleteModal,
        handleCloseUpdateModal,
    };
};

export default useLanguage;
