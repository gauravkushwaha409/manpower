import { useFormikContext } from "formik";
import FormInputText from "@/components/form/FormInputText";
import FormInputDate from "@/components/form/form-input-date";
import FormInputSelect, { IOption } from "@/components/form/form-input-select";
import { CircleX, FileIcon, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import FormInputPdf from "@/components/form/FormInputPdf";
import TextEditor from "@/components/form/TextEditor";
import { CandidateSchemaType } from "../schema/candidate-schema";

import FormInputTextArea from "@/components/form/form-input-text-area";
import TableWrapper from "@/components/TableWrapper";
import Table from "@/components/Table";
import { ColumnDef } from "@tanstack/react-table";
import TableAction from "@/components/TableAction";
import useCandidateForm from "../hooks/use-candidate-form";
import FormSwitch from "@/components/form/FormSwitch";

// ============= Candidate Step-1 Form ===================
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

// ============= Candidate Step-2 Form ===================
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
                <Button handleClick={addLanguage} variant="add">
                  Add More
                  <Plus />
                </Button>
              )}
              {index > 0 && (
                <Button
                  handleClick={() => removeLanguage(index)}
                  variant="delete"
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
              <Button handleClick={addEducation} variant="add">
                Add More
                <Plus />
              </Button>

              {index > 0 && (
                <Button
                  variant="delete"
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

// ============= Candidate Step-3 Form ===================
export const CandidateFormStep3 = () => {
  const {
    handleAddWorkExperience,
    handleUpdateWorkExperience,
    handleCancelUpdateWorkExperience,
    isEditingWorkExperience,
  } = useCandidateForm();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <FormInputText
          label="Job Title"
          name="tempWorkExperience.job_title"
          placeholder="Enter Job Title"
        />
        <FormInputText
          label="Company Name"
          name="tempWorkExperience.company_name"
          placeholder="Enter Company Name"
        />
        <FormInputText
          label="Job Level"
          name="tempWorkExperience.job_level"
          placeholder="Enter Job Level"
        />
        <div className="grid grid-cols-2 gap-x-4">
          <FormInputDate
            label="Start Date"
            name="tempWorkExperience.start_date"
            placeholder="Enter Start Date"
          />
          <FormInputDate
            label="End Date"
            name="tempWorkExperience.end_date"
            placeholder="Enter End Date"
          />
        </div>
        <div className="flex items-center">
          <FormSwitch title="Currently Working" name="tempWorkExperience.currently_working" />
        </div>
        <FormInputTextArea
          label="Description"
          name="tempWorkExperience.description"
          placeholder="Enter Job Description"
          wrapperClassName="col-span-2"
        />

        <div className="col-span-2">
          {isEditingWorkExperience ? (
            <div className="flex items-center gap-x-4">
              <Button variant="update" handleClick={handleUpdateWorkExperience}>
                Update
              </Button>
              <Button variant="delete" handleClick={handleCancelUpdateWorkExperience}>
                Cancel
              </Button>
            </div>
          ) : (
            <Button variant="add" handleClick={handleAddWorkExperience}>
              Add
              <Plus size={18} className="ml-2" />
            </Button>
          )}
        </div>
      </div>

      <WorkExperienceTable />
    </div>
  )
}

// ============= Candidate Step-4 Form ===================

export const CandidateFormStep4 = () => {
  const {
    handleAddEducation,
    handleUpdateEducation,
    handleCancelUpdateEducation,
    isEditingEducation,
  } = useCandidateForm();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <FormInputText
          label="Degree"
          name="tempEducationDetails.degree"
          placeholder="Enter Degree"
        />
        <FormInputText
          label="Institute Name"
          name="tempEducationDetails.institute_name"
          placeholder="Enter Institute Name"
        />
        <FormInputText
          label="Faculty Name"
          name="tempEducationDetails.faculty_name"
          placeholder="Enter Faculty Name"
        />
        <div className="grid grid-cols-2 gap-x-4">
          <FormInputDate
            label="Start Date"
            name="tempEducationDetails.start_date"
            placeholder="Enter Start Date"
          />
          <FormInputDate
            label="End Date"
            name="tempEducationDetails.end_date"
            placeholder="Enter End Date"
          />
        </div>
        <div className="flex items-center">
          <FormSwitch title="Currently Studying" name="tempEducationDetails.currently_studying" />
        </div>

        <div className="col-span-2">
          {isEditingEducation ? (
            <div className="flex items-center gap-x-4">
              <Button variant="update" handleClick={handleUpdateEducation}>
                Update
              </Button>
              <Button variant="delete" handleClick={handleCancelUpdateEducation}>
                Cancel
              </Button>
            </div>
          ) : (
            <Button variant="add" handleClick={handleAddEducation}>
              Add
              <Plus size={18} className="ml-2" />
            </Button>
          )}
        </div>
      </div>
      <EducationTable />
    </div>
  )
}

// ============= Candidate Step-5 Form ===================

export const CandidateFormStep5 = () => {
  const {
    handleAddCertificate,
    handleUpdateCertificate,
    handleCancelUpdateCertificate,
    isEditingCertificate,
    certificatePdfRef
  } = useCandidateForm();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <FormInputText
          label="Certificate Title"
          name="tempCertificate.certificate_title"
          placeholder="Enter Certificate Title"
        />
        <FormInputText
          label="Organization Name"
          name="tempCertificate.organization_name"
          placeholder="Enter Organization Name"
        />
        <FormInputTextArea
          label="Description"
          name="tempCertificate.description"
          placeholder="Enter Description"
          wrapperClassName="col-span-2"
        />
        <FormInputPdf handleDeleteRef={certificatePdfRef} wrapperClassName="col-span-2" label="Upload Certificate" name="tempCertificate.certificate_file" />

        <div className="col-span-2">
          {isEditingCertificate ? (
            <div className="flex items-center gap-x-4">
              <Button variant="update" handleClick={handleUpdateCertificate}>
                Update
              </Button>
              <Button variant="delete" handleClick={handleCancelUpdateCertificate}>
                Cancel
              </Button>
            </div>
          ) : (
            <Button variant="add" handleClick={handleAddCertificate}>
              Add
              <Plus size={18} className="ml-2" />
            </Button>
          )}
        </div>
      </div>
      <CertificateTable />
    </div>
  )
}

// ============= Candidate Step-6 Form ===================
export const CandidateFormStep6 = () => {
  const formik = useFormikContext<CandidateSchemaType>();
  const { handleAddDocument, handleDeleteDocument, documetPdfRef } = useCandidateForm()
  return (
    <div className="space-y-4">
      {/* Select Document Type */}
      <FormInputSelect
        label="Document Type"
        name="tempDocument.type"
        options={[
          { label: "Citizenship", value: "citizenship" },
          { label: "Passport", value: "passport" },
          { label: "Resume", value: "resume" },
          { label: "Police Report", value: "police_report" },
        ]}
      />

      {/* Citizenship */}
      {formik.values.tempDocument.type === "citizenship" && (
        <div className="grid grid-cols-3 mt-2 gap-5 ">
          <FormInputDate label="Issued Date" name="tempDocument.citizenship_issued_date" />
          <FormInputDate label="Citizenship Number" name="tempDocument.citizenship_number" />
          <FormInputSelect
            label="Issued District"
            name="tempDocument.citizenship_issued_district"
            options={[
              { label: "Kathmandu", value: "kathmandu" },
              { label: "Lalitpur", value: "lalitput" },
              { label: "Bhaktapur", value: "bhaktapur" },
            ]}
          />
        </div>
      )}

      {/* Passport */}
      {formik.values.tempDocument.type === "passport" && (
        <div className="grid grid-cols-3 mt-2 gap-5 ">
          <FormInputDate label="Issued Date" name="tempDocument.passport_issued_date" />
          <FormInputDate label="Expiry Date" name="tempDocument.passport_expiry_date" />
          <FormInputText
            label="Passport Number"
            name="tempDocument.passport_number"
            placeholder="Enter Passport Number"
          />
        </div>
      )}

      {/* Police Report */}
      {formik.values.tempDocument.type === "police_report" && (
        <div className="grid grid-cols-2 mt-2 gap-5">
          <FormInputText label="Issued Date" name="tempDocument.police_report_issued_date" />
          <FormInputText label="Dispatch Number" name="tempDocument.police_report_dispatch_number" />
        </div>
      )}
      <FormInputPdf handleDeleteRef={documetPdfRef} label="Document" name="document" />
      <div>
        <Button variant="add" handleClick={handleAddDocument}>
          Add
        </Button>
      </div>

      {/* Display the Uploaded FIle */}
      <div className="col-span-2 flex gap-x-4">
        {formik?.values?.documents &&
          formik?.values?.documents.map((item, index) => (
            <div
              title={item.type}
              className="w-20 relative flex flex-col items-center overflow-hidden"
            >
              <FileIcon size={30} />
              <p className="typography-caption-c2 flex flex-col">
                <span className="line-clamp-1">
                  {(item?.document instanceof File && item?.document?.name) ||
                    "file"}
                </span>
              </p>

              <button
                className="absolute top-0 right-0 cursor-pointer rounded-full hover:bg-gray-100"
                onClick={(e) => {
                  e.preventDefault();
                  handleDeleteDocument(index);
                }}
              >
                <CircleX size={16} className="text-red-500" />
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};
// ============= Candidate Step-7 Form ===================
export const CandidateFormStep7 = () => {
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

// ========================== Tables ==============================

const WorkExperienceTable = () => {
  const { values } = useCandidateForm();
  return (
    <TableWrapper
      isLoading={false}
      isDataAvailable={values?.workExperience?.length > 0}
    >
      <Table
        isPagination={false}
        columns={WorkExperienceColumn()}
        data={values?.workExperience}
      />
    </TableWrapper>
  );
};

const WorkExperienceColumn = (): ColumnDef<any>[] => {
  const { handleEditWorkExperience, handleDeleteWorkExperience } = useCandidateForm();
  return [
    { header: "Job Title", accessorKey: "job_title" },
    { header: "Company", accessorKey: "company_name" },
    { header: "Level", accessorKey: "job_level" },
    { header: "Start Date", accessorKey: "start_date" },
    { header: "End Date", accessorKey: "end_date" },
    {
      header: "Action",
      accessorKey: "action",
      cell: ({ row }) => (
        <TableAction
          edit={{
            active: true,
            onClick: (e) => { e.preventDefault(); handleEditWorkExperience(row.index); }
          }}
          del={{
            active: true,
            onClick: (e) => { e.preventDefault(); handleDeleteWorkExperience(row.index); }
          }}
        />
      ),
    },
  ];
};

const EducationTable = () => {
  const { values } = useCandidateForm();
  return (
    <TableWrapper
      isLoading={false}
      isDataAvailable={values?.educationDetails?.length > 0}
    >
      <Table
        isPagination={false}
        columns={EducationColumn()}
        data={values?.educationDetails}
      />
    </TableWrapper>
  );
};

const EducationColumn = (): ColumnDef<any>[] => {
  const { handleEditEducation, handleDeleteEducation } = useCandidateForm();
  return [
    { header: "Degree", accessorKey: "degree" },
    { header: "Institute", accessorKey: "institute_name" },
    { header: "Faculty", accessorKey: "faculty_name" },
    { header: "Start Date", accessorKey: "start_date" },
    { header: "End Date", accessorKey: "end_date" },
    {
      header: "Action",
      accessorKey: "action",
      cell: ({ row }) => (
        <TableAction
          edit={{
            active: true,
            onClick: (e) => { e.preventDefault(); handleEditEducation(row.index); }
          }}
          del={{
            active: true,
            onClick: (e) => { e.preventDefault(); handleDeleteEducation(row.index); }
          }}
        />
      ),
    },
  ];
};

const CertificateTable = () => {
  const { values } = useCandidateForm();
  return (
    <TableWrapper
      isLoading={false}
      isDataAvailable={values?.certificates?.length > 0}
    >
      <Table
        isPagination={false}
        columns={CertificateColumn()}
        data={values?.certificates}
      />
    </TableWrapper>
  );
};

const CertificateColumn = (): ColumnDef<any>[] => {
  const { handleEditCertificate, handleDeleteCertificate } = useCandidateForm();
  return [
    { header: "Title", accessorKey: "certificate_title" },
    { header: "Organization", accessorKey: "organization_name" },
    {
      header: "Action",
      accessorKey: "action",
      cell: ({ row }) => (
        <TableAction
          edit={{
            active: true,
            onClick: (e) => { e.preventDefault(); handleEditCertificate(row.index); }
          }}
          del={{
            active: true,
            onClick: (e) => { e.preventDefault(); handleDeleteCertificate(row.index); }
          }}
        />
      ),
    },
  ];
};


// Add and Delete Button
type ButtonVariant = "add" | "update" | "delete";
const Button = ({
  children,
  handleClick,
  variant,
}: {
  children: React.ReactNode;
  handleClick: () => void;
  variant: ButtonVariant;
}) => {
  const baseStyle =
    "px-4 py-2 flex items-center justify-center typo-mid-bd-reg rounded-lg cursor-pointer transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants: Record<ButtonVariant, string> = {
    add: "text-white bg-secondary-500 hover:bg-secondary-700",
    update: "text-white bg-primary-500 hover:bg-primary-700",
    delete: "text-white bg-error-delete hover:bg-red-700",
  };
  return (
    <button
      type="button"
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        handleClick();
      }}
      className={cn(baseStyle, variants[variant])}
    >
      {children}
    </button>
  );
};

