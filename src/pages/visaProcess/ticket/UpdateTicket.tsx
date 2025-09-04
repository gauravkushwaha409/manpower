import React from 'react';
import ExtendedForm from '@/components/extended-components/ExtendedForm';
import VisaForm from './partials/TicketForm';
import useUpdateVisa from './hooks/useUpdateTicket';
import Breadcrumb from '@/components/reusable-component/Breadcrumb';
import PageHeader from '@/common/PageHeader';

const UpdateTicket: React.FC = () => {
  const { formik } = useUpdateVisa();
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb Navone="Dashboard" Navtwo="Ticket" />
      <PageHeader title="Update Ticket" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <VisaForm />
      </ExtendedForm>
    </div>
  );
};

export default UpdateTicket;
