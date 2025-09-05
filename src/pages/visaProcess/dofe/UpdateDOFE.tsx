import React from 'react';
import ExtendedForm from '@/components/extended-components/ExtendedForm';
import VisaForm from './partials/DOFEForm';
import useUpdateDOFE from './hooks/useUpdateDOFE';
import Breadcrumb from '@/components/reusable-component/Breadcrumb';
import PageHeader from '@/common/PageHeader';

const UpdateDOFE: React.FC = () => {
  const { formik } = useUpdateDOFE();
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb
        Navone="Dashboard"
        Navtwo="Department of Foreign Employment (DOFE)"
      />
      <PageHeader
        title="Update Department of Foreign Employment (DOFE)"
        showAddButton={false}
      />
      <ExtendedForm formik={formik}>
        <VisaForm />
      </ExtendedForm>
    </div>
  );
};

export default UpdateDOFE;
