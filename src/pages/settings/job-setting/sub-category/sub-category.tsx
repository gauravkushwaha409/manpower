import PageHeader from "@/common/PageHeader";
import SearchFilter from "@/components/search-filter";
import { useAddModal } from "@/hooks/add-modal";
import { useUpdateModal } from "@/hooks/update-modal";
import SubCategoryTable from "./partials/sub-category-table";
import ModalWrapper from "@/components/shadcn/modal-wrapper";
import CreateSubCategory from "./partials/create-sub-category";
import UpdateSubCategory from "./partials/update-sub-category";

const SubCategory = () => {
  const addModal = useAddModal();
  const updateModal = useUpdateModal();

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
    </div>
  );
};

export default SubCategory;
