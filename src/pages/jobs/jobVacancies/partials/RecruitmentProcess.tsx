import InputCheckbox from "@/components/form/InputCheckBox";
import InputDate from "@/components/form/FormInputDate";
import { InputSearchSelect } from "@/components/form/InputSelect";
import InputText from "@/components/form/FormInputText";
import React from "react";

const Recruitement: React.FC = () => {
  return (
    <div>
      <div className="mt-4">
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-4">
            <InputCheckbox label="DOFE Approval" name="dofe_approval" />
            <InputDate label="Advertisement Date" name="advertisement_date" />
            <InputSearchSelect
              label="Newspaper Portal"
              name="newspaper_portal"
              options={[{ label: "Kathmandu post", value: "kathamandu post" }]}
            />
            <InputDate label="Advertisement From" name="ad_duration_from" />
            <InputDate label="Advertisement To" name="ad_duration_to" />
            <InputSearchSelect
              label="Selection Mode"
              name="selection_mode"
              options={[{ label: "Interview", value: "interview" }]}
            />
            <InputSearchSelect
              label="Interview Type"
              name="selection_mode"
              options={[{ label: "Interview", value: "interview" }]}
            />
            <InputDate label="Interview Date" name="interview_date" />
            <InputText label="Interview Location" name="interview_location" />
            <InputSearchSelect
              label="Recruitement Company"
              name="recruitment_company"
              options={[{ label: "Dome Infosyss", value: "dome_infosyss" }]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruitement;
