import { ColumnDef } from "@tanstack/react-table";
import { IDocumentListItem } from "../hooks/use-document-list";
import { useDelete } from "@/hooks/useDelete";
import { useUpdateModal } from "@/hooks/use-update-modal";
import { Checkbox } from "@/components/ui/checkbox";
import TableAction from "@/components/TableAction";

export const documentList: IDocumentListItem[] = [
  {
    id: "1",
    country: "Nepal",
    document: "Citizenship",
  },
  {
    id: "2",
    country: "Nepal",
    document: "Passport",
  },
  {
    id: "3",
    country: "Nepal",
    document: "Driving License",
  },
  {
    id: "4",
    country: "Nepal",
    document: "PAN Card",
  },
  {
    id: "5",
    country: "India",
    document: "Aadhaar Card",
  },
  {
    id: "6",
    country: "India",
    document: "Passport",
  },
  {
    id: "7",
    country: "India",
    document: "PAN Card",
  },
  {
    id: "8",
    country: "India",
    document: "Voter ID",
  },
  {
    id: "9",
    country: "United States",
    document: "Social Security Card",
  },
  {
    id: "10",
    country: "United States",
    document: "Passport",
  },
];

const DocumentColumns = (): ColumnDef<IDocumentListItem>[] => {
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
      size: 50,
    },
    {
      header: "Country",
      accessorKey: "country",
      size: 400,
    },
    {
      header: "Document",
      accessorKey: "document",
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

export default DocumentColumns;
