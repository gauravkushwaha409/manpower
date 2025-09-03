import React from 'react';
import Table from '@/components/Table';
import useDisclosure from '@/hooks/useDisclousre';
import { TicketColumns } from './partials/TicketColumns';
import AddTicket from './partials/AddTicket';
import { flightTableData } from '@/data/ticket';
import UserHeader from '@/common/userHeader';

const Ticket: React.FC = () => {
  const addModal = useDisclosure();

  return (
    <div className="bg-surface w-full min-h-full">
      <div className="px-5">
        <div className="w-full h-fit">
          <UserHeader title="Ticket" routePath="/" />
        </div>

        <div className="overflow-x-visible">
          <Table columns={TicketColumns} data={flightTableData} />
        </div>
      </div>

      <AddTicket isOpen={addModal?.isOpen} handleCloseModal={addModal?.close} />
    </div>
  );
};

export default Ticket;
