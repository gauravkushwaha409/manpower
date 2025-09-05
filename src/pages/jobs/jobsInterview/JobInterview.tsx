import React from 'react';
import PageHeader from '@/common/PageHeader';
import Breadcrumb from '@/components/reusable-component/Breadcrumb';
import { PATH } from '@/constant/path';
import JobInterviewFilterList from './partial/JobInterviewFilterList';
import Table from '@/components/Table';
import { JobInterviewColumns } from './partial/JobInterviewColumn';
import { jobInterviewTableData } from './hooks/useGetJobInterview';

const EmbassyInterview: React.FC = () => {
  return (
    <div className="bg-surface w-full min-h-full">
      <Breadcrumb Navone="Dashboard" Navtwo="Interview Candidates" />
      <div>
        <div className="w-full h-fit">
          <PageHeader
            title="Interview Candidates"
            routePath={PATH.jobProcess.addInterviewCandidates}
          />
        </div>
        <div className="py-5">
          <JobInterviewFilterList />
        </div>
        <div className="overflow-x-visible">
          <Table columns={JobInterviewColumns} data={jobInterviewTableData} />
        </div>
      </div>
    </div>
  );
};

export default EmbassyInterview;
