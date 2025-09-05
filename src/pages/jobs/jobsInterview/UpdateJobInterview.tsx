import React from 'react';
import Breadcrumb from '@/components/reusable-component/Breadcrumb';
import PageHeader from '@/common/PageHeader';
import ExtendedForm from '@/components/extended-components/ExtendedForm';
import JobInterviewForm from './partial/JobInterviewForm';
import useUpdateJobInterview from './hooks/useUpdateJobInterview';

const UpdateJobInterview: React.FC = () => {
  const { formik } = useUpdateJobInterview();
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb Navone="Dashboard" Navtwo="Job Interview" />
      <PageHeader title="Update Job Interview" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <JobInterviewForm />
      </ExtendedForm>
    </div>
  );
};

export default UpdateJobInterview;
