import { useGetDataQuery } from "@/api/api";
import { useState } from "react";

const useCountry = () => {
    const [addCountry, setAddCountry] = useState<boolean>(false);
    const [updateCountry, setUpdateCountry] = useState<string>("");
    const [deleteCountry, setDeleteCountry] = useState<string>("");

    const { data, isError: isGetCountryError, isLoading: isGetCountryLoading, isSuccess: isGetCountrySuccess } = useGetDataQuery({ url: "", params: {}, tag: "" });

    // Handle Open Add Country Modal
    const handleOpenAddModal = () => {
        setAddCountry(true);
    };

    // Handle Close Add Country Modal
    const handleCloseAddModal = () => {
        setAddCountry(false);
    };

    // handle close update modal
    const handleCloseUpdateModal = () => {
        setUpdateCountry("");
    };

    // handle Close Delete Modal
    const handleCloseDeleteModal = () => {
        setDeleteCountry("");
    };

    const handleDeleteCountry = () => {
        alert("Country Deleted Successfully" + deleteCountry);
        setDeleteCountry("");
    };

    return {
        data,
        addCountry,
        setAddCountry,
        updateCountry,
        setUpdateCountry,
        deleteCountry,
        setDeleteCountry,
        isGetCountrySuccess,
        isGetCountryLoading,
        isGetCountryError,
        handleOpenAddModal,
        handleCloseAddModal,
        handleDeleteCountry,
        handleCloseDeleteModal,
        handleCloseUpdateModal,
    };
};

export default useCountry;
