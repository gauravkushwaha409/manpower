import React from "react";
import UserHeader from "@/common/UserHeader";
import Table from "@/components/Table";
import useDisclosure from "@/hooks/useDisclousre";
import AddMedicalReport from "./partials/AddMedicalReport";
import { medicalReportTableData } from "@/data/medicalReport";
import { MedicalReportColumns } from "./partials/MedicalReportColumns";

const MedicalReport: React.FC = () => {
  const addModal = useDisclosure();

  return (
    <div className="min-h-full w-full bg-surface">
      <div className="px-5">
        <div className="w-full h-fit">
          <UserHeader
            number={50}
            title="Medical Report"
            handleAddClick={addModal?.toggle}
          />
        </div>

        <div className="overflow-x-visible">
          <Table columns={MedicalReportColumns} data={medicalReportTableData} />
        </div>
      </div>

      <AddMedicalReport
        isOpen={addModal?.isOpen}
        handleCloseModal={addModal?.close}
      />
    </div>
  );
};

export default MedicalReport;
