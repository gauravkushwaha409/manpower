import { InputSearchSelect } from "@/components/form/InputSelect";
import InputText from "@/components/form/InputText";
import { InputFile } from "@/components/ui/FormComponent";

const CompanyForm = () => {
  return (
    <div className="grid grid-cols-1 gap-5">
      {/* Company Info */}
      <p className="mt-5 text-black text-sm font-medium">Company Information</p>
      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-2">
          <InputText
            label="Recruitment Company Name"
            name="recruitment_company"
            placeholder="Enter Company Name"
          />
        </div>
        <InputSearchSelect
          label="Country"
          name="country"
          options={[
            { label: "Qatar", value: "qatar" },
            { label: "UAE", value: "uae" },
            { label: "Kuwait", value: "kuwait" },
            { label: "Baharain", value: "baharain" },
            { label: "KSA", value: "saudi" },
            { label: "Malaysia", value: "malaysia" },
            { label: "Oman", value: "oman" },
            { label: "Japan", value: "japan" },
            { label: "South Korea", value: "south-korea" },
            { label: "Singapore", value: "singapore" },
          ]}
          placeholder="Select Country"
        />
        {/* Sector / Company Type is static */}
        <InputSearchSelect
          label="Sector/Company Type"
          name="sector_company_type"
          options={[
            { label: "Qiwa", value: "qiwa" },
            { label: "MOL", value: "mol" },
            { label: "Tashel", value: "tashel" },
          ]}
          placeholder="Select Sector"
        />
        <InputSearchSelect
          label="Currency"
          name="currency"
          options={[{ label: "NRP", value: "nrp" }]}
          placeholder="Select Currency"
        />
      </div>

      {/* License */}
      <div className="grid grid-cols-2 gap-8">
        <InputSearchSelect
          label="License Number Name"
          name="lincense_number_name"
          options={[
            { label: "Trade Lincense", value: "Trade Lincense" },
            { label: "CR Number", value: "CR Number" },
            { label: "SSM", value: "ssm" },
          ]}
        />
        <div className="grid grid-cols-2 gap-8">
          <InputText
            label="License Number"
            name="license_number"
            placeholder="Enter License Number"
          />
          <InputSearchSelect
            label="License Issue By"
            name="license_issue_by"
            options={[
              { label: "Economic Department", value: "economic_department" },
            ]}
          />
        </div>
        <div className="col-span-2">
          <InputFile label="License Image" name="license_image" />
        </div>
      </div>

      {/* Company Address */}
      <p className="mt-5 text-black text-sm font-medium">Company Address</p>
      <div className="mt-2 grid grid-cols-4 gap-8">
        <InputText
          label="State/Region"
          name="state"
          placeholder="Enter State"
        />
        <InputText label="City" name="city" placeholder="Enter City" />
        <InputText label="Street" name="street" placeholder="Enter Street" />
        <InputText label="Area" name="area" placeholder="Enter Area" />
      </div>

      {/* Recruitment Contact Person */}
      <p className="mt-5 text-black text-sm font-medium">
        Recruitment Contact Person
      </p>
      <div className="grid grid-cols-2 gap-8 mt-2">
        <InputText
          label="Contact Person Name"
          name="contact_person_name"
          placeholder="Enter Contact Person Name"
        />
        <InputText
          label="Contact Number"
          name="contact_number"
          placeholder="Enter Contact Number"
        />
        <div className="col-span-2 grid grid-cols-3 gap-8">
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
    </div>
  );
};

export default CompanyForm;
