import InputText from "@/components/form/InputText.tsx";
import { InputSearchSelect } from "@/components/form/InputSelect.tsx";

const CountryForm= () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        <InputText label="Country" name="country" placeholder="Enter Country" />
        <InputText
          label="Currency"
          name="currency"
          placeholder="Enter Currency"
        />
        <InputText label="Capital" name="capital" placeholder="Enter Capital" />
        <InputSearchSelect
          label="Language"
          name="language"
          options={[{ label: "Nepali", value: "nepali" }]}
        />
        <InputText
          label="Religion"
          name="religion"
          placeholder="Enter Religion"
        />
      </div>

      
    </>
  );
};

export default CountryForm;
