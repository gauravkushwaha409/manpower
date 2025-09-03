import React from "react";
import UserHeader from "@/common/UserHeader";
import Table from "@/components/Table";
import useDisclosure from "@/hooks/useDisclousre";
import AddOrientation from "./partials/AddOrientation";
import { OrientationColumns } from "./partials/OrientationColumns";
import { orientationTableData } from "@/data/orientation";

const Orientation: React.FC = () => {
  const addModal = useDisclosure();

  return (
    <div className="min-h-full w-full bg-surface">
      <div className="px-5">
        <div className="w-full h-fit">
          <UserHeader
            number={50}
            title="Orientation"
            handleAddClick={addModal?.toggle}
          />
        </div>

        <div className="overflow-x-visible">
          <Table columns={OrientationColumns} data={orientationTableData} />
        </div>
      </div>

      <AddOrientation
        isOpen={addModal?.isOpen}
        handleCloseModal={addModal?.close}
      />
    </div>
  );
};

export default Orientation;
