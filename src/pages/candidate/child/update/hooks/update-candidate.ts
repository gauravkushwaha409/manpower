import { CandidateValidationSchemaType } from "@/pages/candidate/schema/candidate-schema";
import { useFormik } from "formik";
import { useState } from "react";

export const useUpdateCandidate = () => {
  const [step, setStep] = useState<number>(0);
  const initialValues: CandidateValidationSchemaType = {
    agent_name: "",
    country: "",
    current_jobtitle: "",
    date_of_birth: "",
    district: "",
    email: "",
    first_name: "",
    last_name: "",
    municipality: "",
    phone: "",
    province: "",
    skills: "",
    wardNo: "",
    documents: [],
    education: [],
    languages: [],
  };
  const formik = useFormik({
    initialValues,
    onSubmit: () => {},
  });

  return { formik, step, setStep };
};
