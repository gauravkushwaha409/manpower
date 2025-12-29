import TableAction from "@/components/TableAction";
import { ColumnDef } from "@tanstack/react-table";
import { useDelete } from "@/hooks/useDelete";
import { useUpdateModal } from "@/hooks/update-modal";
import { Checkbox } from "@/components/ui/checkbox";
import { ITicketListItem } from "../hooks/use-ticket-list";
import { File } from "lucide-react";

export const ticketData: ITicketListItem[] = [
  {
    id: "1",
    candidate_name: "Ramesh Kumar",
    airline_name: "Qatar Airways",
    flight_no: "QR-652",
    depature_date: "2024-03-05",
    ticket_file: "ticket_ramesh_kumar.pdf",
  },
  {
    id: "2",
    candidate_name: "Sita Sharma",
    airline_name: "Emirates",
    flight_no: "EK-215",
    depature_date: "2024-03-08",
    ticket_file: "ticket_sita_sharma.pdf",
  },
  {
    id: "3",
    candidate_name: "Amit Singh",
    airline_name: "Etihad Airways",
    flight_no: "EY-401",
    depature_date: "2024-03-10",
    ticket_file: "ticket_amit_singh.pdf",
  },
  {
    id: "4",
    candidate_name: "Priya Verma",
    airline_name: "Turkish Airlines",
    flight_no: "TK-726",
    depature_date: "2024-03-12",
    ticket_file: "ticket_priya_verma.pdf",
  },
  {
    id: "5",
    candidate_name: "Rahul Das",
    airline_name: "Flydubai",
    flight_no: "FZ-577",
    depature_date: "2024-03-15",
    ticket_file: "ticket_rahul_das.pdf",
  },
];

const TicketColumns = (): ColumnDef<ITicketListItem>[] => {
  const { handleOpenModal: handleOpenDeleteModal } = useDelete({});
  const { handleOpenModal: handleOpenUpdateModal } = useUpdateModal();
  return [
    {
      id: "select",
      header: ({ table }) => {
        return (
          <div className="">
            <Checkbox
              checked={
                table.getIsAllRowsSelected()
                  ? true
                  : table.getIsSomeRowsSelected()
                  ? "indeterminate"
                  : false
              }
              onCheckedChange={(value) => {
                table.toggleAllRowsSelected(!!value);
              }}
            />
          </div>
        );
      },
      cell: ({ row }) => {
        return (
          <div className="">
            <Checkbox
              checked={
                row.getIsSelected()
                  ? true
                  : row.getIsSomeSelected()
                  ? "indeterminate"
                  : false
              }
              onCheckedChange={row.getToggleSelectedHandler()}
            />
          </div>
        );
      },
      size: 50,
    },
    {
      header: "S.N.",
      cell: ({ row }) => row.index + 1,
      size: 100,
    },
    {
      header: "Candidate Name",
      accessorKey: "candidate_name",
      size: 400,
    },
    {
      header: "Airline Name",
      accessorKey: "airline_name",
      size: 400,
    },
    {
      header: "Flight No.",
      accessorKey: "flight_no",
      size: 400,
    },
    {
      header: "Departure Date",
      accessorKey: "depature_date",
      size: 200,
    },
    {
      header: "Ticket File",
      cell: () => (
        <File
          className="cursor-pointer"
          onClick={() => {
            window.open(
              "https://www.shutterstock.com/shutterstock/photos/1798653109/display_1500/stock-vector-boarding-pass-airline-ticket-template-with-sample-text-and-qr-code-air-travel-concept-for-travel-1798653109.jpg",
              "_blank"
            );
          }}
        />
      ),
      size: 200,
    },
    {
      header: "Action",
      accessorKey: "action",
      cell: ({ row }) => (
        <TableAction
          edit={{
            active: true,
            onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              handleOpenUpdateModal(row?.original?.id);
            },
          }}
          del={{
            active: true,
            onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              handleOpenDeleteModal(row?.original?.id);
            },
          }}
        />
      ),
      size: 200,
      maxSize: 200,
    },
  ];
};

export default TicketColumns;
