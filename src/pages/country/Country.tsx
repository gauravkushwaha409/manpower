import React from 'react';

import Table from '@/components/Table';
import useDisclosure from '@/hooks/useDisclousre';
import AddCountry from '@/pages/country/partials/AddCountry';
import { CountryTableData } from '@/data/country';
import { CountryColumns } from './partials/CountryColumns';
import UserHeader from '@/common/userHeader';
// import useGetCountry from "./hooks/useGetCountry";

const Country: React.FC = () => {
  const addModal = useDisclosure();

  // const { data } = useGetCountry();s

  return (
    <div className="bg-surface w-full min-h-full">
      <div className="px-5">
        <div className="w-full h-fit">
          <UserHeader
            title="Country"
            handleAddClick={addModal?.toggle}
            routePath="/"
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
