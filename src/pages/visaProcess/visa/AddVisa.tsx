import React from 'react';
import ExtendedForm from '@/components/extended-components/ExtendedForm';
import useCreateVisa from './hooks/useCreateVisa';
import VisaForm from './partials/VisaForm';
import Breadcrumb from '@/components/reusable-component/Breadcrumb';
import PageHeader from '@/common/PageHeader';

const AddVisa: React.FC = () => {
  const { formik } = useCreateVisa();
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb Navone="Dashboard" Navtwo="Visa" />
      <PageHeader title="Add Visa" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <VisaForm />
      </ExtendedForm>
    </div>
  );
};

export default AddVisa;
