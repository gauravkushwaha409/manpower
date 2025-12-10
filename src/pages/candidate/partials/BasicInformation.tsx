import React from "react";
import plusGreenIcon from "../../../assets/icons/plus_green.svg";
import InputText from "@/components/form/FormInputText";
import { InputSearchSelect } from "@/components/form/InputSelect";
import InputDate from "@/components/form/FormInputDate";
import { useFormikContext } from "formik";
import { ICandidate } from "../interface/ICandidate";

const BasicInformation: React.FC = () => {
  const formik = useFormikContext<ICandidate>();

  const newField = {
    language: "",
    languageLevel: "",
  };

  const addLanguage = () => {
    formik.setFieldValue("languages", [...formik.values.languages, newField]);
  };

  const removeLanguage = (index: number) => {
    const languages = [...formik.values.languages];
    languages.splice(index, 1);
    formik.setFieldValue("languages", languages);
  };
  return (
    <div className="h-fit w-full py-10 px-10  rounded-lg bg-white">
      <div>
        <p className="typography-p2-medium text-Black-500 mt-2">
          Step 1 - Basic Information
        </p>

        {/* First Name, Last Name, Agent Name */}
        <div className="w-full grid grid-cols-1  sm:grid-cols-2 gap-5 mt-2">
          <InputText
            label="First Name"
            name="firstname"
            placeholder="Enter Your First Name"
          />
          <InputText
            label="Last Name"
            name="lastname"
            placeholder="Enter Your Last Name"
          />
          <InputText
            label="Agent Name"
            name="agentName"
            placeholder="Enter Agent Name"
          />
        </div>

        {/* Date of birth, phone number, email, country to apply,  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-5">
          <InputDate label="Date Of Birth" name="dateOfBirth" />
          <InputText
            label="Phone Number"
            name="phone"
            placeholder="Enter Phone Number"
          />
          <InputText
            label="Email Address"
            name="email"
            placeholder="Enter Email"
          />
          <InputSearchSelect
            label="Country"
            name="country"
            placeholder="Select Your Country"
            options={[{ label: "Nepal", value: "nepal" }]}
          />
        </div>

        {/* Candidate Address */}
        <div className="mt-5">
          <p className="typography-p2-semibold text-Black-500">
            Candidates Address
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-5">
            <InputSearchSelect
              label="Province"
              name="province"
              options={[{ label: "province 1", value: "provience_1" }]}
            />
            <InputSearchSelect
              label="District"
              name="district"
              options={[{ label: "Kathmandu", value: "kathmandu" }]}
            />
            <InputText
              label="Municipality"
              name="municipality"
              placeholder="Enter Your Municipality"
            />
            <InputText
              label="Ward No."
              name="wardNo"
              placeholder="Enter Your Ward No."
            />
          </div>
        </div>

        {/* Language proficiency */}
        <div className="mt-5">
          <p className="typography-p2-semibold text-Black-500">Languages</p>

          {formik.values.languages.map((_, index) => (
            <div key={index} className="grid grid-cols-2 mt-2 gap-5">
              <InputSearchSelect
                label="Language"
                name={`languages[${index}].language`}
                options={[{ label: "Nepali", value: "nepali" }]}
              />
              <InputSearchSelect
                label="Language Level"
                name={`languages[${index}].languageLevel`}
                options={[{ label: "Fluent", value: "fluent" }]}
              />
              {formik.values.languages.length > 0 && (
                <div className="mt-3 flex items-center gap-5 col-span-2">
                  {index === formik.values.languages.length - 1 && (
                    <button
                      type="button"
                      onClick={addLanguage}
                      className="typography-caption-c1 text-primary py-3 px-2.5 flex items-center gap-2 border border-primary rounded-lg cursor-pointer"
                    >
                      <span className="typography-caption-c1 text-primary">
                        Add More Languages
                      </span>
                      <img src={plusGreenIcon} alt="Add" />
                    </button>
                  )}
                  {index >= 0 && (
                    <button
                      type="button"
                      onClick={() => removeLanguage(index)}
                      className="typography-caption-c1 text-error py-3 px-2.5 flex items-center gap-2 border border-error rounded-lg cursor-pointer"
                      aria-label="Remove language"
                    >
                      Remove Language
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BasicInformation;
