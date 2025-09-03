import React from 'react';
import Table from '@/components/Table';
import AddLanguageModal from '@/pages/language/partials/AddLanguage';
import PageHeader from '@/common/PageHeader';
import useDisclosure from '@/hooks/useDisclousre';
import { getLanguageData } from '../hooks/useGetLanguage';
import { LanguageColumns } from './LanguageColumns';

const LanguageTable: React.FC = () => {
  const addLanguageModal = useDisclosure();

  return (
    <div className="bg-surface w-full min-h-full">
      <div className="px-5">
        {/* Header */}
        <div className="w-full h-fit">
          <PageHeader
            title="Language"
            handleAddClick={addLanguageModal.open}
            routePath="/"
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
