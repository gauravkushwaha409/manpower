import React from 'react';
import PageHeader from '@/common/PageHeader';
import Breadcrumb from '@/components/reusable-component/Breadcrumb';
import { PATH } from '@/constant/path';
import JobApplicationFilterList from './partials/JobApplicationFilterList';
import Table from '@/components/Table';
import { JobApplicationColumns } from './partials/JobApplicationColumns';
import JobApplicationTableData from '@/data/jobApplicationData';

const JobApplications: React.FC = () => {
  return (
    <div className="bg-surface w-full min-h-full">
      <Breadcrumb Navone="Dashboard" Navtwo="Job Applications" />
      <div>
        <div className="w-full h-fit">
          <PageHeader
            title="Job Applications"
            routePath={PATH.jobProcess.addJobApplication}
          />
        </div>
        <div className="py-5">
          <JobApplicationFilterList />
        </div>
        <div className="overflow-x-visible">
          <Table
            columns={JobApplicationColumns}
            data={JobApplicationTableData}
          />
        </div>
      </div>
    </div>
  );
};

export default JobApplications;
