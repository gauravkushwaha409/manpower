import React from 'react';
import Breadcrumb from '@/components/reusable-component/Breadcrumb';
import PageHeader from '@/common/PageHeader';
import ExtendedForm from '@/components/extended-components/ExtendedForm';
import JobOfferForm from './partials/JobOfferForm';
import useCreateJobOffer from './hooks/useCreateJobOffer';

const AddJobOffer: React.FC = () => {
  const { formik } = useCreateJobOffer();
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb Navone="Dashboard" Navtwo="Job Offer" />
      <PageHeader title="Add Job Offer" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <JobOfferForm />
      </ExtendedForm>
    </div>
  );
};

export default AddJobOffer;
