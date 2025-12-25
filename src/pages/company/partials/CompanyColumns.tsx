import { ColumnDef } from "@tanstack/react-table";
import { ICompany } from "../interface/ICompany";
import TableAction from "@/components/TableAction";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";
import { PATH } from "@/constant/path";

const CompanyColumns = (): ColumnDef<ICompany>[] => {
  const navigate = useNavigate();

  const handleUpdateClick = (id: string) => {
    navigate(PATH.company.update.replace(":id", id));
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
      header: "Recruitment Company",
      accessorKey: "recruitment_company",
      size: 400,
    },
    {
      header: "Licence Number",
      accessorKey: "license_number",
      size: 400,
    },
    {
      header: "Country",
      accessorKey: "country",
      size: 200,
    },
    {
      header: "Contact Number",
      accessorKey: "contact_number",
      size: 200,
    },
    {
      header: "Email",
      accessorKey: "email",
      size: 400,
    },
    {
      header: "Office Address",
      accessorKey: "office_address",
      size: 400,
    },
    {
      header: "Action",
      accessorKey: "action",
      size: 200,
      cell: ({ row }) => (
        <TableAction
          view={{ active: true }}
          edit={{
            active: true,
            onClick: (e) => {
              e.preventDefault();
              handleUpdateClick(row?.original?.id);
            },
          }}
          del={{ active: true }}
        />
      ),
    },
  ];
};

export default CompanyColumns;
