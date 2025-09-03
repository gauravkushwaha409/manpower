import InputText from "@/components/form/InputText.tsx";
import { InputSearchSelect } from "@/components/form/InputSelect.tsx";

const candidateOptions = [{ label: "Gaurav", value: "gaurav" }];
const jobVacancyOptions = [{ label: "React Developer", value: "react" }];
const countryOptions = [{ label: "Nepal", value: "nepal" }];
const companyOptions = [{ label: "Dome Infosyss", value: "dome_info" }];

const DOFEForm = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-5">
        <InputSearchSelect
          label="Candidate Name"
          name="candidate_name"
          options={candidateOptions}
        />
        <InputText
          label="Sticker No."
          name="sticker_no"
          placeholder="Enter Sticker No."
        />
        <InputSearchSelect
          label="Job Vacancy"
          name="job_vacancy"
          options={jobVacancyOptions}
        />
      </div>

      <div className="grid grid-cols-2 gap-5">
        <InputSearchSelect
          label="Country"
          name="country"
          options={countryOptions}
        />
        <InputSearchSelect
          label="Company Name"
          name="company"
          options={companyOptions}
        />
      </div>
    </div>
  );
};

export default DOFEForm;
