import React from 'react';
import Table from '@/components/Table';
import useDisclosure from '@/hooks/useDisclousre';
import AddMedicalReport from './partials/AddMedicalReport';
import { medicalReportTableData } from '@/data/medicalReport';
import { MedicalReportColumns } from './partials/MedicalReportColumns';
import PageHeader from '@/common/PageHeader';

const MedicalReport: React.FC = () => {
  const addModal = useDisclosure();

  return (
    <div className="bg-surface w-full min-h-full">
      <div className="px-5">
        <div className="w-full h-fit">
          <PageHeader
            title="Medical Report"
            handleAddClick={addModal?.toggle}
            routePath="/"
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
