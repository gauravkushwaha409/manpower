import React from 'react';
import PageHeader from '@/common/PageHeader';
import Breadcrumb from '@/components/reusable-component/Breadcrumb';
import { PATH } from '@/constant/path';
import JobOfferFilterList from './partials/JobOfferFilterList';
import Table from '@/components/Table';
import { JobOfferColumns } from './partials/JobOfferColumn';
import { jobOfferTableData } from './hooks/useGetJobOffer';

const JobOffer: React.FC = () => {
  return (
    <div className="bg-surface w-full min-h-full">
      <Breadcrumb Navone="Dashboard" Navtwo="Job Offer" />
      <div>
        <div className="w-full h-fit">
          <PageHeader
            title="Job Offer"
            routePath={PATH.jobProcess.addJobOffer}
          />
        </div>
        <div className="py-5">
          <JobOfferFilterList />
        </div>
        <div className="overflow-x-visible">
          <Table columns={JobOfferColumns} data={jobOfferTableData} />
        </div>
      </div>
    </div>
  );
};

export default JobOffer;
