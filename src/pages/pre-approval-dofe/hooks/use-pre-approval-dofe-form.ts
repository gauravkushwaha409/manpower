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
  }, [values, setValues]);

  // ========================== Handle Edit Job =========================
  const handleEditJob = useCallback(
    (index: number) => {
      const jobToEdit = values?.job_details[index];
      setValues({
        ...values,
        temp_job_details: {
          ...jobToEdit,
        },
        edit_index: index,
      });
    },
    [values, setValues]
  );

  // ========================== Handle Update Job =========================
  const handleUpdateJob = useCallback(async () => {
    if (values?.edit_index === null || values?.edit_index === undefined) return;

    // Force validate the form
    const errors = await validateForm();
    const tempJobDetailsError = errors?.temp_job_details;
    if (tempJobDetailsError && Object.keys(tempJobDetailsError).length > 0) {
      setTouched({
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
    // update the job details
    const updateJobDetails = [...values?.job_details];
    updateJobDetails[values?.edit_index] = {
      ...values?.temp_job_details,
    };
    setValues({
      ...values,
      job_details: [...updateJobDetails],
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
      edit_index: null,
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
  }, [values, setValues]);

  // ========================== Handle Cancel Update Job =========================
  const handleCancelUpdateJob = useCallback(() => {
    setValues({
      ...values,
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
      edit_index: null,
    });
  }, [values, setValues]);

  // ========================== Handle Delete Job =========================
  const handleDeleteJob = useCallback(
    (index: number) => {
      const filterJobDetails = values?.job_details?.filter(
        (_, i) => i !== index
      );
      setValues({
        ...values,
        job_details: [...filterJobDetails],
        temp_job_details:
          values?.edit_index === index
            ? {
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
              }
            : { ...values?.temp_job_details },
        edit_index: values?.edit_index === index ? null : values?.edit_index,
      });
    },
    [values]
  );

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
