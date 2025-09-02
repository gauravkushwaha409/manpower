import React from "react";
import UserHeader from "../../common/UserHeader";
import useCountry from "@/pages/country/hooks/useCountry";
import DeleteModal from "@/components/DeleteModal";
import Table from "@/components/Table";
import useDisclosure from "@/hooks/useDisclousre";
import UpdateCountryModal from "./modal/UpdateCountry";
import AddCountryModal from "@/pages/country/modal/AddCountry";
import { CountryTableData } from "@/data/country";
import { getCountryColumns } from "./partials/CountryColumns";

const Country: React.FC = () => {
  const {
    updateCountry,
    setUpdateCountry,
    setDeleteCountry,
    handleDeleteCountry,
  } = useCountry();

  const addModal = useDisclosure();
  const deleteModal = useDisclosure();

  const columns = getCountryColumns(
    (country) => setUpdateCountry(country),
    (country) => {
      setDeleteCountry(country);
      deleteModal.open();
    }
  );

  return (
    <div className="min-h-full w-full bg-surface">
      <div className="px-5">
        <div className="w-full h-fit">
          <UserHeader
            number={120}
            title="Country"
            handleAddClick={addModal.toggle}
          />
        </div>

        <div className="overflow-x-visible">
          <Table columns={columns} data={CountryTableData} />
        </div>
      </div>

      <AddCountryModal
        isOpen={addModal.isOpen}
        handleCloseModal={addModal.close}
      />

      <UpdateCountryModal
        isOpen={!!updateCountry}
        handleCloseModal={() => setUpdateCountry(null)}
      />

      <DeleteModal
        isOpen={deleteModal.isOpen}
        onCancel={deleteModal.close}
        onConfirm={handleDeleteCountry}
      />
    </div>
  );
};

export default Country;
