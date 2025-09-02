import React from "react";
import UserHeader from "../../common/UserHeader";
import { DeleteIcon, EditIcon } from "../../components/actions/TableComp";
import { ICountry } from "@/pages/country/interface/ICountry.ts";
import useCountry from "@/pages/country/hooks/useCountry.ts";
import useCreateCountry from "@/pages/country/hooks/useCreateCountry.ts";
import AddCountry from "@/pages/country/modal/AddCountry.tsx";
import UpdateCountryModal from "@/pages/country/modal/UpdateCountry.tsx";
import useUpdateCountry from "@/pages/country/hooks/useUpdateCountry.ts";
import DeleteModal from "@/components/DeleteModal.tsx";
import Table, { CustomColumnDef } from "@/components/Table";
import { CountryTableData } from "@/data/country";
import useDisclosure from "@/hooks/useDisclousre";

const Country: React.FC = () => {
  const {
    addCountry,
    updateCountry,
    setUpdateCountry,
    deleteCountry,
    setDeleteCountry,
    handleOpenAddModal,
    handleCloseAddModal,
    handleCloseUpdateModal,
    handleCloseDeleteModal,
    handleDeleteCountry,
  } = useCountry();

  const countryModal= useDisclosure();
  

  const { addCountryFormik } = useCreateCountry();
  const { updateCountryFormik } = useUpdateCountry();

  const tableHead: CustomColumnDef<ICountry>[] = [
    {
      header: "Country",
      accessorKey: "country",
      search: false,
    },
    {
      header: "Flag",
      accessorKey: "flag",
      search: false,
      cell: (cell) => (
        <div className="flex items-center">
          <img
            src={
              typeof cell.row.original.flag === "string"
                ? cell.row.original.flag
                : ""
            }
            alt=""
            className="w-8 mx-auto"
          />
        </div>
      ),
    },
    {
      header: "Currency",
      accessorKey: "currency",
      search: false,
    },
    {
      header: "Capital",
      accessorKey: "capital",
      search: false,
    },
    {
      header: "Language",
      accessorKey: "language",
      search: false,
    },
    {
      header: "Action",
      accessorKey: "action",
      search: false,
      cell: ({ row }) => (
        <div className="flex items-center gap-4 ml-5">
          <button
            onClick={() => {
              setUpdateCountry(row?.original?.id);
            }}
          >
            <EditIcon />
          </button>

          <button
            onClick={() => {
              setDeleteCountry(row?.original?.id);
            }}
          >
            <DeleteIcon />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-full w-full bg-surface">
      <div className="px-5">
        {/* Header */}
        <div className="w-full h-fit">
          <UserHeader
            number={120}
            title="Country"
            handleAddClick={countryModal?.toggle}
          />
        </div> 

        {/* Table */}
        <div className="overflow-x-visible">
          <Table columns={tableHead} data={CountryTableData} />
        </div>
      </div>

      <AddCountry
        isOpen={countryModal?.isOpen}
        handleCloseModal={countryModal?.close}
      />
      <UpdateCountryModal
        handleCloseModal={countryModal?.close}
        isOpen={!!updateCountry}
      />
      <DeleteModal
        isOpen={countryModal?.isOpen}
        onCancel={countryModal?.close}
        onConfirm={handleDeleteCountry}
      />
    </div>
  );
};

export default Country;
