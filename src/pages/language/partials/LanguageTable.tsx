import React from "react";
import Table from "@/components/Table";
import AddLanguageModal from "@/pages/language/partials/AddLanguage";
import UserHeader from "@/common/userHeader";
import useDisclosure from "@/hooks/useDisclousre";
import { getLanguageData } from "../hooks/useGetLanguage";
import { LanguageColumns } from "./LanguageColumns";

const LanguageTable: React.FC = () => {
  const addLanguageModal = useDisclosure();

  return (
    <div className="min-h-full w-full bg-surface">
      <div className="px-5">
        {/* Header */}
        <div className="w-full h-fit">
          <UserHeader
            number={120}
            title="Language"
            handleAddClick={addLanguageModal.open}
          />
        </div>

        {/* Table */}
        <div className="overflow-auto">
          <Table columns={LanguageColumns} data={getLanguageData} />
        </div>
      </div>
      <AddLanguageModal
        isOpen={addLanguageModal.isOpen}
        handleCloseModal={addLanguageModal.close}
      />
    </div>
  );
};

export default LanguageTable;
