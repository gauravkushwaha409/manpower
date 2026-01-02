// import { useGetDataQuery } from "@/api/api";
// import useStringState from "@/utils/useStringState";
// import { apiTags } from "@/constant/tag";
// import { endpoints } from "@/api/endpoints";
// import { useState } from "react";
// import { useDebounce } from "@/utils/useDebounce";
// import { PreApprovalDofeListItemResponse } from "../interface/IPreApprovalDofe";

// export const useGetPreApprovalDofe = () => {
//   const updateId = useStringState();
//   const [page, setPage] = useState(0);
//   const [pageSize, setPageSize] = useState(5);
//   const [search, setSearch] = useState<string>("");
//   const debouncedSearch = useDebounce<string>(search, 500);

//   const { data, isError, isLoading, isSuccess } = useGetDataQuery<{
//     data: PreApprovalDofeListItemResponse;
//     isLoading: boolean;
//     isError: boolean;
//     isSuccess: boolean;
//   }>({
//     url: endpoints?.preApprovalDofe.list,
//     params: { page: page + 1, perPage: pageSize, search: debouncedSearch },
//     tag: apiTags.getAllPreApprovalDofe,
//   });

//   return {
//     preApprovalDofeData: data,
//     page,
//     setPage,
//     pageSize,
//     setPageSize,
//     search,
//     setSearch,
//     isError,
//     isLoading,
//     isSuccess,
//     updateId,
//   };
// };

import { IPreApprovalDofeListItem } from "@/pages/preApprovalDofe/interface/IPreApprovalDofe";

export const PreApprovalDofeTableData: IPreApprovalDofeListItem[] = [
  {
    id: "1",
    company: {
      recruitmentCompany: "Global Manpower Pvt. Ltd.",
      recruitment_company: "Global Manpower Pvt. Ltd.",
      liscenseNumber: "LIC-2024-001",
      companyAddress: {
        country: "Kuwait",
        state: "Bagmati",
        city: "Kathmandu",
        street: "New Baneshwor",
        area: "Ward 10",
        currency: "NPR",
      },
      recruimentPerson: {
        contactNumber: "+977-9800000001",
        email: "contact@globalmanpower.com",
        officeAddress: "New Baneshwor, Kathmandu",
        website: "https://globalmanpower.com",
      },
    },
    preApprovalDate: "2024-01-12",
    ltNumber: "LT-1001",
    chalanNumber: "CH-5501",
  },
  {
    id: "2",
    company: {
      recruitmentCompany: "Himalayan Recruitment Services",
      recruitment_company: "Himalayan Recruitment Services",
      liscenseNumber: "LIC-2024-002",
      companyAddress: {
        country: "Qatar",
        state: "Gandaki",
        city: "Pokhara",
        street: "Lakeside",
        area: "Ward 6",
        currency: "NPR",
      },
      recruimentPerson: {
        contactNumber: "+977-9800000002",
        email: "info@himalayanservices.com",
        officeAddress: "Lakeside, Pokhara",
        website: "https://himalayanservices.com",
      },
    },
    preApprovalDate: "2024-02-05",
    ltNumber: "LT-1002",
    chalanNumber: "CH-5502",
  },
];
