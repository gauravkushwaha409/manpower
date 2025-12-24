import React from "react";
import PageHeader from "@/common/PageHeader";
import JobInterviewFilterList from "./partial/JobInterviewFilterList";
import Table from "@/components/Table";
import { JobInterviewColumns } from "./partial/JobInterviewColumn";
import { jobInterviewTableData } from "./hooks/useGetJobInterview";

const EmbassyInterview: React.FC = () => {
  return (
    <div className="bg-surface w-full min-h-full">
      {/* <Breadcrumb Navtwo="Interview Candidates" /> */}
      <div>
        <div className="w-full h-fit">
          <PageHeader title="Interview Candidates" />
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
