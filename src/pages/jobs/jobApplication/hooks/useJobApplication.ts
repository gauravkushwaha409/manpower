import { useGetDataQuery } from "@/api/api";
import { useState } from "react";

const useJobApplicant = () => {
 const [addJobApplicant, setAddJobApplicant] = useState<boolean>(false);
 const [updateJobApplicant, setUpdateJobApplicant] = useState<string>("");
 const [deleteJobApplicant, setDeleteJobApplicant] = useState<string>("");

 const { data, isError: isGetJobApplicantError, isLoading: isGetJobApplicantLoading, isSuccess: isGetJobApplicantSuccess } = useGetDataQuery({ url: "", params: {}, tag: "" });

 // Handle Open Add JobApplicant Modal
 const handleOpenAddModal = () => {
  setAddJobApplicant(true);
 };

 // Handle Close Add JobApplicant Modal
 const handleCloseAddModal = () => {
  setAddJobApplicant(false);
 };

 // handle close update modal
 const handleCloseUpdateModal = () => {
  setUpdateJobApplicant("");
 };

 // handle Close Delete Modal
 const handleCloseDeleteModal = () => {
  setDeleteJobApplicant("");
 };

 const handleDeleteJobApplicant = () => {
  alert("JobApplicant Deleted Successfully" + deleteJobApplicant);
  setDeleteJobApplicant("");
 };

 return {
  data,
  addJobApplicant,
  setAddJobApplicant,
  updateJobApplicant,
  setUpdateJobApplicant,
  deleteJobApplicant,
  setDeleteJobApplicant,
  isGetJobApplicantSuccess,
  isGetJobApplicantLoading,
  isGetJobApplicantError,
  handleOpenAddModal,
  handleCloseAddModal,
  handleDeleteJobApplicant,
  handleCloseDeleteModal,
  handleCloseUpdateModal,
 };
};

export default useJobApplicant;
