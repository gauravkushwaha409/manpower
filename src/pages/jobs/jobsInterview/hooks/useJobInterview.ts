import { useGetDataQuery } from "@/api/api";
import { useState } from "react";

const useJobInterview = () => {
 const [addJobInterview, setAddJobInterview] = useState<boolean>(false);
 const [updateJobInterview, setUpdateJobInterview] = useState<string>("");
 const [deleteJobInterview, setDeleteJobInterview] = useState<string>("");

 const { data, isError: isGetJobInterviewError, isLoading: isGetJobInterviewLoading, isSuccess: isGetJobInterviewSuccess } = useGetDataQuery({ url: "", params: {}, tag: "" });

 // Handle Open Add JobInterview Modal
 const handleOpenAddModal = () => {
  setAddJobInterview(true);
 };

 // Handle Close Add JobInterview Modal
 const handleCloseAddModal = () => {
  setAddJobInterview(false);
 };

 // handle close update modal
 const handleCloseUpdateModal = () => {
  setUpdateJobInterview("");
 };

 // handle Close Delete Modal
 const handleCloseDeleteModal = () => {
  setDeleteJobInterview("");
 };

 const handleDeleteJobInterview = () => {
  alert("JobInterview Deleted Successfully" + deleteJobInterview);
  setDeleteJobInterview("");
 };

 return {
  data,
  addJobInterview,
  setAddJobInterview,
  updateJobInterview,
  setUpdateJobInterview,
  deleteJobInterview,
  setDeleteJobInterview,
  isGetJobInterviewSuccess,
  isGetJobInterviewLoading,
  isGetJobInterviewError,
  handleOpenAddModal,
  handleCloseAddModal,
  handleDeleteJobInterview,
  handleCloseDeleteModal,
  handleCloseUpdateModal,
 };
};

export default useJobInterview;
