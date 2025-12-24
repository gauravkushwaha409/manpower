import { useFormikContext } from "formik";
import { ICandidate } from "../interface/ICandidate";
import FormInputText from "@/components/form/FormInputText";
import FormInputDate from "@/components/form/form-input-date";
import FormInputSelect from "@/components/form/form-input-select";
import { InputFile } from "@/components/form/InputFile";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export const CandidateFormStep1 = () => {
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
    <div className="space-y-4">
      <div className="w-full grid grid-cols-1  sm:grid-cols-2 gap-5 mt-2">
        <FormInputText
          label="First Name"
          name="first_name"
          placeholder="Enter Your First Name"
        />
        <FormInputText
          label="Last Name"
          name="last_name"
          placeholder="Enter Your Last Name"
        />
        <FormInputText
          label="Agent Name"
          name="agent_name"
          placeholder="Enter Agent Name"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-5">
        <FormInputDate label="Date Of Birth" name="date_of_birth" />
        <FormInputText
          label="Phone Number"
          name="phone"
          placeholder="Enter Phone Number"
        />
        <FormInputText
          label="Email Address"
          name="email"
          placeholder="Enter Email"
        />
        <FormInputSelect
          label="Country"
          name="country"
          placeholder="Select Your Country"
          options={[{ label: "Nepal", value: "nepal" }]}
        />
      </div>

      <div className="mt-5">
        <p className="typography-p2-semibold text-Black-500">
          Candidates Address
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-5">
          <FormInputSelect
            label="Province"
            name="province"
            options={[{ label: "province 1", value: "provience_1" }]}
          />
          <FormInputSelect
            label="District"
            name="district"
            options={[{ label: "Kathmandu", value: "kathmandu" }]}
          />
          <FormInputText
            label="Municipality"
            name="municipality"
            placeholder="Enter Your Municipality"
          />
          <FormInputText
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
            <FormInputSelect
              label="Language"
              name={`languages[${index}].language`}
              options={[{ label: "Nepali", value: "nepali" }]}
            />
            <FormInputSelect
              label="Language Level"
              name={`languages[${index}].languageLevel`}
              options={[{ label: "Fluent", value: "fluent" }]}
            />
            {formik.values.languages.length > 0 && (
              <div className="mt-3 flex items-center gap-5 col-span-2">
                {index === formik.values.languages.length - 1 && (
                  <Button handleClick={addLanguage} varient="add">
                    Add More
                    <Plus />
                  </Button>
                )}
                {index >= 0 && (
                  <Button
                    handleClick={() => removeLanguage(index)}
                    varient="delete"
                  >
                    Delete
                  </Button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export const CandidateFormStep2 = () => {
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
      <div className="w-full grid grid-cols-2 gap-5 mt-2">
        {/* Skills */}
        <FormInputText
          label="Skills"
          name="skills"
          placeholder="Enter Your Skill"
        />
        <FormInputText
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
            <FormInputText
              label="Name Of Institute"
              name={`education[${index}].name_of_instute`}
              placeholder="Enter Name Of Institute"
            />
            <FormInputText
              label="Course"
              name={`education[${index}].course`}
              placeholder="Enter Name Of Course"
            />
            <FormInputDate
              label="Passed Year"
              name={`education[${index}].passed_year`}
              placeholder="Enter Passed Year"
            />

            {/* Add/Remove buttons */}
            {index === formik.values.education.length - 1 && (
              <div className="mt-3 flex items-center gap-5 col-span-3">
                <Button handleClick={addEducation} varient="add">
                  Add More
                  <Plus />
                </Button>

                {index > 0 && (
                  <Button
                    varient="delete"
                    handleClick={() => {
                      removeEducation(index);
                    }}
                  >
                    Remove
                  </Button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export const CandidateFormStep3 = () => {
  const formik = useFormikContext<ICandidate>();

  return (
    <div className="h-fit w-full pb-16 bg-white">
      <p className="typography-p2-medium text-Black-500 mt-2">
        Step 3 - Documents
      </p>
      <div>
        {/* Select Document Type */}
        <FormInputSelect
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
              <FormInputDate
                label="Issued Date"
                name="citizenship_issue_date"
              />
            </div>
            <div className="">
              <FormInputDate
                label="Citizenship Number"
                name="citizenship_number"
              />
            </div>
          </div>
        )}

        {/* Passport */}
        {formik.values.document_type === "passport" && (
          <div className="grid grid-cols-3 mt-2 gap-5 ">
            <FormInputDate label="Issued Date" name="passport_issued_date" />
            <FormInputDate label="Expiry Date" name="passport_expiry_date" />
            <FormInputText
              label="Passport Number"
              name="passport_number"
              placeholder="Enter Passport Number"
            />
          </div>
        )}

        {/* Police Report */}
        {formik.values.document_type === "police_report" && (
          <div className="grid grid-cols-2 mt-2 gap-5">
            <FormInputText
              label="Issued Date"
              name="police_report_issued_date"
            />
            <FormInputText label="Dispatch Number" name="dispatch_number" />
          </div>
        )}

        {/* Attach Document */}
        <InputFile label="Document" name="document" />
      </div>
    </div>
  );
};

type ButtonVarient = "add" | "delete";
const Button = ({
  children,
  handleClick,
  varient,
}: {
  children: React.ReactNode;
  handleClick: () => void;
  varient: ButtonVarient;
}) => {
  const baseStyle =
    "px-3 py-1 flex items-center typo-mid-bd-reg rounded-4xl cursor-pointer";

  const varients: Record<ButtonVarient, string> = {
    add: "text-white bg-secondary-500 hover:bg-secondary-700",
    delete: "text-white bg-error-delete",
  };
  return (
    <button
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        handleClick();
      }}
      className={cn(baseStyle, varients[varient], "")}
    >
      {children}
    </button>
  );
};
