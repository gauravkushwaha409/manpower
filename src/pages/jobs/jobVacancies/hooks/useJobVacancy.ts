import { useGetDataQuery } from "@/api/api";
import { useState } from "react";

const useJobVacancy = () => {
 const [step, setStep] = useState<number>(0);
 const [addJobVacancy, setAddJobVacancy] = useState<boolean>(false);
 const [updateJobVacancy, setUpdateJobVacancy] = useState<string>("");
 const [deleteJobVacancy, setDeleteJobVacancy] = useState<string>("");

 const { data, isError: isGetJobVacancyError, isLoading: isGetJobVacancyLoading, isSuccess: isGetJobVacancySuccess } = useGetDataQuery({ url: "", params: {}, tag: "" });

 // Handle Open Add JobVacancy Modal
 const handleOpenAddModal = () => {
  setAddJobVacancy(true);
 };

 // Handle Close Add JobVacancy Modal
 const handleCloseAddModal = () => {
  setAddJobVacancy(false);
 };

 // handle close update modal
 const handleCloseUpdateModal = () => {
  setUpdateJobVacancy("");
 };

 // handle Close Delete Modal
 const handleCloseDeleteModal = () => {
  setDeleteJobVacancy("");
 };

 const handleDeleteJobVacancy = () => {
  alert("JobVacancy Deleted Successfully" + deleteJobVacancy);
  setDeleteJobVacancy("");
 };

 return {
  data,
  step,
  setStep,
  addJobVacancy,
  setAddJobVacancy,
  updateJobVacancy,
  setUpdateJobVacancy,
  deleteJobVacancy,
  setDeleteJobVacancy,
  isGetJobVacancySuccess,
  isGetJobVacancyLoading,
  isGetJobVacancyError,
  handleOpenAddModal,
  handleCloseAddModal,
  handleDeleteJobVacancy,
  handleCloseDeleteModal,
  handleCloseUpdateModal,
 };
};

export default useJobVacancy;
