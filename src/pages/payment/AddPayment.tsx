import React from "react";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import PageHeader from "@/common/PageHeader";
import useCreateIndustry from "./hooks/useCreatePayment";
import PaymentForm from "./partials/PaymentForm";

const AddPayment: React.FC = () => {
  const { formik } = useCreateIndustry();
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb Navone="Dashboard" Navtwo="Payment" />
      <PageHeader title="Add Payment" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <PaymentForm/>
      </ExtendedForm>
    </div>
  );
};

export default AddPayment;
