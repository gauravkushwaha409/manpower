import { useGetDataQuery } from "@/api/api";
import { useState } from "react";

const useJobCategory = () => {
 const [addJobCategory, setAddJobCategory] = useState<boolean>(false);
 const [updateJobCategory, setUpdateJobCategory] = useState<string>("");
 const [deleteJobCategory, setDeleteJobCategory] = useState<string>("");

 const { data, isError: isGetJobCategoryError, isLoading: isGetJobCategoryLoading, isSuccess: isGetJobCategorySuccess } = useGetDataQuery({ url: "", params: {}, tag: "" });

 // Handle Open Add JobCategory Modal
 const handleOpenAddModal = () => {
  setAddJobCategory(true);
 };

 // Handle Close Add JobCategory Modal
 const handleCloseAddModal = () => {
  setAddJobCategory(false);
 };

 // handle close update modal
 const handleCloseUpdateModal = () => {
  setUpdateJobCategory("");
 };

 // handle Close Delete Modal
 const handleCloseDeleteModal = () => {
  setDeleteJobCategory("");
 };

 const handleDeleteJobCategory = () => {
  alert("JobCategory Deleted Successfully" + deleteJobCategory);
  setDeleteJobCategory("");
 };

 return {
  data,
  addJobCategory,
  setAddJobCategory,
  updateJobCategory,
  setUpdateJobCategory,
  deleteJobCategory,
  setDeleteJobCategory,
  isGetJobCategorySuccess,
  isGetJobCategoryLoading,
  isGetJobCategoryError,
  handleOpenAddModal,
  handleCloseAddModal,
  handleDeleteJobCategory,
  handleCloseDeleteModal,
  handleCloseUpdateModal,
 };
};

export default useJobCategory;
