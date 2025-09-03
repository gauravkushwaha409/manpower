import React from "react";
import UserHeader from "@/common/UserHeader";
import Table from "@/components/Table";
import useDisclosure from "@/hooks/useDisclousre";
import { TicketColumns } from "./partials/TicketColumns";
import AddTicket from "./partials/AddTicket";
import { flightTableData } from "@/data/ticket";

const Ticket: React.FC = () => {
  const addModal = useDisclosure();

  return (
    <div className="min-h-full w-full bg-surface">
      <div className="px-5">
        <div className="w-full h-fit">
          <UserHeader
            number={50}
            title="Ticket"
            handleAddClick={addModal?.toggle}
          />
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
