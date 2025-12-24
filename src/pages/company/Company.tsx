import React from "react";
import PageHeader from "@/common/PageHeader";
import { PATH } from "@/constant/path";
import ComapnyTable from "./partials/ComapnyTable";
import SearchFilter from "@/components/search-filter";
import { useNavigate } from "react-router-dom";

const Company: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="u-flex-parent">
      <PageHeader title="Company" />
      <SearchFilter
        dateFilter
        handleAddClick={() => {
          navigate(PATH.company.create);
        }}
        selectFilter={[
          {
            placeholder: "Select Country",
            option: [{ label: "Nepal", value: "nepal" }],
            paramsKey: "country",
          },
        ]}
      />
      <ComapnyTable />
    </div>
  );
};

export default Company;
