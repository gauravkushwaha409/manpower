// import { CandidateSchemaType } from "@/pages/candidate/schema/candidate-schema";
import { useFormik } from "formik";
import { useState } from "react";

export const useUpdateCandidate = () => {
  const [step, setStep] = useState<number>(0);
  const initialValues = {
    // step - 1 form field
    first_name: "",
    last_name: "",
    passport_no: "",
    date_of_birth: "",
    birth_place: "",
    father_name: "",
    mother_name: "",
    phone: "",
    email: "",
    province: "",
    district: "",
    municipality: "",
    ward_no: "",
    // step - 2 form field
    skill: "",
    current_jobtitle: "",
    languages: [],
    education: [],
    // step - 3 form field
    documents: [],
    tempDocument: {
      document: "",
      type: "citizenship",
    },
    // Step-4
    applied_country: "",
    company_name: "",
    job_vacancy: "",
    interview_process: "",
    description: "",
  };
  const formik = useFormik({
    initialValues,
    onSubmit: () => {},
  });

  return { formik, step, setStep };
};
