import { useFormik } from "formik";

import {
  PreApprovalDofeFormType,
  PreApprovalValidation,
} from "@/pages/preApprovalDofe/schema/preApprovalDofeValidationSchema";

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
    job_title: "",
    male: null,
    female: null,
    basic_salary_aed: null,
    basic_salary_nrp: null,
    working_hours: null,
    working_days: null,
    contract_period: null,
    working_city: null,
    experience: false,
    years: null,
    qualification: null,

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
    onSubmit: async () => {},
  });

  return {
    formik,
  };
};

export default useUpdatePreApprovalDofe;
