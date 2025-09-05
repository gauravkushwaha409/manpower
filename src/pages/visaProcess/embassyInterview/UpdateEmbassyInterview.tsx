import React from 'react';
import ExtendedForm from '@/components/extended-components/ExtendedForm';
import useUpdateEmbassyInterview from './hooks/useUpdateEmbassyInterview';
import EmbassyInterviewForm from './partials/EmbassyInterviewForm';
import Breadcrumb from '@/components/reusable-component/Breadcrumb';
import PageHeader from '@/common/PageHeader';

const UpdateEmbassyInterview: React.FC = () => {
  const { formik } = useUpdateEmbassyInterview();
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb Navone="Dashboard" Navtwo="Embassy Interview" />
      <PageHeader title="Update Embassy Interview" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <EmbassyInterviewForm />
      </ExtendedForm>
    </div>
  );
};

export default UpdateEmbassyInterview;
