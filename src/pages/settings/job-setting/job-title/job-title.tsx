import PageHeader from "@/common/PageHeader";
import SearchFilter from "@/components/search-filter";
import { useAddModal } from "@/hooks/use-add-modal";
import { useUpdateModal } from "@/hooks/use-update-modal";
import ModalWrapper from "@/components/shadcn/modal-wrapper";
import JobTitleTable from "./partials/job-title-table";
import CreateJobTitle from "./partials/create-job-title";
import UpdateJobTitle from "./partials/update-job-title";
import { useDelete } from "@/hooks/useDelete";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import DeleteModal from "@/components/DeleteModal";

const JobTitle = () => {
  const addModal = useAddModal();
  const updateModal = useUpdateModal();
  const deleteModal = useDelete({
    endpoints: endpoints.jobTitle.delete,
    invalidates: [apiTags.jobTitle.list],
  });
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

      {/* Delete Modal */}
      <DeleteModal
        isOpen={deleteModal.isOpen}
        onCancel={deleteModal.handleCancel}
        onConfirm={deleteModal.handleDelete}
      />
    </div>
  );
};

export default JobTitle;
