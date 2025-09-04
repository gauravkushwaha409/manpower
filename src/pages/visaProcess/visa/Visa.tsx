import React from 'react';
import Table from '@/components/Table';
import { VisaColumns } from './partials/VisaColumns';
import { visaTableData } from '@/data/visa';
import PageHeader from '@/common/PageHeader';
import Breadcrumb from '@/components/reusable-component/Breadcrumb';
import VisaFilterList from './partials/VisaFilterList';
import { PATH } from '@/constant/path';

const Visa: React.FC = () => {
  return (
    <div className="bg-surface w-full min-h-full">
      <Breadcrumb Navone="Dashboard" Navtwo="Visa" />
      <div>
        <div className="w-full h-fit">
          <PageHeader title="Visa" routePath={PATH.visa.addVisa} />
        </div>
        <div className="py-5">
          <VisaFilterList />
        </div>
        <div className="overflow-x-visible">
          <Table columns={VisaColumns} data={visaTableData} />
        </div>
      </div>
    </div>
  );
};

export default Visa;
