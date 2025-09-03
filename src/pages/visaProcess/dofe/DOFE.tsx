import React from 'react';
import Table from '@/components/Table';
import useDisclosure from '@/hooks/useDisclousre';
import AddDOFE from './partials/AddDOFE';
import { dofeTableData } from '@/data/dofe';
import { DOFEColumns } from './partials/DOFEColumns';
import PageHeader from '@/common/PageHeader';

const Dofe: React.FC = () => {
  const addModal = useDisclosure();

  return (
    <div className="bg-surface w-full min-h-full">
      <div className="px-5">
        <div className="w-full h-fit">
          <PageHeader
            title="DOFE (Department of Foreign Employment)"
            handleAddClick={addModal?.toggle}
            routePath="/"
          />
        </div>

        <div className="overflow-x-visible">
          <Table columns={DOFEColumns} data={dofeTableData} />
        </div>
      </div>

      <AddDOFE isOpen={addModal?.isOpen} handleCloseModal={addModal?.close} />
    </div>
  );
};

export default Dofe;
