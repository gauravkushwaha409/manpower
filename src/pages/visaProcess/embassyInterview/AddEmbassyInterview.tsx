import React from 'react';
import ExtendedForm from '@/components/extended-components/ExtendedForm';
import useCreateEmbassyInterview from './hooks/useCreateEmbassyInterview';
import EmbassyInterviewForm from './partials/EmbassyInterviewForm';
import Breadcrumb from '@/components/reusable-component/Breadcrumb';
import UserHeader from '@/common/userHeader';
import { PATH } from '@/constant/path';

// interface IAddEmbassyInterviewProps {
//   isOpen: boolean;
//   handleCloseModal: () => void;
// }

const AddEmbassyInterview: React.FC = () => {
  const { formik } = useCreateEmbassyInterview();
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb Navone="Dashboard" Navtwo="Embassy Interview" />
      <UserHeader
        title="Add Embassy Interview"
        showAddButton={false}
        routePath={`${PATH.visa.addembassyInterview}`}
      />
      <ExtendedForm
        formik={formik}
        // submitText=""
        // cancelText="Cancel"
      >
        <EmbassyInterviewForm />
      </ExtendedForm>
    </div>
  );
};

export default AddEmbassyInterview;
