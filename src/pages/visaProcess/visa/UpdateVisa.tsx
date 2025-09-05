import React from 'react';
import ExtendedForm from '@/components/extended-components/ExtendedForm';
import VisaForm from './partials/VisaForm';
import useUpdateVisa from './hooks/useUpdateVisa';
import Breadcrumb from '@/components/reusable-component/Breadcrumb';
import PageHeader from '@/common/PageHeader';

const UpdateVisa: React.FC = () => {
  const { formik } = useUpdateVisa();
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb Navone="Dashboard" Navtwo="Visa" />
      <PageHeader title="Update Visa" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <VisaForm />
      </ExtendedForm>
    </div>
  );
};

export default UpdateVisa;
