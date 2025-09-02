import useDisclosure from "@/hooks/useDisclousre";
import React from "react";
import useEmbassyInterview from "./hooks/useEmbassyInterview";
import UserHeader from "@/common/UserHeader";
import Table from "@/components/Table";
import DeleteModal from "@/components/DeleteModal";
import AddEmbassyInterview from "./modal/AddEmbassyInterviewModal";
import UpdateEmbassyInterviewModal from "./modal/UpdateEmbassyInterviewModal";
import { getEmbassyInterviewColumns } from "./partials/EmbassyInterviewColumns";
import { embassyInterviewTableData } from "@/data/embassyInterview";

const Country: React.FC = () => {
  const {
    updateEmbassyInterview,
    setUpdateEmbassyInterview,
    setDeleteEmbassyInterview,
    handleDeleteEmbassyInterview,
  } = useEmbassyInterview();

  const addModal = useDisclosure();
  const deleteModal = useDisclosure();

  const columns = getEmbassyInterviewColumns(
    (embassyInterview) => setUpdateEmbassyInterview(embassyInterview),
    (embassyInterview) => {
      setDeleteEmbassyInterview(embassyInterview);
      deleteModal.open();
    }
  );

  return (
    <div className="min-h-full w-full bg-surface">
      <div className="px-5">
        <div className="w-full h-fit">
          <UserHeader
            number={50}
            title="Embassy Interview"
            handleAddClick={addModal.toggle}
          />
        </div>

        <div className="overflow-x-visible">
          <Table columns={columns} data={embassyInterviewTableData} />
        </div>
      </div>

      <AddEmbassyInterview
        isOpen={addModal.isOpen}
        handleCloseModal={addModal.close}
      />

      <UpdateEmbassyInterviewModal
        isOpen={!!updateEmbassyInterview}
        handleCloseModal={() => setUpdateEmbassyInterview(null)}
      />

      <DeleteModal
        isOpen={deleteModal.isOpen}
        onCancel={deleteModal.close}
        onConfirm={handleDeleteEmbassyInterview}
      />
    </div>
  );
};

export default Country;
