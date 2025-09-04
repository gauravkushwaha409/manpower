import React from 'react';
import Table from '@/components/Table';
import { TicketColumns } from './partials/TicketColumns';
import { flightTableData } from '@/data/ticket';
import PageHeader from '@/common/PageHeader';
import Breadcrumb from '@/components/reusable-component/Breadcrumb';
import TicketFilterList from './partials/TicketFilterList';
import { PATH } from '@/constant/path';

const Ticket: React.FC = () => {
  return (
    <div className="bg-surface w-full min-h-full">
      <Breadcrumb Navone="Dashboard" Navtwo="Ticket" />
      <div>
        <div className="w-full h-fit">
          <PageHeader title="Ticket" routePath={PATH.visa.addTicket} />
        </div>
        <div className="py-5">
          <TicketFilterList />
        </div>
        <div className="overflow-x-visible">
          <Table columns={TicketColumns} data={flightTableData} />
        </div>
      </div>
    </div>
  );
};

export default Ticket;
