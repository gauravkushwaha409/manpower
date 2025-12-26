import { ColumnDef } from "@tanstack/react-table";
import { useDelete } from "@/hooks/useDelete";
import { useUpdateModal } from "@/hooks/update-modal";
import { Checkbox } from "@/components/ui/checkbox";
import TableAction from "@/components/TableAction";
import { ICountryListItem } from "../hooks/use-country-list";

export const countryData: ICountryListItem[] = [
  {
    id: "1",
    country: "Nepal",
    capital: "Kathmandu",
    currency: "Nepalese Rupee (NPR)",
    language: "Nepali",
  },
  {
    id: "2",
    country: "United Arab Emirates",
    capital: "Abu Dhabi",
    currency: "UAE Dirham (AED)",
    language: "Arabic",
  },
  {
    id: "3",
    country: "Saudi Arabia",
    capital: "Riyadh",
    currency: "Saudi Riyal (SAR)",
    language: "Arabic",
  },
  {
    id: "4",
    country: "Qatar",
    capital: "Doha",
    currency: "Qatari Riyal (QAR)",
    language: "Arabic",
  },
  {
    id: "5",
    country: "Kuwait",
    capital: "Kuwait City",
    currency: "Kuwaiti Dinar (KWD)",
    language: "Arabic",
  },
  {
    id: "6",
    country: "Bahrain",
    capital: "Manama",
    currency: "Bahraini Dinar (BHD)",
    language: "Arabic",
  },
  {
    id: "7",
    country: "Oman",
    capital: "Muscat",
    currency: "Omani Rial (OMR)",
    language: "Arabic",
  },
  {
    id: "8",
    country: "Malaysia",
    capital: "Kuala Lumpur",
    currency: "Malaysian Ringgit (MYR)",
    language: "Malay",
  },
  {
    id: "9",
    country: "Singapore",
    capital: "Singapore",
    currency: "Singapore Dollar (SGD)",
    language: "English",
  },
  {
    id: "10",
    country: "South Korea",
    capital: "Seoul",
    currency: "South Korean Won (KRW)",
    language: "Korean",
  },
];

const CountryColumns = (): ColumnDef<ICountryListItem>[] => {
  const { handleOpenModal: handleOpenDeleteModal } = useDelete({});
  const { handleOpenModal: handleOpenUpdateModal } = useUpdateModal();
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
      header: "S.N.",
      cell: ({ row }) => row.index + 1,
      size: 100,
    },
    {
      header: "Country",
      accessorKey: "country",
      size: 400,
    },
    {
      header: "Capital",
      accessorKey: "capital",
      size: 400,
    },
    {
      header: "Currency",
      accessorKey: "currency",
      size: 400,
    },
    {
      header: "Language",
      accessorKey: "language",
      size: 400,
    },
    {
      header: "Action",
      accessorKey: "action",
      cell: ({ row }) => (
        <TableAction
          edit={{
            active: true,
            onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              handleOpenUpdateModal(row?.original?.id);
            },
          }}
          del={{
            active: true,
            onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              handleOpenDeleteModal(row?.original?.id);
            },
          }}
        />
      ),
      size: 200,
      maxSize: 200,
    },
  ];
};

export default CountryColumns;
