import ExtendedForm from "@/components/extended-components/ExtendedForm";
import { SupplierForm } from "./supplier-form";
import useCreateSupplier from "../hooks/use-create-supplier";

export default function CreateSupplier() {
  const supplier = useCreateSupplier();

  return (
    <ExtendedForm formik={supplier.formik}>
      <SupplierForm />
    </ExtendedForm>
  );
}
