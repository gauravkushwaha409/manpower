import React from "react";
import UserHeader from "@/common/UserHeader";
import Table from "@/components/Table";
import useDisclosure from "@/hooks/useDisclousre";
import AddDOFE from "./partials/AddDOFE";
import { dofeTableData } from "@/data/dofe";
import { DOFEColumns } from "./partials/DOFEColumns";

const Dofe: React.FC = () => {
  const addModal = useDisclosure();

  return (
    <div className="min-h-full w-full bg-surface">
      <div className="px-5">
        <div className="w-full h-fit">
          <UserHeader
            number={50}
            title="DOFE (Department of Foreign Employment)"
            handleAddClick={addModal?.toggle}
          />
        </div>

        <div className="overflow-x-visible">
          <Table columns={DOFEColumns} data={dofeTableData} />
        </div>
      </div>

      <AddDOFE isOpen={addModal?.isOpen} handleCloseModal={addModal?.close} />
    </div>
  );
};

export default Dofe;
