import { CustomColumnDef } from "@/components/Table";
import { IContactUs } from "../interface/IContactUs";
import ContactUsActions from "./ContactUsActions";

export const ContactUsColumns: CustomColumnDef<IContactUs>[] = [
  {
    header: "Contact Name",
    accessorKey: "contactName",
  },
  {
    header: "Contact Email",
    accessorKey: "contactEmail",
  },
  {
    header: "Contact Number",
    accessorKey: "contactNumber",
  },
  {
    header: "Action",
    accessorKey: "action",

    cell: ({ row }) => <ContactUsActions row={row?.original} />,
  },
];
