import { CustomColumnDef } from "@/components/Table";
import { ISeo } from "../interface/ISeo";
import SeoActions from "./SeoActions";

export const SeoColumns: CustomColumnDef<ISeo>[] = [
  {
    header: "SEO Type",
    accessorKey: "seo_type",
  },
  {
    header: "Meta Title",
    accessorKey: "meta_title",
  },
  {
    header: "Meta Description",
    accessorKey: "meta_description",
  },
  {
    header: "Og Title",
    accessorKey: "og_title",  
  },
  {
    header: "Og Description",
    accessorKey: "og_description",
  },
  {
    header: "Action",
    accessorKey: "action",

    cell: ({ row }) => <SeoActions row={row?.original} />,
  },
];
