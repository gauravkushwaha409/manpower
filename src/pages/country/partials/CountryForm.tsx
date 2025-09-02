import React from "react";
import { FormikProps, FormikProvider } from "formik";
import InputText from "@/components/form/InputText.tsx";
import { InputSearchSelect } from "@/components/form/InputSelect.tsx";
import { ICountry } from "@/pages/country/interface/ICountry.ts";

interface IProps {
  formik: FormikProps<ICountry>;
  isUpdate?: boolean;
}

const CountryForm: React.FC<IProps> = ({ formik, isUpdate }) => {
  return (
    <FormikProvider value={formik}>
      <form
        onSubmit={formik.handleSubmit}
        className="space-y-4 gird grid-cols-2"
      >
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-5">
            <InputText
              label="Country"
              name="country"
              placeholder="Enter Country"
            />
            <InputText
              label="Currency"
              name="currency"
              placeholder="Enter Currency"
            />
            <InputText
              label="Capital"
              name="capital"
              placeholder="Enter Capital"
            />
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
          <div className="mt-8 flex items-center justify-end">
            <button
              type="submit"
              className="typography-button-text px-5 py-3 bg-Blue-400 rounded-lg"
            >
              {isUpdate ? "Update Country" : "Add Country"}
            </button>
          </div>
        </div>
      </form>
    </FormikProvider>
  );
};
export default CountryForm;
