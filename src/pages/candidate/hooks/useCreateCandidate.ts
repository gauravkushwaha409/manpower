import { useFormik } from "formik";
import { usePostDataMutation } from "@/api/api";
import React from "react";
import { CandidateValidationSchemaType, step1ValidationSchema, step2ValidationSchema, step3ValidationSchema } from "../schema/candidateValidationSchema";

interface IProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const useCreateCandidate = ({ step, setStep }: IProps) => {
  const [
    createCandidate,
    {
      isError: isCreateCandidateError,
      isLoading: isCreateCandidateLoading,
      isSuccess: isCreateCandidateSuccess,
    },
  ] = usePostDataMutation();

  // Inital value
  const initialValues: CandidateValidationSchemaType = {
    // Basic Information
    id: "",
    firstname: "",
    lastname: "",
    agentName: "",
    dateOfBirth: "",
    phone: "",
    email: "",
    country: "",
    province: "",
    district: "",
    municipality: "",
    wardNo: "",

    // Languages (initialize with one empty language)
    languages: [
      {
        language: "",
        languageLevel: "",
      },
    ],

    // Professional Information
    skills: "",
    current_jobtitle: "",

    // Education (initialize with one empty education)
    education: [
      {
        name_of_instute: "",
        course: "",
        passed_year: "",
      },
    ],

    // Documents
    document_type: "",
    citizenship_number: "",
    citizenship_issued_date: "",
    passport_issued_date: "",
    passport_expiry_date: "",
    passport_number: "",
    police_report_issued_date: "",
    dispatch_number: "",
    police_report_issue_date: "",
    passport_file: null,
    resume_file: null,
    citizenship_document: null,
    police_report_file: null,
  };

  const formik = useFormik<CandidateValidationSchemaType>({
    initialValues,
    validationSchema: step === 0 ? step1ValidationSchema : step === 1 ? step2ValidationSchema : step3ValidationSchema,
    onSubmit: async (values) => {
      if (step < 2) setStep(step + 1);
      else setStep(step);
      createCandidate({
        url: "",
        data: values,
        invalidateTag: "",
      });
    },
  });

  return {
    formik,
    isCreateCandidateError,
    isCreateCandidateLoading,
    isCreateCandidateSuccess,
  };
};

export default useCreateCandidate;
