import { ColumnDef } from "@tanstack/react-table";
import { IInsuranceCompanyListItem } from "../hooks/use-insurance-company-list";
import { Checkbox } from "@/components/ui/checkbox";
import TableAction from "@/components/TableAction";
import { useQueryParamState } from "@/hooks/use-query-params-state";
import QUERY_PARAMS from "@/constant/query-params";
import { useDelete } from "@/hooks/useDelete";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";

export const insuranceCompanyData: IInsuranceCompanyListItem[] = [
  {
    id: "1",
    name: "Nepal Life Insurance Company Ltd.",
    address: "Babarmahal, Kathmandu, Nepal",
    email: "info@nepallife.com.np",
    phone_no: "+977-1-4262525",
  },
  {
    id: "2",
    name: "National Life Insurance Company Ltd.",
    address: "Lazimpat, Kathmandu, Nepal",
    email: "support@nationallife.com.np",
    phone_no: "+977-1-4422020",
  },
  {
    id: "3",
    name: "Himalayan General Insurance Ltd.",
    address: "Putalisadak, Kathmandu, Nepal",
    email: "contact@himalayangeneral.com.np",
    phone_no: "+977-1-4445555",
  },
  {
    id: "4",
    name: "Sagarmatha Insurance Company Ltd.",
    address: "Anamnagar, Kathmandu, Nepal",
    email: "service@sagarmathainsurance.com.np",
    phone_no: "+977-1-4782828",
  },
  {
    id: "5",
    name: "Premier Insurance Company (Nepal) Ltd.",
    address: "Pulchowk, Lalitpur, Nepal",
    email: "info@premierinsurance.com.np",
    phone_no: "+977-1-5534455",
  },
];

export default function InsuranceCompanyColumns(): ColumnDef<IInsuranceCompanyListItem>[] {
  const updateInsuranceCompany = useQueryParamState(
    QUERY_PARAMS.setting.insuranceComapany.updateInsuranceComapany.key
  );
  const deleteInsuranceCompany = useDelete({
    endpoints: endpoints.insuranceCompany.delete,
    invalidates: [apiTags.insuranceCompany.list],
  });
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
      header: "Name",
      accessorKey: "name",
      size: 400,
    },
    {
      header: "Address",
      accessorKey: "address",
      size: 400,
    },
    {
      header: "Email",
      accessorKey: "email",
      size: 400,
    },
    {
      header: "Phone No.",
      accessorKey: "phone_no",
      size: 400,
    },
    {
      header: "Action",
      cell: ({ row }) => (
        <TableAction
          edit={{
            active: true,
            onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              updateInsuranceCompany.setValue(row.original.id);
            },
          }}
          del={{
            active: true,
            onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              deleteInsuranceCompany.handleOpenModal(row.original.id);
            },
          }}
        />
      ),
      size: 200,
      maxSize: 200,
    },
  ];
}
