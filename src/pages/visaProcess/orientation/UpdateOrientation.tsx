import React from 'react';
import ExtendedForm from '@/components/extended-components/ExtendedForm';
import useUpdateOrientation from './hooks/useUpdateOrientation';
import Breadcrumb from '@/components/reusable-component/Breadcrumb';
import PageHeader from '@/common/PageHeader';
import OrientationForm from './partials/OrientationForm';

const UpdateOrientation: React.FC = () => {
  const { formik } = useUpdateOrientation();
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb Navone="Dashboard" Navtwo="Orientation" />
      <PageHeader title="Update Orientation" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <OrientationForm />
      </ExtendedForm>
    </div>
  );
};

export default UpdateOrientation;
