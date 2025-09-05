import React from 'react';
import ExtendedForm from '@/components/extended-components/ExtendedForm';
import useUpdateMedicalReport from './hooks/useUpdateMedicalReport';
import Breadcrumb from '@/components/reusable-component/Breadcrumb';
import PageHeader from '@/common/PageHeader';
import MedicalReportForm from './partials/MedicalReportForm';

const UpdateMedicalReport: React.FC = () => {
  const { formik } = useUpdateMedicalReport();
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb Navone="Dashboard" Navtwo="Medical Report" />
      <PageHeader title="Update Medical Report" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <MedicalReportForm />
      </ExtendedForm>
    </div>
  );
};

export default UpdateMedicalReport;
