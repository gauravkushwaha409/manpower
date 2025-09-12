import PageHeader from "@/common/PageHeader";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import CandidateForm from "./partials/CandidateForm";
import useCreateCandidate from "./hooks/useCreateCandidate";

const AddCandidate = () => {
  const formik = useCreateCandidate();
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb Navone="Dashboard" Navtwo="Candidate" />
      <PageHeader title="Update Candidate" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <CandidateForm />
      </ExtendedForm>
    </div>
  );
};

export default AddCandidate;
