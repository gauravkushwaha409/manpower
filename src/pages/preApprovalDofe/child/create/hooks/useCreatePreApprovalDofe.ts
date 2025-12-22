import {
  PreApprovalDofeFormType,
  PreApprovalValidation,
} from "@/pages/preApprovalDofe/schema/preApprovalDofeValidationSchema";
import { useFormik } from "formik";

const useCreatePreApprovalDofe = () => {
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

    // Step - 2
    job_title: "",
    male: 0,
    female: 0,
    basic_salary_aed: 0,
    basic_salary_nrp: 0,
    working_hours: 0,
    working_days: 0,
    contract_period: 0,
    working_city: "",
    experience: false,
    years: 0,
    qualification: "",
    food: false,
    accomodation: false,
    transportation: false,
    free_visa: false,
    free_ticket: false,
    overtime: false,
  };

  const formik = useFormik<PreApprovalDofeFormType>({
    initialValues,
    validationSchema: PreApprovalValidation,
    onSubmit: async () => {},
  });

  return {
    formik,
  };
};

export default useCreatePreApprovalDofe;
