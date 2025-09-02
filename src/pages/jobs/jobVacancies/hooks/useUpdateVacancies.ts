import { useFormik } from "formik";
import { useGetDataQuery, usePostDataMutation } from "@/api/api";
import React from "react";
import { IJobVacancyTableData } from "../interface/IAddJobVacancies";
import { company_details_validation, documentation_validation, job_details_validation, recruitement_process_validation } from "../validation/addJobVacanciesValidation";

interface IProps {
 step: number;
 setStep: React.Dispatch<React.SetStateAction<number>>;
}

const useUpdateVacancies = ({ step }: IProps) => {
 const [updateCandidate, { isError: isUpdateCandidateError, isLoading: isUpdateCandidateLoading, isSuccess: isUpdateCandidateSuccess }] = usePostDataMutation();

 // Get Initial Data
 const {
  data,
  isError: isGetCandidateDetailsError,
  isLoading: isGetCandidateDetailsLoading,
  isSuccess: isGetCandidateDetailsSuccess,
 } = useGetDataQuery({ url: "", params: {}, tag: "" });

 const initial: IJobVacancyTableData = data;

 // Inital value
 const initialValues: IJobVacancyTableData = {
  id: initial?.id || "",
  pre_approval_date: initial?.pre_approval_date || "",
  lt_number: initial?.lt_number || "",
  chalani_number: initial?.chalani_number || "",
  job_vaccancies: initial?.job_vaccancies?.length
   ? initial.job_vaccancies
   : [
      {
       job_title: "",
       job_category: "",
       male_workers: "",
       female_workers: "",
       work_country: "",
       work_city: "",
       job_description: "",
       contract_duration: "",
       probation_period: "",
       overtime: "",
       daily_working_hours: "",
       weekly_working_hours: "",
       basic_salary: "",
       overtime_allowance: "",
       food_accommodation: "",
       medical_insurance: "",
       annual_leave: "",
       other_benefits: "",
      },
     ],
  dofe_approval: initial?.dofe_approval || false,
  advertisement_date: initial?.advertisement_date || "",
  newspaper_portal: initial?.newspaper_portal || "",
  ad_duration_from: initial?.ad_duration_from || "",
  ad_duration_to: initial?.ad_duration_to || "",
  selection_mode: initial?.selection_mode || "",
  interview_type: initial?.interview_type || "",
  interview_date: initial?.interview_date || "",
  interview_location: initial?.interview_location || "",
  recruitment_company: initial?.recruitment_company || "",
  pre_approval_dofe: initial?.pre_approval_dofe || false,
  demand_letter: initial?.demand_letter || false,
  power_of_attorney: initial?.power_of_attorney || false,
  employment_contract: initial?.employment_contract || false,
  government_service_charge: initial?.government_service_charge || false,
  documents_pre_approval_dofe: initial?.documents_pre_approval_dofe || null,
  documents_demand_letter: initial?.documents_demand_letter || null,
  documents_power_of_attorney: initial?.documents_power_of_attorney || null,
  documents_employment_contract: initial?.documents_employment_contract || null,
  documents_government_service_charge: initial?.documents_government_service_charge || null,
 };

 const updateCandidateFormik = useFormik({
  initialValues,
  validationSchema: step === 1 ? company_details_validation : step === 2 ? job_details_validation : step === 3 ? recruitement_process_validation : documentation_validation,
  enableReinitialize: true,
  onSubmit: async (values) => {
   updateCandidate({
    url: "",
    data: values,
    invalidateTag: "",
   });
  },
 });

 return {
  updateCandidateFormik,
  isUpdateCandidateError,
  isUpdateCandidateLoading,
  isUpdateCandidateSuccess,
  isGetCandidateDetailsError,
  isGetCandidateDetailsLoading,
  isGetCandidateDetailsSuccess,
 };
};

export default useUpdateVacancies;
