import { useFormikContext } from "formik";
import FormInputText from "@/components/form/FormInputText";
import FormInputDate from "@/components/form/form-input-date";
import FormInputSelect, { IOption } from "@/components/form/form-input-select";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import FormInputPdf from "@/components/form/FormInputPdf";
import TextEditor from "@/components/form/TextEditor";
import { CandidateSchemaType } from "../schema/candidate-schema";

export const CandidateFormStep1 = () => {
  const provienceOption: IOption[] = [
    { label: "Koshi", value: "koshi" },
    { label: "Madhesh", value: "madhesh" },
    { label: "Bagmati", value: "bagmati" },
    { label: "Gandaki", value: "gandaki" },
    { label: "Lumbini", value: "lumbini" },
    { label: "Karnali", value: "karnali" },
    { label: "Sudurpaschim", value: "sudurpaschim" },
  ];

  const districtOption: IOption[] = [
    { label: "Kathmandu", value: "kathmandu" },
    { label: "Lalitpur", value: "lalitpur" },
    { label: "Bhaktapur", value: "bhaktapur" },
    { label: "Chitwan", value: "chitwan" },
    { label: "Kaski", value: "kaski" },
    { label: "Morang", value: "morang" },
    { label: "Jhapa", value: "jhapa" },
    { label: "Sunsari", value: "sunsari" },
    { label: "Rupandehi", value: "rupandehi" },
    { label: "Banke", value: "banke" },
  ];
  return (
    <div className="space-y-4">
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
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
          label="Passport No."
          name="passport_no"
          placeholder="Enter Passport Number"
        />

        <div className="col-span-3 grid grid-cols-4 gap-x-4">
          <FormInputDate label="Date Of Birth" name="date_of_birth" />
          <FormInputSelect
            label="Birth Place"
            name="birth_place"
            placeholder="Select Your Birth Place"
            options={[{ label: "Nepal", value: "nepal" }]}
          />
          <FormInputText
            label="Father Name"
            name="father_name"
            placeholder="Enter Father Name"
          />
          <FormInputText
            label="Mother Name"
            name="mother_name"
            placeholder="Enter Mother Name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
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
      </div>

      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          <FormInputSelect
            label="Province"
            name="province"
            options={provienceOption}
          />
          <FormInputSelect
            label="District"
            name="district"
            options={districtOption}
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
    </div>
  );
};

export const CandidateFormStep2 = () => {
  const newFieldEducation = {
    nameOfInstute: "",
    course: "",
    passedYear: "",
  };
  const formik = useFormikContext<CandidateSchemaType>();

  const addEducation = () => {
    formik.setFieldValue("education", [
      ...formik.values.education,
      newFieldEducation,
    ]);
  };

  const removeEducation = (index: number) => {
    const education = [...formik.values.education];
    education.splice(index, 1);
    formik.setFieldValue("education", education);
  };

  const newFieldLanguage = {
    language: "",
    languageLevel: "",
  };

  const addLanguage = () => {
    formik.setFieldValue("languages", [
      ...formik.values.languages,
      newFieldLanguage,
    ]);
  };

  const removeLanguage = (index: number) => {
    const languages = [...formik.values.languages];
    languages.splice(index, 1);
    formik.setFieldValue("languages", languages);
  };
  return (
    <div className="h-fit w-full space-y-4">
      <div className="w-full grid grid-cols-2 gap-x-4">
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

      {/* Language proficiency */}
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
            <div className="mt-3 flex items-center justify-between gap-5 col-span-2">
              {index === formik.values.languages.length - 1 && (
                <Button handleClick={addLanguage} varient="add">
                  Add More
                  <Plus />
                </Button>
              )}
              {index > 0 && (
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

      {/* Education / certification */}
      {formik.values.education.map((_, index) => (
        <div key={index} className="grid grid-cols-3 mt-2 gap-5 relative group">
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
  );
};

export const CandidateFormStep3 = () => {
  const formik = useFormikContext<CandidateSchemaType>();
  return (
    <div className="space-y-4">
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
        <div className="grid grid-cols-3 mt-2 gap-5 ">
          <FormInputDate label="Issued Date" name="citizenship_issue_date" />
          <FormInputDate label="Citizenship Number" name="citizenship_number" />
          <FormInputSelect
            label="Issued District"
            name="issued_district"
            options={[
              { label: "Kathmandu", value: "kathmandu" },
              { label: "Lalitpur", value: "lalitput" },
              { label: "Bhaktapur", value: "bhaktapur" },
            ]}
          />
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
          <FormInputText label="Issued Date" name="police_report_issued_date" />
          <FormInputText label="Dispatch Number" name="dispatch_number" />
        </div>
      )}

      <FormInputPdf label="Document" name="document" />
    </div>
  );
};

export const CandidateFormStep4 = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <FormInputSelect
        label="Applied Country"
        name="applied_country"
        options={[
          { value: "Dubai", label: "dubai" },
          { value: "USA", label: "USA" },
          { value: "Canada", label: "Canada" },
          { value: "UK", label: "UK" },
          { value: "Australia", label: "Australia" },
        ]}
      />
      <FormInputSelect
        label="Company Name"
        name="company Name"
        options={[
          { value: "Dubai", label: "dubai" },
          { value: "USA", label: "USA" },
          { value: "Canada", label: "Canada" },
          { value: "UK", label: "UK" },
          { value: "Australia", label: "Australia" },
        ]}
      />

      <FormInputSelect
        label="Job Vacancy"
        name="job_vacancy"
        options={[
          { value: "Software Engineer", label: "Software Engineer" },
          { value: "Data Analyst", label: "Data Analyst" },
          { value: "Product Manager", label: "Product Manager" },
          { value: "UI/UX Designer", label: "UI/UX Designer" },
        ]}
      />
      <FormInputSelect
        label="Interview Process"
        name="interview_process"
        options={[
          { value: "Short Listed", label: "short_listed" },
          { value: "Pending", label: "Pending" },
          { value: "Selected", label: "Selected" },
          { value: "Rejected", label: "Rejected" },
        ]}
      />
      <div className="col-span-2">
        <TextEditor label="Description" name="description" />
      </div>
    </div>
  );
};

// Add and Delete Button
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
