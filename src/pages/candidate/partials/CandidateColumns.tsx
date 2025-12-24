import TableAction from "@/components/TableAction";
import { CandidateTable } from "../interface/ICandidate";
import { ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";
import { useDelete } from "@/hooks/useDelete";
import { PATH } from "@/constant/path";
import { Checkbox } from "@/components/ui/checkbox";

export const CandidateColumns = (): ColumnDef<CandidateTable>[] => {
  const navigate = useNavigate();
  const { handleOpenModal } = useDelete({});
  const handleUpdateClick = (id: string) => {
    navigate(PATH.candidate.update.replace(":id", id));
  };
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
      header: "SN",
      accessorKey: "sn",
      cell: ({ row }) => row.index + 1,
    },
    {
      header: "Candidate Name",
      accessorKey: "firstname",
    },
    {
      header: "Agent Name",
      accessorKey: "agentName",
    },
    {
      header: "Phone Number",
      accessorKey: "phone",
    },
    {
      header: "Address",
      accessorKey: "district",
    },
    {
      header: "Passport Number",
      accessorKey: "passport_number",
    },
    {
      header: "Action",
      accessorKey: "action",
      cell: ({ row }) => (
        <TableAction
          del={{
            active: true,
            onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
              e.preventDefault();
              handleOpenModal(row?.original?.id);
            },
          }}
          edit={{
            active: true,
            onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              handleUpdateClick(row?.original?.id);
            },
          }}
          view={{ active: true }}
        />
      ),
    },
  ];
};
