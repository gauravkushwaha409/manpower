import React from 'react';
import LanguageForm from './partials/LanguageForm';
import useCreateLanguage from '@/pages/language/hooks/useCreateLanguage.ts';
import Breadcrumb from '@/components/reusable-component/Breadcrumb';
import PageHeader from '@/common/PageHeader';
import ExtendedForm from '@/components/extended-components/ExtendedForm';

const AddLanguage: React.FC = () => {
  const { formik } = useCreateLanguage();
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb Navone="Dashboard" Navtwo="Language" />
      <PageHeader title="Add Language" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <LanguageForm />
      </ExtendedForm>
    </div>
  );
};

export default AddLanguage;
