import TableAction from "@/components/TableAction";
import { ColumnDef } from "@tanstack/react-table";
import { useDelete } from "@/hooks/useDelete";
import { useUpdateModal } from "@/hooks/update-modal";
import { Checkbox } from "@/components/ui/checkbox";
import { IVisaListItem } from "../hooks/use-visa-list";

export const visaData: IVisaListItem[] = [
  {
    id: "1",
    candidate: "Arjun Singh",
  },
  {
    id: "2",
    candidate: "Ramesh Sharma",
  },
  {
    id: "3",
    candidate: "Sita Thapa",
  },
  {
    id: "4",
    candidate: "Anil Gurung",
  },
  {
    id: "5",
    candidate: "Maya Rai",
  },
  {
    id: "6",
    candidate: "Binod Khanal",
  },
  {
    id: "7",
    candidate: "Sushma Magar",
  },
  {
    id: "8",
    candidate: "Rajesh Basnet",
  },
  {
    id: "9",
    candidate: "Priya Adhikari",
  },
  {
    id: "10",
    candidate: "Kiran Shrestha",
  },
];

const VisaColumns = (): ColumnDef<IVisaListItem>[] => {
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
      accessorKey: "candidate",
      size: 400,
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

export default VisaColumns;
