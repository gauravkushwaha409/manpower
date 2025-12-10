import ExtendedTooltip from "@/components/extended-components/ExtendedTooltip";
import InputDate from "@/components/form/InputDate";
import InputText from "@/components/form/InputText";
import ReactSelect from "@/components/form/ReactSelect";
import { PATH } from "@/constant/path";
import { Plus } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const PreApprovalDofeForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        <ReactSelect
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

        <div className="flex items-center gap-2">
          <div className="flex-1">
            <ReactSelect
              label="Recuirtment Company"
              name="company"
              options={[]}
              placeholder="Select Recuirtment Company"
            />
          </div>
          {location.pathname === PATH.dashboard.addPreApprovalDofe && (
            <ExtendedTooltip title="Create Company">
              <button
                type="button"
                className="h-10 mt-6 px-3 bg-primary-500 text-white rounded text-sm cursor-pointer flex items-center justify-center"
                onClick={() => {
                  navigate(PATH.dashboard.addCompany);
                }}
              >
                <Plus className="w-4 h-4" />
              </button>
            </ExtendedTooltip>
          )}
        </div>

        <InputText
          label=" Registration/ License No."
          name="reg"
          placeholder="Enter your Registration/ License No."
        />

        <ReactSelect
          label="Employer Type"
          name="country"
          options={[
            { label: "Company", value: "company" },
            { label: "Individual", value: "individual" },
            { label: "Domestic", value: "domestic" },
            { label: "Outsourcing", value: "out-sourcing" },
            { label: "Government", value: "government" },
            { label: "Semi-government", value: "semi-government" },
          ]}
          placeholder="Select Country"
        />

        <InputDate
          label="Enter your Pre Approval Date"
          name="preApprovalDate"
          placeholder="Enter your Pre Approval Date"
        />
        <InputText
          label="Enter your Pre LT number"
          name="ltNumber"
          placeholder="Enter your Pre LT number"
        />
        <InputText
          label="Enter your Chalani Number"
          name="chalanNumber"
          placeholder="Enter your Chalani Number"
        />
      </div>
    </div>
  );
};

export default PreApprovalDofeForm;
