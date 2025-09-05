import React from 'react';
import PageHeader from '@/common/PageHeader';
import Breadcrumb from '@/components/reusable-component/Breadcrumb';
import { PATH } from '@/constant/path';
import JobCategoryFilterList from './partials/JobCategoryFilterList';
import { JobCategoryColumns } from './partials/JobCategoryColumns';
import Table from '@/components/Table';
import JobCategoryTableData from '@/data/jobCategoryData';

const JobCategory: React.FC = () => {
  return (
    <div className="bg-surface w-full min-h-full">
      <Breadcrumb Navone="Dashboard" Navtwo="Job Category" />
      <div>
        <div className="w-full h-fit">
          <PageHeader
            title="Job Category"
            routePath={PATH.jobProcess.addJobCategories}
          />
        </div>
        <div className="py-5">
          <JobCategoryFilterList />
        </div>
        <div className="overflow-x-visible">
          <Table columns={JobCategoryColumns} data={JobCategoryTableData} />
        </div>
      </div>
    </div>
  );
};

export default JobCategory;
