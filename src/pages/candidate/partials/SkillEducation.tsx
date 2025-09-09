import React from "react";
import plusGreenIcon from "../../../assets/icons/plus_green.svg";
import InputText from "@/components/form/InputText";
import InputDate from "@/components/form/InputDate";
import { useFormikContext } from "formik";
import { ICandidate } from "../interface/ICandidate";

const SkillEducation: React.FC = () => {
  const newField = {
    nameOfInstute: "",
    course: "",
    passedYear: "",
  };
  const formik = useFormikContext<ICandidate>();

  const addEducation = () => {
    formik.setFieldValue("education", [...formik.values.education, newField]);
  };

  const removeEducation = (index: number) => {
    const education = [...formik.values.education];
    education.splice(index, 1);
    formik.setFieldValue("education", education);
  };
  return (
    <div className="h-fit w-full pb-16 bg-white">
      <p className="typography-p2-medium text-Black-500 mt-2">
        Step 2 - Skills / Education
      </p>
      <div>
        <div className="w-full grid grid-cols-2 gap-5 mt-2">
          {/* Skills */}
          <InputText
            label="Skills"
            name="skills"
            placeholder="Enter Your Skill"
          />
          <InputText
            label="Current Job Title"
            name="current_jobtitle"
            placeholder="Enter Your Current Job Title"
          />
        </div>

        {/* Education / certification */}
        <div className="mt-5">
          <p className="typography-p2-semibold text-Black-500">
            Education / Certification
          </p>

          {formik.values.education.map((_, index) => (
            <div
              key={index}
              className="grid grid-cols-3 mt-2 gap-5 relative group"
            >
              {/* Name of Institute */}
              <InputText
                label="Name Of Institute"
                name={`education[${index}].name_of_instute`}
                placeholder="Enter Name Of Institute"
              />
              <InputText
                label="Course"
                name={`education[${index}].course`}
                placeholder="Enter Name Of Course"
              />
              <InputDate
                label="Passed Year"
                name={`education[${index}].passed_year`}
                placeholder="Enter Passed Year"
              />

              {/* Add/Remove buttons */}
              {index === formik.values.education.length - 1 && (
                <div className="mt-3 flex items-center gap-5 col-span-3">
                  <button
                    type="button"
                    onClick={addEducation}
                    className="typography-caption-c1 text-primary py-3 px-2.5 flex items-center gap-2 border border-primary rounded-lg cursor-pointer"
                  >
                    <span className="typography-caption-c1 text-primary">
                      Add More Education
                    </span>
                    <img src={plusGreenIcon} alt="Add" />
                  </button>

                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => {
                        removeEducation(index);
                      }}
                      className="typography-caption-c1 text-error py-3 px-2.5 flex items-center gap-2 border border-error rounded-lg cursor-pointer"
                      aria-label="Remove education"
                    >
                      Remove Education
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

export default SkillEducation;
