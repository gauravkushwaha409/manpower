import React from 'react';
import Table from '@/components/Table';
import { embassyInterviewTableData } from '@/data/embassyInterview';
import { EmbassyInterviewColumns } from './partials/EmbassyInterviewColumns';
import PageHeader from '@/common/PageHeader';
import Breadcrumb from '@/components/reusable-component/Breadcrumb';
import EmbassyInterviewFilterList from './partials/EmbassyInterviewFilterList';

const EmbassyInterview: React.FC = () => {
  return (
    <div className="bg-surface w-full min-h-full">
      <Breadcrumb Navone="Dashboard" Navtwo="Embassy Interview" />
      <div>
        <div className="w-full h-fit">
          <PageHeader title="Embassy Interview" routePath="/" />
        </div>
        <div className="py-5">
          <EmbassyInterviewFilterList />
        </div>
        <div className="overflow-x-visible">
          <Table
            columns={EmbassyInterviewColumns}
            data={embassyInterviewTableData}
          />
        </div>
      </div>
    </div>
  );
};

export default EmbassyInterview;
