import React from 'react';
import Breadcrumb from '@/components/reusable-component/Breadcrumb';
import PageHeader from '@/common/PageHeader';
import ExtendedForm from '@/components/extended-components/ExtendedForm';
import JobApplicationForm from './partials/JobApplicationForm';
import useUpdateJobApplication from './hooks/useUpdateJobApplication';

const UpdateJobApplication: React.FC = () => {
  const { formik } = useUpdateJobApplication();
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb Navone="Dashboard" Navtwo="Job Application" />
      <PageHeader title="Add Job Application" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <JobApplicationForm />
      </ExtendedForm>
    </div>
  );
};

export default UpdateJobApplication;
