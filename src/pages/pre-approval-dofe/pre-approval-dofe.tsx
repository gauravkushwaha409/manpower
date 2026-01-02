import PageHeader from "@/common/PageHeader";
import { PATH } from "@/constant/path";
import PreApprovalDofeTable from "./partials/PreApprovalDofeTable";
import SearchFilter from "@/components/search-filter";
import { useNavigate } from "react-router-dom";
import { useDelete } from "@/hooks/useDelete";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import DeleteModal from "@/components/DeleteModal";

const PreApprovalDofe = () => {
  const navigate = useNavigate();
  const deleteModal = useDelete({
    endpoints: endpoints.preApprovalDofe.delete,
    invalidates: [apiTags.preApprovalDofe.list],
  });
  return (
    <div className="u-flex-parent">
      <PageHeader title="Pre Approval DOFE" />
      <SearchFilter
        dateFilter
        handleAddClick={() => {
          navigate(PATH.preApprovalDofe.create);
        }}
        selectFilter={[
          {
            placeholder: "Select Comapny",
            option: [{ label: "Dome Infosys", value: "dome-infosys" }],
            paramsKey: "company",
          },
        ]}
      />
      <PreApprovalDofeTable />

      {/* Delete Modal */}
      <DeleteModal
        isOpen={deleteModal.isOpen}
        onCancel={deleteModal.handleCancel}
        onConfirm={deleteModal.handleDelete}
      />
    </div>
  );
};

export default PreApprovalDofe;
