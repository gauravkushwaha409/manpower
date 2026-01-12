import {
  PreApprovalDofeFormType,
  PreApprovalValidation,
} from "@/pages/pre-approval-dofe/schema/pre-approval-dofe-schema";
import { useFormik } from "formik";

const useUpdatePreApprovalDofe = () => {
  const initialValues: PreApprovalDofeFormType = {
    country: "",
    recuirtment_company: "",
    pre_approval_certificate_number: "",
    pre_approval_certificate_pdf: "",
    pre_approval_date: "",
    pre_approval_validity: "",
    pre_lt_number: "",
    chalani_number: "",
    document: "",
    document_type: "",
    documents: [],

    // Step - 2 (Temporary store the job details)
    temp_job_details: {

      job_title: "",
      male: "",
      female: "",
      basic_salary_aed: "",
      basic_salary_nrp: "",
      working_hours: "",
      working_days: "",
      contract_period: "",
      working_city: "",
      experience: false,
      years: "",
      qualification: "",
    },

    // Actual Job details
    job_details: [],
    // Step - 3
    food: false,
    accomodation: false,
    transportation: false,
    free_visa: false,
    free_ticket: false,
    overtime: false,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: PreApprovalValidation,
    enableReinitialize: true,
    onSubmit: async () => { },
  });

  return {
    formik,
  };
};

export default useUpdatePreApprovalDofe;
