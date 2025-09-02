import { useFormik } from "formik";
import { IJobVacancyTableData } from "../interface/IAddJobVacancies";
import { company_details_validation, documentation_validation, job_details_validation, recruitement_process_validation } from "../validation/addJobVacanciesValidation";
import { usePostDataMutation } from "@/api/api";

interface IProps {
 step: number;
 setStep: React.Dispatch<React.SetStateAction<number>>;
 onClose: () => void;
}

const useCreateVacancies = ({ setStep, step }: IProps) => {
 const [createJobVacancy, { isError: isCreateJobVacancyError, isLoading: isCreateJobVacancyLoading, isSuccess: isCreateJobVacancySuccess }] = usePostDataMutation();

 // Inital value
 const initialValues: IJobVacancyTableData = {
  id: "",
  pre_approval_date: "",
  lt_number: "",
  chalani_number: "",
  job_vaccancies: [
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
  dofe_approval: false,
  advertisement_date: "",
  newspaper_portal: "",
  ad_duration_from: "",
  ad_duration_to: "",
  selection_mode: "",
  interview_type: "",
  interview_date: "",
  interview_location: "",
  recruitment_company: "",
  pre_approval_dofe: false,
  demand_letter: false,
  power_of_attorney: false,
  employment_contract: false,
  government_service_charge: false,
  // Optional file uploads
  documents_pre_approval_dofe: null,
  documents_demand_letter: null,
  documents_power_of_attorney: null,
  documents_employment_contract: null,
  documents_government_service_charge: null,
 };

 const createVacancyFormik = useFormik({
  initialValues,
  validationSchema: step === 0 ? company_details_validation : step === 1 ? job_details_validation : step === 2 ? recruitement_process_validation : documentation_validation,
  onSubmit: async (value) => {
   step < 2 ? setStep(step + 1) : setStep(step);
   createJobVacancy({
    url: "",
    data: value,
    invalidateTag: "",
   });
   console.log(value);
  },
 });

 return {
  createVacancyFormik,
  isCreateJobVacancyError,
  isCreateJobVacancyLoading,
  isCreateJobVacancySuccess,
 };
};

export default useCreateVacancies;
