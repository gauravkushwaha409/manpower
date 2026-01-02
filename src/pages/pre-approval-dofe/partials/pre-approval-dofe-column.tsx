import TableAction from "@/components/TableAction";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";
import { PATH } from "@/constant/path";
import React from "react";
import { useDelete } from "@/hooks/useDelete";
import { IPreApprovalDofeListItem } from "../hooks/use-pre-approval-dofe-list";

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
      accessorKey: "country",
      size: 200,
    },
    {
      header: "Company",
      accessorKey: "company",
      size: 400,
    },
    {
      header: "Pre Approval Date",
      accessorKey: "pre_approval_date",
      size: 200,
    },
    {
      header: "LT Number",
      accessorKey: "lt_number",
      size: 200,
    },
    {
      header: "Chalani Number",
      accessorKey: "chalani_number",
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

export const PreApprovalDofeTableData: IPreApprovalDofeListItem[] = [
  {
    id: "1",
    country: "Qatar",
    company: "Al Jazeera Manpower Services",
    pre_approval_date: "2024-01-15",
    lt_number: "LT-2024-001",
    chalani_number: "CH-78901",
  },
  {
    id: "2",
    country: "United Arab Emirates",
    company: "Gulf Overseas Recruitment",
    pre_approval_date: "2024-02-03",
    lt_number: "LT-2024-014",
    chalani_number: "CH-78914",
  },
  {
    id: "3",
    country: "Saudi Arabia",
    company: "Riyadh International Services",
    pre_approval_date: "2024-02-18",
    lt_number: "LT-2024-027",
    chalani_number: "CH-78927",
  },
  {
    id: "4",
    country: "Malaysia",
    company: "Asia Pacific Workforce Ltd.",
    pre_approval_date: "2024-03-01",
    lt_number: "LT-2024-039",
    chalani_number: "CH-78939",
  },
  {
    id: "5",
    country: "Kuwait",
    company: "Desert Star Employment Co.",
    pre_approval_date: "2024-03-12",
    lt_number: "LT-2024-052",
    chalani_number: "CH-78952",
  },
  {
    id: "6",
    country: "Japan",
    company: "Nippon Technical Services",
    pre_approval_date: "2024-03-25",
    lt_number: "LT-2024-068",
    chalani_number: "CH-78968",
  },
  {
    id: "7",
    country: "South Korea",
    company: "Korea Global HR",
    pre_approval_date: "2024-04-06",
    lt_number: "LT-2024-081",
    chalani_number: "CH-78981",
  },
  {
    id: "8",
    country: "Oman",
    company: "Muscat Overseas Solutions",
    pre_approval_date: "2024-04-19",
    lt_number: "LT-2024-095",
    chalani_number: "CH-78995",
  },
];

export default PreApprovalDofeColumns;
