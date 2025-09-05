import React from 'react';
import ExtendedForm from '@/components/extended-components/ExtendedForm';
import useCreateEmbassyInterview from './hooks/useCreateEmbassyInterview';
import EmbassyInterviewForm from './partials/EmbassyInterviewForm';
import Breadcrumb from '@/components/reusable-component/Breadcrumb';
import PageHeader from '@/common/PageHeader';

const AddEmbassyInterview: React.FC = () => {
  const { formik } = useCreateEmbassyInterview();
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb Navone="Dashboard" Navtwo="Embassy Interview" />
      <PageHeader title="Add Embassy Interview" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <EmbassyInterviewForm />
      </ExtendedForm>
    </div>
  );
};

export default AddEmbassyInterview;
