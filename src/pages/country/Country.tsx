import React from "react";
import UserHeader from "../../common/UserHeader";
import Table from "@/components/Table";
import useDisclosure from "@/hooks/useDisclousre";
import AddCountry from "@/pages/country/partials/AddCountry";
import { CountryTableData } from "@/data/country";
import { CountryColumns } from "./partials/CountryColumns";
// import useGetCountry from "./hooks/useGetCountry";

const Country: React.FC = () => {
  const addModal = useDisclosure();

  // const { data } = useGetCountry();s

  return (
    <div className="min-h-full w-full bg-surface">
      <div className="px-5">
        <div className="w-full h-fit">
          <UserHeader
            number={120}
            title="Country"
            handleAddClick={addModal?.toggle}
          />
        </div>

        <div className="overflow-x-visible">
          <Table columns={CountryColumns} data={CountryTableData} />
        </div>
      </div>

      <AddCountry
        isOpen={addModal?.isOpen}
        handleCloseModal={addModal?.close}
      />
    </div>
  );
};

export default Country;
