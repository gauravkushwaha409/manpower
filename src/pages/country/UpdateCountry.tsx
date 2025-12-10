import React from 'react';
import CountryForm from './partials/CountryForm';
import ExtendedForm from '@/components/extended-components/ExtendedForm';
import useUpdateCountry from './hooks/useUpdateCountry';
import Breadcrumb from '@/components/reusable-component/Breadcrumb';
import PageHeader from '@/common/PageHeader';
import { PATH } from '@/constant/path';

const UpdateCountry: React.FC = () => {
  const { formik } = useUpdateCountry();
  return (
    <div className="flex flex-col gap-4">
       <Breadcrumb
        items={[
          { label: "Dashboard" },
          {
            label: "Country",
            to: PATH.dashboard.country,
          },
          {
            label: "Update Country",
          },
        ]}
      />
      <PageHeader title="Update Country" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <CountryForm />
      </ExtendedForm>
    </div>
  );
};

export default UpdateCountry;
