import React from "react";
import InputText from "@/components/form/FormInputText";
import { InputFile } from "@/components/form/InputFile";
import { ICandidate } from "../interface/ICandidate";
import { useFormikContext } from "formik";
import { InputSearchSelect } from "@/components/form/InputSelect";
import InputDate from "@/components/form/FormInputDate";

const Documents: React.FC = () => {
  const formik = useFormikContext<ICandidate>();
  return (
    <div className="h-fit w-full pb-16 bg-white">
      <p className="typography-p2-medium text-Black-500 mt-2">
        Step 3 - Documents
      </p>
      <div>
        {/* Select Document Type */}
        <InputSearchSelect
          label="Document Type"
          name="document_type"
          options={[
            { label: "Citizenship", value: "citizenship" },
            { label: "Passport", value: "passport" },
            { label: "Resume", value: "resume" },
            { label: "Police Report", value: "police_report" },
          ]}
        />

        {/* Citizenship */}
        {formik.values.document_type === "citizenship" && (
          <div className="grid grid-cols-2 mt-2 gap-5 ">
            <div className="">
              <InputDate label="Issued Date" name="citizenship_issue_date" />
            </div>
            <div className="">
              <InputText label="Citizenship Number" name="citizenship_number" />
            </div>
          </div>
        )}

        {/* Passport */}
        {formik.values.document_type === "passport" && (
          <div className="grid grid-cols-3 mt-2 gap-5 ">
            <InputDate label="Issued Date" name="passport_issued_date" />
            <InputDate label="Expiry Date" name="passport_expiry_date" />
            <InputText
              label="Passport Number"
              name="passport_number"
              placeholder="Enter Passport Number"
            />
          </div>
        )}

        {/* Police Report */}
        {formik.values.document_type === "police_report" && (
          <div className="grid grid-cols-2 mt-2 gap-5">
            <InputText label="Issued Date" name="police_report_issued_date" />
            <InputText label="Dispatch Number" name="dispatch_number" />
          </div>
        )}

        {/* Attach Document */}
        <InputFile label="Document" name="document" />
      </div>
    </div>
  );
};

export default Documents;
