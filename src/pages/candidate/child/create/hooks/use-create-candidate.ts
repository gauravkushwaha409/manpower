import { CandidateSchemaType } from "@/pages/candidate/schema/candidate-schema";
import { useFormik } from "formik";
import { useState } from "react";

export const useCreateCandidate = () => {
  const [step, setStep] = useState<number>(0);
  const initialValues: CandidateSchemaType = {
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
    tempWorkExperience: {
      job_title: "",
      company_name: "",
      job_level: "",
      currently_working: false,
      start_date: "",
      end_date: "",
      description: "",
    },
    workExperience: [
      {
        job_title: "",
        company_name: "",
        job_level: "",
        currently_working: false,
        start_date: "",
        end_date: "",
        description: "",
      }
    ],
    // step - 4 form field
    tempEducationDetails: {
      degree: "",
      institute_name: "",
      faculty_name: "",
      currently_studying: false,
      start_date: "",
      end_date: "",
    },
    educationDetails: [
      {
        degree: "",
        institute_name: "",
        faculty_name: "",
        currently_studying: false,
        start_date: "",
        end_date: "",
      }
    ],
    // step - 5 form field
    tempCertificate: {
      certificate_title: "",
      organization_name: "",
      description: "",
      certificate_file: "",
    },
    certificates: [
      {
        certificate_title: "",
        organization_name: "",
        description: "",
        certificate_file: "",
      }
    ],



    // step - 6 form field
    tempDocument: {
      type: "citizenship",
      document: ""
    },
    documents: [],
    // Step-7 form field
    applied_country: "",
    company_name: "",
    job_vacancy: "",
    interview_process: "",
    description: "",
  };
  const formik = useFormik<CandidateSchemaType>({
    initialValues,
    onSubmit: () => { },
  });

  return { formik, step, setStep };
};
