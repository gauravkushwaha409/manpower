import React from 'react';
import LanguageForm from './partials/LanguageForm';
import useUpdateLanguage from './hooks/useUpdateLanguage';
import Breadcrumb from '@/components/reusable-component/Breadcrumb';
import PageHeader from '@/common/PageHeader';
import ExtendedForm from '@/components/extended-components/ExtendedForm';

const UpdateLanguage: React.FC = () => {
  const { formik } = useUpdateLanguage();
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb Navone="Dashboard" Navtwo="Language" />
      <PageHeader title="Update Language" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <LanguageForm />
      </ExtendedForm>
    </div>
  );
};

export default UpdateLanguage;
