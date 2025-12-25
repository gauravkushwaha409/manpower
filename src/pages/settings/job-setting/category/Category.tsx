import PageHeader from "@/common/PageHeader";
import CategoryTable from "./partials/category-table";
import SearchFilter from "@/components/search-filter";
import { useAddModal } from "@/hooks/add-modal";
import { useUpdateModal } from "@/hooks/update-modal";
import ModalWrapper from "@/components/shadcn/modal-wrapper";
import CreateCategory from "./partials/create-category";
import UpdateCategory from "./partials/update-category";

const Category = () => {
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
      <CategoryTable />

      {/* Create Industry Modal */}
      <ModalWrapper
        className="xl:max-w-xl"
        isOpen={addModal.isOpen}
        name="Create Industry"
        onOpenChange={addModal.handleCloseModal}
      >
        <CreateCategory />
      </ModalWrapper>

      {/* Update Industry Modal */}
      <ModalWrapper
        className="xl:max-w-xl"
        isOpen={updateModal.isOpen}
        name="Update Industry"
        onOpenChange={updateModal.handleCloseModal}
      >
        <UpdateCategory />
      </ModalWrapper>
    </div>
  );
};

export default Category;
