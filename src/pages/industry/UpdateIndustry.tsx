import React from 'react';
import ExtendedForm from '@/components/extended-components/ExtendedForm';
import useUpdateCountry from './hooks/useUpdateIndustry';
import Breadcrumb from '@/components/reusable-component/Breadcrumb';
import PageHeader from '@/common/PageHeader';
import IndustryForm from './partials/IndustryForm';

const UpdateIndustry: React.FC = () => {
  const { formik } = useUpdateCountry();
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb Navone="Dashboard" Navtwo="Industry" />
      <PageHeader title="Update Industry" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <IndustryForm />
      </ExtendedForm>
    </div>
  );
};

export default UpdateIndustry;
