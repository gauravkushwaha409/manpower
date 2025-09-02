import { useGetDataQuery } from "@/api/api";
import { useState } from "react";

const useJobOffer = () => {
 const [addJobOffer, setAddJobOffer] = useState<boolean>(false);
 const [updateJobOffer, setUpdateJobOffer] = useState<string>("");
 const [deleteJobOffer, setDeleteJobOffer] = useState<string>("");

 const { data, isError: isGetJobOfferError, isLoading: isGetJobOfferLoading, isSuccess: isGetJobOfferSuccess } = useGetDataQuery({ url: "", params: {}, tag: "" });

 // Handle Open Add JobOffer Modal
 const handleOpenAddModal = () => {
  setAddJobOffer(true);
 };

 // Handle Close Add JobOffer Modal
 const handleCloseAddModal = () => {
  setAddJobOffer(false);
 };

 // handle close update modal
 const handleCloseUpdateModal = () => {
  setUpdateJobOffer("");
 };

 // handle Close Delete Modal
 const handleCloseDeleteModal = () => {
  setDeleteJobOffer("");
 };

 const handleDeleteJobOffer = () => {
  alert("JobOffer Deleted Successfully" + deleteJobOffer);
  setDeleteJobOffer("");
 };

 return {
  data,
  addJobOffer,
  setAddJobOffer,
  updateJobOffer,
  setUpdateJobOffer,
  deleteJobOffer,
  setDeleteJobOffer,
  isGetJobOfferSuccess,
  isGetJobOfferLoading,
  isGetJobOfferError,
  handleOpenAddModal,
  handleCloseAddModal,
  handleDeleteJobOffer,
  handleCloseDeleteModal,
  handleCloseUpdateModal,
 };
};

export default useJobOffer;
