import React from "react";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import PageHeader from "@/common/PageHeader";
import useUpdateCompany from "./hooks/useUpdatePayment";
import PaymentForm from "./partials/PaymentForm";

const UpdatePayment: React.FC = () => {
  const { formik } = useUpdateCompany();
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb Navone="Dashboard" Navtwo="Payment" />
      <PageHeader title="Update Payment" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <PaymentForm/>
      </ExtendedForm>
    </div>
  );
};

export default UpdatePayment;