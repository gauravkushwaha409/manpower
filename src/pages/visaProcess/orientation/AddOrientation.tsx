import React from 'react';
import ExtendedForm from '@/components/extended-components/ExtendedForm';
import OrientationForm from './partials/OrientationForm';
import useCreateOrientation from './hooks/useCreateOrientation';
import Breadcrumb from '@/components/reusable-component/Breadcrumb';
import PageHeader from '@/common/PageHeader';

const AddOrientation: React.FC = () => {
  const { formik } = useCreateOrientation();
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb Navone="Dashboard" Navtwo="Orientation" />
      <PageHeader title="Add Orientation" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <OrientationForm />
      </ExtendedForm>
    </div>
  );
};

export default AddOrientation;
