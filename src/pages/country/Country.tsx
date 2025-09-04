import React from 'react';
import Table from '@/components/Table';
import { CountryTableData } from '@/data/country';
import { CountryColumns } from './partials/CountryColumns';
import PageHeader from '@/common/PageHeader';
import Breadcrumb from '@/components/reusable-component/Breadcrumb';
import CountryFilterList from './partials/CountryFilterList';
import { PATH } from '@/constant/path';

const Country: React.FC = () => {
  return (
    <div className="bg-surface w-full min-h-full">
      <Breadcrumb Navone="Dashboard" Navtwo="Country" />
      <div>
        <div className="w-full h-fit">
          <PageHeader title="Country" routePath={PATH.dashboard.addCountry} />
        </div>
        <div className="py-5">
          <CountryFilterList />
        </div>
        <div className="overflow-x-visible">
          <Table columns={CountryColumns} data={CountryTableData} />
        </div>
      </div>
    </div>
  );
};

export default Country;
