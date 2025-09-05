import React from 'react';
import Breadcrumb from '@/components/reusable-component/Breadcrumb';
import PageHeader from '@/common/PageHeader';
import ExtendedForm from '@/components/extended-components/ExtendedForm';
import JobInterviewForm from './partial/JobInterviewForm';
import useCreateJobInterview from './hooks/useCreateJobInterview';

const AddJobInterview: React.FC = () => {
  const { formik } = useCreateJobInterview();
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb Navone="Dashboard" Navtwo="Job Interview" />
      <PageHeader title="Add Job Interview" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <JobInterviewForm />
      </ExtendedForm>
    </div>
  );
};

export default AddJobInterview;
