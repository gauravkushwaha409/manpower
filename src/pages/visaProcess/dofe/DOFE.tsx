import React from 'react';
import Table from '@/components/Table';
import { dofeTableData } from '@/data/dofe';
import { DOFEColumns } from './partials/DOFEColumns';
import PageHeader from '@/common/PageHeader';
import Breadcrumb from '@/components/reusable-component/Breadcrumb';
import DOFEFilterList from './partials/DOFEFilterList';
import { PATH } from '@/constant/path';

const Dofe: React.FC = () => {
  return (
    <div className="bg-surface w-full min-h-full">
      <Breadcrumb
        Navone="Dashboard"
        Navtwo="Department of Foreign Employment (DOFE)"
      />
      <div>
        <div className="w-full h-fit">
          <PageHeader
            title="Department of Foreign Employment (DOFE)"
            routePath={PATH.visa.addDOFE}
          />
        </div>
        <div className="py-5">
          <DOFEFilterList />
        </div>

        <div className="overflow-x-visible">
          <Table columns={DOFEColumns} data={dofeTableData} />
        </div>
      </div>
    </div>
  );
};

export default Dofe;
