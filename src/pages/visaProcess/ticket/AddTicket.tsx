import React from 'react';
import ExtendedForm from '@/components/extended-components/ExtendedForm';
import TicketForm from './partials/TicketForm';
import useCreateTicket from './hooks/useCreateTicket';
import Breadcrumb from '@/components/reusable-component/Breadcrumb';
import PageHeader from '@/common/PageHeader';

const AddTicket: React.FC = () => {
  const { formik } = useCreateTicket();
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb Navone="Dashboard" Navtwo="Ticket" />
      <PageHeader title="Add Ticket" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <TicketForm />
      </ExtendedForm>
    </div>
  );
};

export default AddTicket;
