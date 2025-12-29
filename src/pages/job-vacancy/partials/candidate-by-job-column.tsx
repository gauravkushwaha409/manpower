import { ColumnDef } from "@tanstack/react-table";
import { ICandidateListItemByJob } from "../hooks/use-candidate-by-job";

export const CandidateByJobColumn =
  (): ColumnDef<ICandidateListItemByJob>[] => {
    return [
      {
        header: "SN",
        accessorKey: "sn",
        cell: ({ row }) => row.index + 1,
        size: 100,
      },
      {
        header: "Candidate Name",
        cell: ({ row }) => (
          <span>
            {row?.original?.first_name + " " + row?.original?.last_name}
          </span>
        ),
        size: 400,
      },

      {
        header: "Phone Number",
        accessorKey: "phone_no",
        size: 200,
      },
      {
        header: "Address",
        accessorKey: "address",
        size: 300,
      },
      {
        header: "Passport Number",
        accessorKey: "passport_no",
        size: 300,
      },
      {
        header: "Employer Name",
        accessorKey: "company_name",
        size: 200,
      },
    ];
  };
