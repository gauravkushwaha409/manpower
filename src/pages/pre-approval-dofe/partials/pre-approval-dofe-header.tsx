import PageHeader from "@/common/PageHeader";
import SearchFilter from "@/components/search-filter";
import { PATH } from "@/constant/path";
import React from "react";
import { useNavigate } from "react-router-dom";

const PreApprovalDofeHeader = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default PreApprovalDofeHeader;
