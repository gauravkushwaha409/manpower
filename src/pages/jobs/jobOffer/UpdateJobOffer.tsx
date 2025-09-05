import React from 'react';
import Breadcrumb from '@/components/reusable-component/Breadcrumb';
import PageHeader from '@/common/PageHeader';
import ExtendedForm from '@/components/extended-components/ExtendedForm';
import JobOfferForm from './partials/JobOfferForm';
import useUpdateJobOffer from './hooks/useUpdateJobOffer';

const UpdateJobOffer: React.FC = () => {
  const { formik } = useUpdateJobOffer();
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb Navone="Dashboard" Navtwo="Job Category" />
      <PageHeader title="Update Job Category" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <JobOfferForm />
      </ExtendedForm>
    </div>
  );
};

export default UpdateJobOffer;
