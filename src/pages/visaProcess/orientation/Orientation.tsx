import React from 'react';
import Table from '@/components/Table';
import useDisclosure from '@/hooks/useDisclousre';
import AddOrientation from './partials/AddOrientation';
import { OrientationColumns } from './partials/OrientationColumns';
import { orientationTableData } from '@/data/orientation';
import UserHeader from '@/common/userHeader';

const Orientation: React.FC = () => {
  const addModal = useDisclosure();

  return (
    <div className="bg-surface w-full min-h-full">
      <div className="px-5">
        <div className="w-full h-fit">
          <UserHeader
            title="Orientation"
            handleAddClick={addModal?.toggle}
            routePath="/"
          />
        </div>

        <div className="overflow-x-visible">
          <Table columns={OrientationColumns} data={orientationTableData} />
        </div>
      </div>

      <AddOrientation
        isOpen={addModal?.isOpen}
        handleCloseModal={addModal?.close}
      />
    </div>
  );
};

export default Orientation;
