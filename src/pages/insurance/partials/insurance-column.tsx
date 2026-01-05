import TableAction from "@/components/TableAction";
import { ColumnDef } from "@tanstack/react-table";
import { useDelete } from "@/hooks/useDelete";
import { useUpdateModal } from "@/hooks/use-update-modal";
import { Checkbox } from "@/components/ui/checkbox";
import { File } from "lucide-react";
import { IInsuranceListItem } from "../hooks/use-insurance-list";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";

export const insuranceData: IInsuranceListItem[] = [
  {
    id: "1",
    candidate_name: "Arjun Singh",
    insurance_company: "NIC Asia Insurance",
    policy_no: "POL-001",
    valid_from: "2024-01-01",
    valid_to: "2025-01-01",
    document: "https://example.com/doc1.pdf",
  },
  {
    id: "2",
    candidate_name: "Ramesh Sharma",
    insurance_company: "Nepal Insurance",
    policy_no: "POL-002",
    valid_from: "2024-02-01",
    valid_to: "2025-02-01",
    document: "https://example.com/doc2.pdf",
  },
];

const InsuranceColumns = (): ColumnDef<IInsuranceListItem>[] => {
  const deleteInsurance = useDelete({
    endpoints: endpoints.insurance.delete,
    invalidates: [apiTags.insurance.list],
  });
  const updateInsurance = useUpdateModal();

  return [
    {
      id: "select",
      header: ({ table }) => (
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
      ),
      cell: ({ row }) => (
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
      ),
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
      size: 300,
    },
    {
      header: "Insurance Company",
      accessorKey: "insurance_company",
      size: 300,
    },
    {
      header: "Policy No",
      accessorKey: "policy_no",
      size: 200,
    },
    {
      header: "Valid From",
      accessorKey: "valid_from",
      size: 200,
    },
    {
      header: "Valid To",
      accessorKey: "valid_to",
      size: 200,
    },
    {
      header: "Document",
      cell: ({ row }) => (
        <File
          className="cursor-pointer"
          onClick={() => {
            window.open(row.original.document, "_blank");
          }}
        />
      ),
      size: 150,
    },
    {
      header: "Action",
      cell: ({ row }) => (
        <TableAction
          edit={{
            active: true,
            onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              updateInsurance.handleOpenModal(row.original.id);
            },
          }}
          del={{
            active: true,
            onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              deleteInsurance.handleOpenModal(row.original.id);
            },
          }}
        />
      ),
      size: 200,
      maxSize: 200,
    },
  ];
};

export default InsuranceColumns;
