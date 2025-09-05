import React from 'react';
import Table from '@/components/Table';
import { OrientationColumns } from './partials/OrientationColumns';
import { orientationTableData } from '@/data/orientation';
import PageHeader from '@/common/PageHeader';
import Breadcrumb from '@/components/reusable-component/Breadcrumb';
import OrientationFilterList from './partials/OrientationFilterList';
import { PATH } from '@/constant/path';

const Orientation: React.FC = () => {
  return (
    <div className="bg-surface w-full min-h-full">
      <Breadcrumb Navone="Dashboard" Navtwo="Orientation" />
      <div>
        <div className="w-full h-fit">
          <PageHeader
            title="Orientation"
            routePath={PATH.visa.addOrientation}
          />
        </div>
        <div className="py-5">
          <OrientationFilterList />
        </div>
        <div className="overflow-x-visible">
          <Table columns={OrientationColumns} data={orientationTableData} />
        </div>
      </div>
    </div>
  );
};

export default Orientation;
