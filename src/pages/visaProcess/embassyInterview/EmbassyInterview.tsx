import React from "react";
import UserHeader from "@/common/UserHeader";
import Table from "@/components/Table";
import useDisclosure from "@/hooks/useDisclousre";
import AddEmbassyInterview from "./partials/AddEmbassyInterview";
import { embassyInterviewTableData } from "@/data/embassyInterview";
import { EmbassyInterviewColumns } from "./partials/EmbassyInterviewColumns";

const EmbassyInterview: React.FC = () => {
  const addModal = useDisclosure();

  return (
    <div className="min-h-full w-full bg-surface">
      <div className="px-5">
        <div className="w-full h-fit">
          <UserHeader
            number={50}
            title="Embassy Interview"
            handleAddClick={addModal?.toggle}
          />
        </div>

        <div className="overflow-x-visible">
          <Table
            columns={EmbassyInterviewColumns}
            data={embassyInterviewTableData}
          />
        </div>
      </div>

      <AddEmbassyInterview
        isOpen={addModal?.isOpen}
        handleCloseModal={addModal?.close}
      />
    </div>
  );
};

export default EmbassyInterview;
