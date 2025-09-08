import { CustomColumnDef } from "@/components/Table";
import { ICompany } from "../interface/ICompany";
import CompanyActions from "./CompanyActions";

export const CompanyColumns: CustomColumnDef<ICompany>[] = [
  {
    header: "Recruitment Company",
    accessorKey: "recruitment_company",
  },
  {
    header: "Licence Number",
    accessorKey: "license_number",
  },
  {
    header: "Country",
    accessorKey: "country",
  },
  {
    header: "Contact Number",
    accessorKey: "contact_number",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Office Address",
    accessorKey: "office_address",
  },
  {
    header: "Action",
    accessorKey: "action",

    cell: ({ row }) => <CompanyActions row={row?.original} />,
  },
];
