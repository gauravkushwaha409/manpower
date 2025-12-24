import TableAction from "@/components/TableAction";
import { IPreApprovalDofeListItem } from "../interface/IPreApprovalDofe";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";
import { PATH } from "@/constant/path";
import React from "react";
import { useDelete } from "@/hooks/useDelete";

const PreApprovalDofeColumns = (): ColumnDef<IPreApprovalDofeListItem>[] => {
  const navigate = useNavigate();
  const { handleOpenModal } = useDelete({});
  const handleUpdateClick = (id: string) => {
    navigate(PATH.preApprovalDofe.update.replace(":id", id));
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
      size: 50,
    },
    {
      header: "Country",
      accessorKey: "company.companyAddress.country",
      size: 200,
    },
    {
      header: "Company",
      accessorKey: "company.recruitment_company",
      size: 400,
    },
    {
      header: "Pre Approval Date",
      accessorKey: "preApprovalDate",
      size: 200,
    },
    {
      header: "LT Number",
      accessorKey: "ltNumber",
      size: 200,
    },
    {
      header: "Chalani Number",
      accessorKey: "chalanNumber",
      size: 200,
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
      size: 200,
    },
  ];
};

export default PreApprovalDofeColumns;
