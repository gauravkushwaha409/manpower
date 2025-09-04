import React from 'react';
import Breadcrumb from '@/components/reusable-component/Breadcrumb';
import PageHeader from '@/common/PageHeader';
import ExtendedForm from '@/components/extended-components/ExtendedForm';
import JobCategoryForm from './partials/JobCategoryForm';
import useUpdateJobCategory from './hooks/useUpdateJobCategory';

const UpdateJobCategory: React.FC = () => {
  const { formik } = useUpdateJobCategory();
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb Navone="Dashboard" Navtwo="Job Category" />
      <PageHeader title="Update Job Category" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <JobCategoryForm />
      </ExtendedForm>
    </div>
  );
};

export default UpdateJobCategory;
