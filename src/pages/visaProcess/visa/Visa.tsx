import React from "react";
import UserHeader from "@/common/UserHeader";
import Table from "@/components/Table";
import useDisclosure from "@/hooks/useDisclousre";
import { VisaColumns } from "./partials/VisaColumns";
import { visaTableData } from "@/data/visa";
import AddVisa from "./partials/AddVisa";

const Visa: React.FC = () => {
  const addModal = useDisclosure();

  return (
    <div className="min-h-full w-full bg-surface">
      <div className="px-5">
        <div className="w-full h-fit">
          <UserHeader
            number={50}
            title="Visa"
            handleAddClick={addModal?.toggle}
          />
        </div>

        <div className="overflow-x-visible">
          <Table columns={VisaColumns} data={visaTableData} />
        </div>
      </div>

      <AddVisa isOpen={addModal?.isOpen} handleCloseModal={addModal?.close} />
    </div>
  );
};

export default Visa;
