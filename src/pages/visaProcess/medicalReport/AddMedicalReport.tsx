import React from 'react';
import ExtendedForm from '@/components/extended-components/ExtendedForm';
import MedicalReportForm from './partials/MedicalReportForm';
import useCreateMedicalReport from './hooks/useCreateMedicalReport';
import Breadcrumb from '@/components/reusable-component/Breadcrumb';
import PageHeader from '@/common/PageHeader';

const AddMedicalReport: React.FC = () => {
  const { formik } = useCreateMedicalReport();
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb Navone="Dashboard" Navtwo="Medical Report" />
      <PageHeader title="Add Medical Report" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <MedicalReportForm />
      </ExtendedForm>
    </div>
  );
};

export default AddMedicalReport;
