import React from 'react';
import Table from '@/components/Table';
import { medicalReportTableData } from '@/data/medicalReport';
import { MedicalReportColumns } from './partials/MedicalReportColumns';
import PageHeader from '@/common/PageHeader';
import { PATH } from '@/constant/path';
import Breadcrumb from '@/components/reusable-component/Breadcrumb';
import MedicalReportFilterList from './partials/MedicalReportFilterList';

const MedicalReport: React.FC = () => {
  return (
    <div className="bg-surface w-full min-h-full">
      <Breadcrumb Navone="Dashboard" Navtwo="Embassy Interview" />
      <div>
        <div className="w-full h-fit">
          <PageHeader
            title="Medical Report"
            routePath={PATH.visa.addMedicalReport}
          />
        </div>
        <div className="py-5">
          <MedicalReportFilterList />
        </div>
        <div className="overflow-x-visible">
          <Table columns={MedicalReportColumns} data={medicalReportTableData} />
        </div>
      </div>
    </div>
  );
};

export default MedicalReport;
