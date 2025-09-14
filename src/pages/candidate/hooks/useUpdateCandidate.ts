import { useFormik } from 'formik';
import { useGetDataQuery, usePostDataMutation } from '@/api/api';
import React from 'react';
import { CandidateValidationSchemaType, step1ValidationSchema, step2ValidationSchema, step3ValidationSchema } from '../schema/candidateValidationSchema';

interface IProps {
 step: number;
 setStep: React.Dispatch<React.SetStateAction<number>>;
}

const useUpdateCandidate = ({ step }: IProps) => {
 const [updateCandidate, { isError: isUpdateCandidateError, isLoading: isUpdateCandidateLoading, isSuccess: isUpdateCandidateSuccess }] = usePostDataMutation();

 const {
  data,
  isError: isGetCandidateDetailsError,
  isLoading: isGetCandidateDetailsLoading,
  isSuccess: isGetCandidateDetailsSuccess,
 } = useGetDataQuery({ url: '', params: {}, tag: '' });

 const initial: CandidateValidationSchemaType = data;

 const initialValues: CandidateValidationSchemaType = {
  // Basic Information
  id: initial?.id || '',
  firstname: initial?.firstname || '',
  lastname: initial?.lastname || '',
  agentName: initial?.agentName || '',
  dateOfBirth: initial?.dateOfBirth || '',
  phone: initial?.phone || '',
  email: initial?.email || '',
  country: initial?.country || '',
  province: initial?.province || '',
  district: initial?.district || '',
  municipality: initial?.municipality || '',
  wardNo: initial?.municipality || '',

  // Languages (initialize with one empty language)
  languages: initial?.languages || [
   {
    language: '',
    languageLevel: '',
   },
  ],

  // Professional Information
  skills: initial?.skills || '',
  current_jobtitle: initial?.current_jobtitle || '',

  // Education (initialize with one empty education)
  education: initial?.education || [
   {
    name_of_instute: '',
    course: '',
    passed_year: '',
   },
  ],

  // Documents
  documents: [
   {
    type: 'citizenship',
    issueDate: new Date(),
   },
  ],
 };

 const updateCandidateFormik = useFormik({
  initialValues,
  validationSchema: step === 0 ? step1ValidationSchema : step === 1 ? step2ValidationSchema : step3ValidationSchema,
  enableReinitialize: true,
  onSubmit: async (values) => {
   if (step !== 2) return;

   updateCandidate({
    url: '',
    data: values,
    invalidateTag: '',
   });
  },
 });

 return {
  updateCandidateFormik,
  isUpdateCandidateError,
  isUpdateCandidateLoading,
  isUpdateCandidateSuccess,
  isGetCandidateDetailsError,
  isGetCandidateDetailsLoading,
  isGetCandidateDetailsSuccess,
 };
};

export default useUpdateCandidate;
