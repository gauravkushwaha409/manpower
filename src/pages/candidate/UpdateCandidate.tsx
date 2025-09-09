import PageHeader from "@/common/PageHeader";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import CandidateForm from "./partials/CandidateForm";
import useUpdateCandidate from "./hooks/useUpdateCandidate";

const UpdateCandidate = () => {
  const formik = useUpdateCandidate();
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb Navone="Dashboard" Navtwo="Company" />
      <PageHeader title="Update Company" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <CandidateForm />
      </ExtendedForm>
    </div>
  );
};

export default UpdateCandidate;
