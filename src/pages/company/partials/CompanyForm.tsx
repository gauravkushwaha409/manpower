import { InputSearchSelect } from "@/components/form/InputSelect";
import InputText from "@/components/form/InputText";
import { InputFile } from "@/components/ui/FormComponent";

const CompanyForm = () => {
  return (
    <div className="grid grid-cols-1 gap-5">
      {/* Company Info */}
      <div className="grid grid-cols-3 gap-8">
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
        />
        <InputSearchSelect
          label="Currency"
          name="currency"
          options={[{ label: "NRP", value: "nrp" }]}
        />
        <InputText
          label="Recruitment Company"
          name="recruitment_company"
          placeholder="Enter Company Name"
        />
      </div>

      <div className="grid grid-cols-2 gap-8">
        <InputText
          label="License Number"
          name="license_number"
          placeholder="Enter License Number"
        />
        <InputFile label="Upload License Image" name="license_image" />
      </div>

      {/* Company Address */}
      <p className="mt-5 text-Black-900 text-xl font-bold">Company Address</p>
      <div className="mt-2 grid grid-cols-4 gap-8">
        <InputText label="State" name="state" placeholder="Enter State" />
        <InputText label="City" name="city" placeholder="Enter City" />
        <InputText label="Street" name="street" placeholder="Enter Street" />
        <InputText label="Area" name="area" placeholder="Enter Area" />
      </div>


      {/* Recruitment Contact Person */}
      <p className="mt-5 text-Black-900 text-xl font-bold">
        Recruitment Contact Person
      </p>
      <div className="grid grid-cols-2 gap-8 mt-2">
        <InputText
          label="Contact Number"
          name="contact_number"
          placeholder="Enter Contact Number"
        />
        <InputText label="Email" name="email" placeholder="Enter Email" />
      </div>

      <div className="grid grid-cols-2 gap-8 mt-2">
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
  );
};

export default CompanyForm;
