import ExtendedForm from "@/components/extended-components/ExtendedForm";
import { SupplierForm } from "./supplier-form";
import useUpdateSupplier from "../hooks/use-update-supplier";

export default function UpdateSupplier() {
  const supplier = useUpdateSupplier();

  return (
    <ExtendedForm formik={supplier.formik}>
      <SupplierForm />
    </ExtendedForm>
  );
}
