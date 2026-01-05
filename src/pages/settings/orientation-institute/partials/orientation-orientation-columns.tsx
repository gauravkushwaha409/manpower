import { ColumnDef } from "@tanstack/react-table";
import { IOrientationInstituteListItem } from "../hooks/use-orientation-institute-list";
import { Checkbox } from "@/components/ui/checkbox";
import TableAction from "@/components/TableAction";
import { useQueryParamState } from "@/hooks/useQueryParamState";
import QUERY_PARAMS from "@/constant/query-params";
import { useDelete } from "@/hooks/useDelete";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";

export const orientationInstituteData: IOrientationInstituteListItem[] = [
  {
    id: "1",
    name: "Global Employment Orientation Center",
    address: "Putalisadak, Kathmandu, Nepal",
    email: "info@geoc.com.np",
    phone_no: "+977-1-4441234",
  },
  {
    id: "2",
    name: "Nepal Skills Development Institute",
    address: "New Baneshwor, Kathmandu, Nepal",
    email: "contact@nsdi.edu.np",
    phone_no: "+977-1-4785678",
  },
  {
    id: "3",
    name: "Himalayan Career Guidance Center",
    address: "Pulchowk, Lalitpur, Nepal",
    email: "support@himalayancareer.com",
    phone_no: "+977-1-5554321",
  },
  {
    id: "4",
    name: "Asia Pacific Orientation Institute",
    address: "Maitighar, Kathmandu, Nepal",
    email: "info@apoi.com.np",
    phone_no: "+977-1-4432100",
  },
  {
    id: "5",
    name: "Future Skills Training Center",
    address: "Jawalakhel, Lalitpur, Nepal",
    email: "contact@future-skills.com",
    phone_no: "+977-1-5523456",
  },
  {
    id: "6",
    name: "National Employment Orientation Hub",
    address: "New Road, Kathmandu, Nepal",
    email: "admin@neohub.com.np",
    phone_no: "+977-1-4229988",
  },
];

export default function OrientationInstituteColumns(): ColumnDef<IOrientationInstituteListItem>[] {
  const updateOrientationInstitute = useQueryParamState(
    QUERY_PARAMS.setting.OrientationInstitute.updateOrientationInstitute.key
  );
  const deleteOrientationInstitute = useDelete({
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
              updateOrientationInstitute.setValue(row.original.id);
            },
          }}
          del={{
            active: true,
            onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              deleteOrientationInstitute.handleOpenModal(row.original.id);
            },
          }}
        />
      ),
      size: 200,
      maxSize: 200,
    },
  ];
}
