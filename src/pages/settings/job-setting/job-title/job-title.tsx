import PageHeader from "@/common/PageHeader";
import SearchFilter from "@/components/search-filter";
import { useAddModal } from "@/hooks/add-modal";
import { useUpdateModal } from "@/hooks/update-modal";
import ModalWrapper from "@/components/shadcn/modal-wrapper";
import JobTitleTable from "./partials/job-title-table";
import CreateJobTitle from "./partials/create-job-title";
import UpdateJobTitle from "./partials/update-job-title";

const JobTitle = () => {
  const addModal = useAddModal();
  const updateModal = useUpdateModal();

  return (
    <div className="u-flex-parent">
      <PageHeader title="Job Title" />
      <SearchFilter
        dateFilter
        handleAddClick={addModal.handleOpenModal}
        selectFilter={[
          {
            placeholder: "Select Comapny",
            option: [{ label: "Dome Infosys", value: "dome-infosys" }],
            paramsKey: "company",
          },
        ]}
      />
      <JobTitleTable />

      {/* Create Job Title */}
      <ModalWrapper
        className="xl:max-w-xl"
        isOpen={addModal.isOpen}
        name="Create Job Title"
        onOpenChange={addModal.handleCloseModal}
      >
        <CreateJobTitle />
      </ModalWrapper>

      {/* Update Job Title */}
      <ModalWrapper
        className="xl:max-w-xl"
        isOpen={updateModal.isOpen}
        name="Update Job Title"
        onOpenChange={updateModal.handleCloseModal}
      >
        <UpdateJobTitle />
      </ModalWrapper>
    </div>
  );
};

export default JobTitle;
