// import React from "react";
// import Table, { CustomColumnDef } from "../../components/Table";
// import { DeleteIcon, EditIcon } from "../../components/actions/TableComp";
// import { ILanguage } from "@/pages/language/interface/ILanguage.ts";
// import DeleteModal from "@/components/DeleteModal.tsx";
// import UpdateLanguageModal from "@/pages/language/modal/UpdateLanguageModal.tsx";
// import AddLanguageModal from "@/pages/language/modal/AddLanguageModal.tsx";
// import useLanguage from "@/pages/language/hooks/useLanguage.ts";
// import useCreateLanguage from "@/pages/language/hooks/useCreateLanguage.ts";
// import useUpdateLanguage from "@/pages/language/hooks/useUpdateLanguage.ts";
// import { getLanguageData } from "./hooks/useGetLanguage";
// import PageHeader from "@/common/PageHeader";
// import useDisclosure from "@/hooks/useDisclousre";

// const Language: React.FC = () => {
//   const {
//     addLanguage,
//     updateLanguage,
//     setUpdateLanguage,
//     deleteLanguage,
//     setDeleteLanguage,
//     handleOpenAddModal,
//     handleCloseAddModal,
//     handleCloseUpdateModal,
//     handleCloseDeleteModal,
//     handleDeleteLanguage,
//   } = useLanguage();
//   const languageModal = useDisclosure();
//   const { addLanguageFormik } = useCreateLanguage();
//   const { updateLanguageFormik } = useUpdateLanguage();
//   const LanguageTableData = getLanguageData;

//   const tableHead: CustomColumnDef<ILanguage>[] = [
//     {
//       header: "Language",
//       accessorKey: "language",
//       search: true,
//     },
//     {
//       header: "Action",
//       accessorKey: "action",
//       search: false,
//       cell: ({ row }) => (
//         <div className="flex items-center gap-4 ml-5">
//           <button
//             onClick={() => {
//               setUpdateLanguage(row?.original?.id);
//             }}
//           >
//             <EditIcon />
//           </button>

//           <button
//             onClick={() => {
//               setDeleteLanguage(row?.original?.id);
//             }}
//           >
//             <DeleteIcon />
//           </button>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="bg-surface w-full min-h-full">
//       <div className="px-5">
//         {/* Header */}
//         <div className="w-full h-fit">
//           <PageHeader
//             number={120}
//             title="Language"
//             handleAddClick={languageModal.open}
//           />
//         </div>

//         {/* Table */}
//         <div className="overflow-auto">
//           <Table columns={tableHead} data={LanguageTableData} />
//         </div>
//       </div>
//       <AddLanguageModal
//         formik={addLanguageFormik}
//         isOpen={languageModal.isOpen}
//         handleCloseModal={languageModal.close}
//       />
//       <UpdateLanguageModal
//         handleCloseModal={handleCloseUpdateModal}
//         isOpen={!!updateLanguage}
//         formik={updateLanguageFormik}
//       />
//       <DeleteModal
//         isOpen={!!deleteLanguage}
//         onCancel={handleCloseDeleteModal}
//         onConfirm={handleDeleteLanguage}
//       />
//     </div>
//   );
// };

// export default Language;
import LanguageTable from './partials/LanguageTable';

function Language() {
  return (
    <div>
      <LanguageTable />
    </div>
  );
}

export default Language;
