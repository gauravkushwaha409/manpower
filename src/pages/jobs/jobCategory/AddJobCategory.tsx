import React from 'react';
import Breadcrumb from '@/components/reusable-component/Breadcrumb';
import PageHeader from '@/common/PageHeader';
import ExtendedForm from '@/components/extended-components/ExtendedForm';
import JobCategoryForm from './partials/JobCategoryForm';
import useCreateJobCategory from './hooks/useCreateJobCategory';

const AddJobCategory: React.FC = () => {
  const { formik } = useCreateJobCategory();
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb Navone="Dashboard" Navtwo="Job Category" />
      <PageHeader title="Add Job Category" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <JobCategoryForm />
      </ExtendedForm>
    </div>
  );
};

export default AddJobCategory;
