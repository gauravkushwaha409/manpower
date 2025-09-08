import { InputSearchSelect } from "@/components/form/InputSelect";
import InputText from "@/components/form/InputText.tsx";

const CompanyForm = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-5">
        <div className="grid grid-cols-2 gap-8">
          <InputText
            label="Recruitment Company "
            name="recruitment_company"
            placeholder="Enter Company Name"
          />
          <InputText
            label="License Number "
            name="license_number"
            placeholder="Enter License Number"
          />
        </div>
        <p className="mt-5 typography-p2-semibold text-Black-500">
          Company Address
        </p>
        <div className="mt-2 grid grid-cols-2 gap-8">
          <InputSearchSelect
            label="Country"
            name="country"
            options={[{ label: "Nepal", value: "nepal" }]}
          />
          <InputText label="State" name="state" placeholder="Enter State" />
        </div>
        <div className="mt-5 grid grid-cols-3 gap-8">
          <InputText label="City" name="city" placeholder="Enter City" />
          <InputText label="Street" name="street" placeholder="Enter Street" />
          <InputText label="Area" name="area" placeholder="Enter Area" />
        </div>
        <div className="mt-5 grid grid-cols-2 gap-8">
          <InputSearchSelect
            label="Currency"
            name="currency"
            options={[{ label: "NRP", value: "nrp" }]}
          />
        </div>
        <p className="mt-5 typography-p2-semibold text-Black-500">
          Recruitment Contact Person
        </p>
        <div className="mt-2 grid grid-cols-2 gap-8">
          <InputText
            label="Contact Number"
            name="contact_number"
            placeholder="Enter Contact Number"
          />
          <InputText label="Email" name="email" placeholder="Enter Email" />
          <InputText
            label="Office Address"
            name="office_address"
            placeholder="Enter Office Address"
          />
          <InputText
            label="Website URL"
            name="website_url"
            placeholder="Enter Website URL"
          />
        </div>
      </div>
    </>
  );
};

export default CompanyForm;
