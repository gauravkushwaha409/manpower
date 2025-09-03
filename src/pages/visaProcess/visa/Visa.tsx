import React from 'react';
import Table from '@/components/Table';
import useDisclosure from '@/hooks/useDisclousre';
import { VisaColumns } from './partials/VisaColumns';
import { visaTableData } from '@/data/visa';
import AddVisa from './partials/AddVisa';
import PageHeader from '@/common/PageHeader';

const Visa: React.FC = () => {
  const addModal = useDisclosure();

  return (
    <div className="bg-surface w-full min-h-full">
      <div className="px-5">
        <div className="w-full h-fit">
          <PageHeader
            title="Visa"
            handleAddClick={addModal?.toggle}
            routePath="/"
          />
        </div>

        <div className="overflow-x-visible">
          <Table columns={VisaColumns} data={visaTableData} />
        </div>
      </div>

      <AddVisa isOpen={addModal?.isOpen} handleCloseModal={addModal?.close} />
    </div>
  );
};

export default Visa;
