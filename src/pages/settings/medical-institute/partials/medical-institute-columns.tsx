import { ColumnDef } from "@tanstack/react-table";
import { IMedicalInstituteListItem } from "../hooks/use-medical-institute-list";
import { Checkbox } from "@/components/ui/checkbox";
import TableAction from "@/components/TableAction";
import { useQueryParamState } from "@/hooks/useQueryParamState";
import QUERY_PARAMS from "@/constant/query-params";
import { useDelete } from "@/hooks/useDelete";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";

export const medicalInstituteData: IMedicalInstituteListItem[] = [
  {
    id: "1",
    name: "Nepal Medical College & Teaching Hospital",
    address: "Jorpati, Kathmandu, Nepal",
    email: "info@nmcth.edu.np",
    phone_no: "+977-1-4379876",
  },
  {
    id: "2",
    name: "Norvic International Hospital",
    address: "Thapathali, Kathmandu, Nepal",
    email: "contact@norvichospital.com",
    phone_no: "+977-1-4261201",
  },
  {
    id: "3",
    name: "Grande International Hospital",
    address: "Sinamangal, Kathmandu, Nepal",
    email: "info@grandehospital.com",
    phone_no: "+977-1-4495000",
  },
  {
    id: "4",
    name: "Manipal Teaching Hospital",
    address: "Gandaki, Pokhara, Nepal",
    email: "contact@manipal.edu.np",
    phone_no: "+977-61-530000",
  },
  {
    id: "5",
    name: "Bir Hospital",
    address: "Kathmandu, Nepal",
    email: "info@birhospital.gov.np",
    phone_no: "+977-1-4223651",
  },
  {
    id: "6",
    name: "KIST Medical College & Teaching Hospital",
    address: "Imadol, Lalitpur, Nepal",
    email: "admin@kistmed.edu.np",
    phone_no: "+977-1-5540001",
  },
];

export default function MedicalInstituteColumns(): ColumnDef<IMedicalInstituteListItem>[] {
  const updateMedicalInstitute = useQueryParamState(
    QUERY_PARAMS.setting.medicalInstitute.updateMedicalInstitute.key
  );
  const deleteMedicalInstitute = useDelete({
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
              updateMedicalInstitute.setValue(row.original.id);
            },
          }}
          del={{
            active: true,
            onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              deleteMedicalInstitute.handleOpenModal(row.original.id);
            },
          }}
        />
      ),
      size: 200,
      maxSize: 200,
    },
  ];
}
