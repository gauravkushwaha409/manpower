import { useFormikContext } from "formik";
import { useCallback } from "react";
import { PreApprovalDofeFormType } from "../schema/pre-approval-dofe-schema";

const usePreApprovalDofeForm = () => {
  const { values, setValues, validateForm, touched, setTouched } =
    useFormikContext<PreApprovalDofeFormType>();

  // ========================== Handle Add Job =========================
  const handleAddJob = useCallback(async () => {
    const errors = await validateForm();
    const tempJobDetailsError = errors?.temp_job_details;
    console.log(tempJobDetailsError);
    if (tempJobDetailsError && Object.keys(tempJobDetailsError).length > 0) {
      setTouched({
        ...touched,
        temp_job_details: {
          job_title: true,
          male: true,
          female: true,
          basic_salary_nrp: true,
          basic_salary_aed: true,
          contract_period: true,
          working_city: true,
          working_days: true,
          working_hours: true,
          experience: true,
          qualification: true,
          years: true,
        },
      });
      return;
    }
    console.log(values);
    setValues({
      ...values,
      job_details: [
        ...values.job_details,
        {
          job_title: values?.temp_job_details?.job_title,
          male: values?.temp_job_details?.male,
          female: values?.temp_job_details?.female,
          basic_salary_nrp: values?.temp_job_details?.basic_salary_nrp,
          basic_salary_aed: values?.temp_job_details?.basic_salary_aed,
          contract_period: values?.temp_job_details?.contract_period,
          working_city: values?.temp_job_details?.working_city,
          working_days: values?.temp_job_details?.working_days,
          working_hours: values?.temp_job_details?.working_hours,
          experience: values?.temp_job_details?.experience,
          qualification: values?.temp_job_details?.qualification,
          years: values?.temp_job_details?.years,
        },
      ],
      temp_job_details: {
        job_title: "",
        male: "",
        female: "",
        basic_salary_nrp: "",
        basic_salary_aed: "",
        contract_period: "",
        working_city: "",
        working_days: "",
        working_hours: "",
        experience: false,
        qualification: "",
        years: "",
      },
    });
    setTouched({
      ...touched,
      temp_job_details: {
        job_title: false,
        male: false,
        female: false,
        basic_salary_nrp: false,
        basic_salary_aed: false,
        contract_period: false,
        working_city: false,
        working_days: false,
        working_hours: false,
        experience: false,
        qualification: false,
        years: false,
      },
    });
  }, []);

  // ========================== Handle Edit Job =========================
  const handleEditJob = useCallback(() => {}, []);

  // ========================== Handle Update Job =========================
  const handleUpdateJob = useCallback(() => {}, []);

  // ========================== Handle Cancel Update Job =========================
  const handleCancelUpdateJob = useCallback(() => {}, []);

  // ========================== Handle Delete Job =========================
  const handleDeleteJob = useCallback(() => {}, []);

  // ======================== Is Editing Mode ====================
  const isEditMode =
    values?.edit_index !== null && values?.edit_index !== undefined;

  return {
    handleAddJob,
    handleEditJob,
    handleUpdateJob,
    handleDeleteJob,
    handleCancelUpdateJob,
    values,
    isEditMode,
  };
};

export default usePreApprovalDofeForm;
