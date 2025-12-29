import TableWrapper from "@/components/TableWrapper";
import Table from "@/components/Table";
import useTicketList from "../hooks/use-ticket-list";
import TicketColumns, { ticketData } from "./ticket-column";

const TicketTable = () => {
  const ticketList = useTicketList();
  return (
    <TableWrapper wrapperClassName="mt-4" isLoading={false}>
      <Table
        columns={TicketColumns()}
        data={ticketData}
        rowSelection={ticketList.rowSelection}
        setRowSelection={ticketList.setRowSelection}
      />
    </TableWrapper>
  );
};

export default TicketTable;
