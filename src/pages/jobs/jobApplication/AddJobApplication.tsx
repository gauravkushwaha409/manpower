import React from 'react';
import Breadcrumb from '@/components/reusable-component/Breadcrumb';
import PageHeader from '@/common/PageHeader';
import ExtendedForm from '@/components/extended-components/ExtendedForm';
import useCreateJobApplication from './hooks/useCreateJobApplication';
import JobApplicationForm from './partials/JobApplicationForm';

const AddJobApplication: React.FC = () => {
  const { formik } = useCreateJobApplication();
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

export default AddJobApplication;
