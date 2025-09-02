import React from "react";
import { InputRadio } from "@/components/ui/FormComponent";
// import { useFormikContext } from 'formik';
// import { IJobVacancyTableData } from '../interface/IAddJobVacancies';
import { InputFile } from "@/components/form/InputFile";

const Documentation: React.FC = () => {
  // const formik = useFormikContext<Omit<IJobVacancyTableData, "id">>();

  return (
    <div>
      <div className="mt-4">
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-1 gap-5">
            {[
              "pre_approval_dofe",
              "demand_letter",
              "power_of_attorney",
              "employment_contract",
              "government_service_charge",
            ].map((item, index) => (
              <div key={index}>
                <InputRadio name={item} label={"Choose Your Document"} />
                <InputFile label="Document" name={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Documentation;
