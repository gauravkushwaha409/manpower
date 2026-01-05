import ExtendedForm from "@/components/extended-components/ExtendedForm";
import FormCheckbox from "@/components/form/form-checkbox";
import FormInputSelect from "@/components/form/form-input-select";
import { useFormik } from "formik";

export default function PermissionForm() {
  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {},
  });
  return (
    <div className="u-flex-child space-y-10">
      <ExtendedForm
        submitText="Update Permission"
        cancelText="Discard"
        formik={formik}
      >
        <div className="space-y-10 p-4">
          <FormInputSelect
            className="w-1/2"
            label="Role"
            name="role"
            options={[
              { label: "Super Admin", value: "super-admin" },
              { label: "Admin", value: "admin" },
              { label: "Manager", value: "manager" },
            ]}
          />
        </div>

        {/* Permissions Form*/}
        <div className="space-y-4 ">
          <div className="grid grid-cols-5 gap-x-10">
            <FormCheckbox
              label="Modules"
              name="modules"
              labelClassName="font-semibold"
            />
            <FormCheckbox
              label="Create"
              name="create"
              labelClassName="font-semibold"
            />
            <FormCheckbox
              label="Read"
              name="read"
              labelClassName="font-semibold"
            />
            <FormCheckbox
              label="Update"
              name="update"
              labelClassName="font-semibold"
            />
            <FormCheckbox
              label="Delete"
              name="delete"
              labelClassName="font-semibold"
            />
          </div>
          <div className="w-full border border-text-50 my-4" />
          {/* Permission */}

          <div className="grid grid-cols-5 gap-x-10">
            <FormCheckbox
              label="Recruitment Process"
              name="recruitment_process"
            />
            <FormCheckbox label="Create" name="recruitment_process.create" />
            <FormCheckbox label="Read" name="recruitment_process.read" />
            <FormCheckbox label="Update" name="recruitment_process.update" />
            <FormCheckbox label="Delete" name="recruitment_process.delete" />
          </div>
          <div className="grid grid-cols-5 gap-x-10">
            <FormCheckbox label="Expense" name="expense" />
            <FormCheckbox label="Create" name="expense.create" />
            <FormCheckbox label="Read" name="expense.read" />
            <FormCheckbox label="Update" name="expense.update" />
            <FormCheckbox label="Delete" name="expense.delete" />
          </div>
          <div className="grid grid-cols-5 gap-x-10">
            <FormCheckbox label="Income" name="income" />
            <FormCheckbox label="Create" name="income.create" />
            <FormCheckbox label="Read" name="income.read" />
            <FormCheckbox label="Update" name="income.update" />
            <FormCheckbox label="Delete" name="income.delete" />
          </div>
        </div>
      </ExtendedForm>
    </div>
  );
}
