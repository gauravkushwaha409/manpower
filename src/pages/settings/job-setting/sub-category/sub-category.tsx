import PageHeader from "@/common/PageHeader";
import SearchFilter from "@/components/search-filter";
import { useAddModal } from "@/hooks/use-add-modal";
import { useUpdateModal } from "@/hooks/use-update-modal";
import SubCategoryTable from "./partials/sub-category-table";
import ModalWrapper from "@/components/shadcn/modal-wrapper";
import CreateSubCategory from "./partials/create-sub-category";
import UpdateSubCategory from "./partials/update-sub-category";
import DeleteModal from "@/components/DeleteModal";
import { useDelete } from "@/hooks/useDelete";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";

const SubCategory = () => {
  const addModal = useAddModal();
  const updateModal = useUpdateModal();
  const deleteModal = useDelete({
    endpoints: endpoints.subCategory.delete,
    invalidates: [apiTags.subCategory.list],
  });
  return (
    <div className="u-flex-parent">
      <PageHeader title="Industry" />
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
      <SubCategoryTable />

      {/* Create Industry Modal */}
      <ModalWrapper
        className="xl:max-w-xl"
        isOpen={addModal.isOpen}
        name="Create Sub Category"
        onOpenChange={addModal.handleCloseModal}
      >
        <CreateSubCategory />
      </ModalWrapper>

      {/* Update Industry Modal */}
      <ModalWrapper
        className="xl:max-w-xl"
        isOpen={updateModal.isOpen}
        name="Update Sub Category"
        onOpenChange={updateModal.handleCloseModal}
      >
        <UpdateSubCategory />
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

export default SubCategory;
